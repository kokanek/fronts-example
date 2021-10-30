import { Link } from 'react-router-dom';
import React from 'react';
import { ButtonGroup, Button, Flex } from '@chakra-ui/react';
import {
  IconButton,
  Box,
} from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { css } from '@emotion/react';

const Navigation = ({ cartCount }) => (
  <Flex px={32} py={8} justify='space-between'>
    <Link to="/"><Button colorScheme="blue">Home</Button></Link>
    <CartButton cartCount={cartCount} />
  </Flex>
);

function CartButton({ cartCount }) {
  return (
    <IconButton
      css={css`
              position: relative !important;
            `}
      p={'4'}
      colorScheme={'gray'}
      aria-label={'Notifications'}
      size={'lg'}
      icon={<>
        Cart
        <FaShoppingCart color={'gray.750'} />
        <Box as={'span'} color={'white'} position={'absolute'} top={'0px'} right={'4px'} fontSize={'0.8rem'}
          bgColor={'red'} borderRadius={'lg'} zIndex={9999} p={'2px'} >
          {cartCount}
        </Box>
      </>}
    />
  )
}

export default Navigation;
