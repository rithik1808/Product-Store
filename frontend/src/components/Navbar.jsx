import { Container, Flex, Text, Link, HStack } from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <Container>
      <Flex
        justifyContent={"space-between"}
        h={16}
        alignContent={"center"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "22" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"left"}
          bgGradient={"linear(to-l, #7928CA, #FF0080)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>Create</Link>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Navbar;
