// components/ContactForm.js

import { useState } from "react";
import {
  Box,
  Input,
  Textarea,
  Button,
  Text,
  Container,
} from "@chakra-ui/react";
import styles from "./contactForm.module.css";
function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showOldMessages, setShowOldMessages] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMessage = {
      email,
      name,
      message,
    };

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMessage),
      });

      if (response.ok) {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setEmail("");
        setName("");
        setMessage("");
      } else {
        console.error("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error occurred while submitting the form:", error);
    }
  };

  const handleToggleOldMessages = () => {
    setShowOldMessages((prevState) => !prevState);
  };

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <Container
        maxW="container.md"
        bg={"blackAlpha.400"}
        bgBlendMode={"soft-light"}
      >
        <Box
          className={styles.container}
          color="white"
          p={4}
          mb={-4}
          mt={10}
          fontFamily={"poppins"}
          fontSize={"2xl"}
        >
          {" "}
          Feel free to Contact us
        </Box>
        <Box p={4} borderRadius="md">
          <form onSubmit={handleSubmit}>
            <Input
              className={styles.glow}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              mb={2}
              color={"white"}
            />
            <Input
              className={styles.glow}
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              mb={2}
              color={"white"}
            />
            <Textarea
              className={styles.glow}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              mb={2}
              color={"white"}
            />
            <Button
              className={styles.left}
              type="submit"
              colorScheme={"blue"}
              bg={"rgb(0,37,39)"}
              rounded={"full"}
              px={6}
              mt={3}
              _hover={{
                bg: "white",
                color: "rgb(0,37,39)",
              }}
            >
              Submit
            </Button>
          </form>
          {messages.length > 0 && (
            <>
              <Button
                className={styles.right}
                colorScheme={"blue"}
                bg={"rgb(0,37,39)"}
                rounded={"md"}
                px={6}
                _hover={{
                  bg: "white",
                  color: "rgb(0,37,39)",
                }}
                mt={10}
                size="md"
                onClick={handleToggleOldMessages}
              >
                {showOldMessages
                  ? "😮Hide old messages"
                  : "😶Show old messages"}
              </Button>
              {showOldMessages ? (
                <Box
                  mt={4}
                  p={2}
                  borderRadius="md"
                  color="white"
                  bg="blackAlpha.400"
                >
                  {messages.map((msg, index) => (
                    <Box
                      key={index}
                      p={2}
                      borderRadius="md"
                      color="white"
                      mb={2}
                    >
                      <Button
                        colorScheme={"blue"}
                        bg={"rgba(0,37,39,0.8)"}
                        rounded={"md"}
                        px={6}
                        _hover={{
                          bg: "white",
                          color: "rgba(0,37,39,0.7)",
                        }}
                      >
                        {" "}
                        User Comment {index + 1}{" "}
                      </Button>
                      <Text mt={1} mb={1} fontFamily={"inter"}>
                        <Button
                          bg={"rgb(0,37,39)"}
                          _hover={{
                            bg: "rgb(0,37,39)",
                          }}
                          size={"sm"}
                          mr={2}
                          color={"white"}
                          fontFamily={"poppins"}
                          fontWeight={"bold"}
                        >
                          💌-Email :
                        </Button>{" "}
                        {msg.email}
                      </Text>
                      <Text mt={1} mb={1} fontFamily={"inter"}>
                        <Button
                          bg={"rgb(0,37,39)"}
                          _hover={{
                            bg: "rgb(0,37,39)",
                          }}
                          size={"sm"}
                          mr={2}
                          color={"white"}
                          fontFamily={"poppins"}
                          fontWeight={"bold"}
                        >
                          👦-Name :
                        </Button>{" "}
                        {msg.name}
                      </Text>
                      <Text mt={1} mb={1} fontFamily={"inter"}>
                        <Button
                          bg={"rgb(0,37,39)"}
                          _hover={{
                            bg: "rgb(0,37,39)",
                          }}
                          size={"sm"}
                          mr={2}
                          color={"white"}
                          fontFamily={"poppins"}
                          fontWeight={"bold"}
                        >
                          💬-Message :{" "}
                        </Button>
                        {msg.message}
                      </Text>
                    </Box>
                  ))}
                </Box>
              ) : (
                <Box mt={4}>
                  <Box
                    p={2}
                    borderRadius="md"
                    color="white"
                    bg="blackAlpha.400"
                  >
                    <Button
                      colorScheme={"blue"}
                      bg={"rgb(0,37,39)"}
                      rounded={"md"}
                      mb={2}
                      px={6}
                      _hover={{
                        bg: "white",
                        color: "rgb(0,37,39)",
                      }}
                    >
                      {" "}
                      User Comment {messages.length}{" "}
                    </Button>
                    <Text mt={1} mb={1} fontFamily={"inter"}>
                      <Button
                        bg={"rgb(0,37,39)"}
                        _hover={{
                          bg: "rgb(0,37,39)",
                        }}
                        size={"sm"}
                        mr={2}
                        color={"white"}
                        fontFamily={"poppins"}
                        fontWeight={"bold"}
                      >
                        💌-Email :
                      </Button>{" "}
                      {messages[messages.length - 1].email}
                    </Text>
                    <Text mt={1} mb={1} fontFamily={"inter"}>
                      <Button
                        bg={"rgb(0,37,39)"}
                        _hover={{
                          bg: "rgb(0,37,39)",
                        }}
                        size={"sm"}
                        mr={2}
                        color={"white"}
                        fontFamily={"poppins"}
                        fontWeight={"bold"}
                      >
                        👦-Name :
                      </Button>{" "}
                      {messages[messages.length - 1].name}
                    </Text>
                    <Text mt={1} mb={1} fontFamily={"inter"}>
                      <Button
                        bg={"rgb(0,37,39)"}
                        _hover={{
                          bg: "rgb(0,37,39)",
                        }}
                        size={"sm"}
                        mr={2}
                        color={"white"}
                        fontFamily={"poppins"}
                        fontWeight={"bold"}
                      >
                        💬-Message :
                      </Button>{" "}
                      {messages[messages.length - 1].message}
                    </Text>
                  </Box>
                </Box>
              )}
            </>
          )}
        </Box>
      </Container>
    </div>
  );
}

export default ContactForm;
