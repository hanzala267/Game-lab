import React from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import {
  SearchIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
} from "@chakra-ui/icons";

function Above() {
  return (
    <>
      <Box>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          padding={4}
          bg="gray.800"
          color="white"
        >
          <Box>
            <Box fontSize="lg" fontWeight="bold">
              My Logo
            </Box>
          </Box>

          <InputGroup maxW="xs">
            <Input placeholder="Search..." borderRadius="md" bg="white" />
            <InputRightElement>
              <IconButton
                aria-label="Search"
                icon={<SearchIcon />}
                bg="transparent"
                _hover={{ bg: "transparent" }}
                _active={{ bg: "transparent" }}
              />
            </InputRightElement>
          </InputGroup>

          <Box>
            <IconButton
              aria-label="Twitter"
              icon={<TwitterIcon />}
              bg="transparent"
              _hover={{ bg: "transparent", color: "blue.500" }}
              _active={{ bg: "transparent", color: "blue.700" }}
            />
            <IconButton
              aria-label="Facebook"
              icon={<FacebookIcon />}
              bg="transparent"
              _hover={{ bg: "transparent", color: "blue.500" }}
              _active={{ bg: "transparent", color: "blue.700" }}
            />
            <IconButton
              aria-label="Instagram"
              icon={<InstagramIcon />}
              bg="transparent"
              _hover={{ bg: "transparent", color: "pink.500" }}
              _active={{ bg: "transparent", color: "pink.700" }}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Above;
