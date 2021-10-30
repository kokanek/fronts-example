import { Link } from 'react-router-dom';
import React from "react";
import { Heading, Flex, Button } from "@chakra-ui/react"
// const Button = React.lazy(() => import("app2/src/Button"));

const HomePage = () => (
  <Flex align='center' justify='center' direction='column' h={400} bg='pink.100'>
    <Heading as="h1" size="4xl" isTruncated>
      Welcome to our site!
    </Heading>

    <Link to="/app2"><Button colorScheme="blue" mt={8}>Browse products</Button></Link>
  </Flex>
);

export default HomePage;
