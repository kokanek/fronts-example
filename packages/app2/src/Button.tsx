import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { globalTransport } from "fronts-react";
import { Button, Box } from "@chakra-ui/react"

const Component = () => {
  const [count, setCount] = useState(0);
  return (
    <Button colorScheme="blue">Browse products</Button>
  );
};

export default Component;
