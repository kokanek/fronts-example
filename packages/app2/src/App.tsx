import React, { useState } from "react";
import { globalTransport } from "fronts-react";
import { ChakraProvider, Stack } from "@chakra-ui/react"
import Product from './components/Product';
import products from './products';
import { Profiler } from "react";

const App = () => {
  const [prod, setProducts] = useState(products);

  function addToCart(pid) {
    const newProd = [...prod];

    newProd.forEach(p => {
      if (p.id === pid) {
        if (!p.active) {
          globalTransport.emit("increase");
          p.active = true;
        } else {
          globalTransport.emit("decrease");
          p.active = false;
        }
      }
    });

    setProducts(newProd);
  }

  return (
    <ChakraProvider>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        bg='gray.100'
        py={10}>
        {prod.map((p) => (<Product p={p} addToCart={addToCart} />))}
      </Stack>
    </ChakraProvider>
  )
};

export default App;
