import { Container, Text, VStack, Link } from "@chakra-ui/react";
import React from "react";

const HomePage = () => {
  return (
    <Container>
      <VStack>
        <Text fontSize={"3xl"} fontWeight={"bold"}>
          All Products
        </Text>
        <Text marginTop={"20px"}>
          No Products found 😢{" "}
          <Link to="/create">
            <Text
              as="span"
              color={"blue.500"}
              _hover={{ color: "blue.600", textDecoration: "underline" }}
            >
              Create a product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  );
};

export default HomePage;
