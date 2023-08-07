import { useState, useEffect } from "react";
import { Box, Heading, IconButton } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import styles from "./card.module.css";
import Image from "next/image";
import axios from "axios";

const Card = ({ thumbnail, title, link, disc }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    axios
      .get(`/api/heart?id=${link}`)
      .then((response) => {
        const { count } = response.data;
        setLikeCount(count);
      })
      .catch((error) => {
        console.log("Error fetching like count:", error);
      });
  }, [link]);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount(likeCount + 1);

    axios
      .post("/api/heart", { id: link, count: likeCount + 1 })
      .then((response) => {
        console.log("Like count saved successfully:", response.data);
      })
      .catch((error) => {
        console.log("Error saving like count:", error);
      });
  };

  return (
    <div className={styles.card}>
      <div data-aos="fade-right">
        <Box maxW="sm" overflow="hidden">
          <Image
            className={styles.image}
            src={thumbnail}
            alt={title}
            width={500}
            height={200}
          />

          <Box p="4">
            <div className={styles.container}>
              <div className={styles.above}>
                <Heading
                  size="md"
                  mb="2"
                  style={{ fontFamily: "mulish", fontSize: "3vh" }}
                >
                  {title}
                  <Box
                    mt={4}
                    color="gray.300"
                    fontFamily={"inter"}
                    fontWeight={"normal"}
                    fontSize={"sm"}
                  >
                    {disc}
                  </Box>
                </Heading>
              </div>
              <div className={styles.down}>
                <div className={styles.icon1}>
                  <div className={styles.icon}>
                    <IconButton
                      bg={"Transparent"}
                      aria-label="Like"
                      icon={<AiFillHeart color={isLiked ? "red" : "gray"} />}
                      onClick={handleLikeClick}
                      _hover={{
                        bg: "transparent",
                      }}
                    />
                  </div>
                  <span className={styles.count}>{likeCount}</span>
                </div>
                <div className={styles.bottom}>
                  <button className={styles.custombutton}>
                    <a href={link} target="_blank" rel="noreferrer">
                      Download
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </Box>
        </Box>{" "}
      </div>
    </div>
  );
};

export default Card;
