import { useState } from "react";
import { Box, Flex, Input, IconButton, Icon } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaFacebook, FaSearch } from "react-icons/fa";
import styles from "./navbar.module.css";

const Navbar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box
      bg={"blackAlpha.600"}
      py={4}
      px={6}
      className={styles.blurredContainer}
    >
      <Flex justify="space-between" align="center">
        <Box className={styles.logo}>
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Box
              as="span"
              style={{ fontFamily: "poppins" }}
              fontSize="xl"
              fontWeight="bold"
              color="white"
              marginRight={4}
            >
              Game-Lab
            </Box>
          </a>
        </Box>

        <Box // Wrap the Input inside a Box element for better control
          display={{ base: "none", md: "block" }} // Hide the search box on small screens
        >
          <Input
            type="text"
            placeholder="Search..."
            size="lg"
            bg={"blackAlpha.800"}
            color="white"
            _placeholder={{ color: "gray.300" }}
            borderRadius="md"
            py={2}
            px={3}
            width="800px"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </Box>

        <div className={styles.icons}>
          <Flex align="center">
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                icon={<Icon as={FaTwitter} boxSize={5} />}
                aria-label="Twitter"
                mr={2}
                colorScheme="blue.100"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                icon={<Icon as={FaInstagram} boxSize={5} />}
                aria-label="Instagram"
                mr={2}
                colorScheme="blue.100"
              />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                icon={<Icon as={FaFacebook} boxSize={5} />}
                aria-label="Facebook"
                mr={4}
                colorScheme="blue.100"
              />
            </a>
          </Flex>
        </div>
      </Flex>

      {/* The following Input element will be shown only on small screens */}
      <Box display={{ base: "block", md: "none" }}>
        <Input
          type="text"
          placeholder="Search..."
          size="md" // You can adjust the size for small screens here
          bg={"blackAlpha.800"}
          color="white"
          _placeholder={{ color: "gray.300" }}
          borderRadius="md"
          py={2}
          px={3}
          width="100%" // Use full width on small screens
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </Box>
    </Box>
  );
};

export default Navbar;
