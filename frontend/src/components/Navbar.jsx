import { Container, Flex, Text, HStack, Button  } from "@chakra-ui/react";
import { LuCircleFadingPlus } from "react-icons/lu";
import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"100vw"} px={10}>
      <Flex
        h={16}
        alignContent={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"left"}
          bgGradient={"linear(to-l,rgb(86, 0, 172),rgb(171, 86, 255))"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <LuCircleFadingPlus></LuCircleFadingPlus>
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MdDarkMode /> : <MdOutlineWbSunny />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Navbar;
