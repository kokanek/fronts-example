import React, { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  AvatarBadge,
  IconButton,
  Button,
} from '@chakra-ui/react';

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      width={380}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function Product({ p, addToCart }) {
  return (
    <Flex direction={['row', 'column']}>
      <PriceWrapper>
        <Box py={4} px={12} bg={useColorModeValue('gray.50', 'gray.700')}>
          <Text fontWeight="500" fontSize="2xl">
            {p.title}
          </Text>
          <HStack justifyContent="center">
            <Text fontSize="3xl" fontWeight="600">
              $
            </Text>
            <Text fontSize="5xl" fontWeight="900">
              {p.price}
            </Text>
          </HStack>
        </Box>
        <VStack
          bg='white'
          py={4}
          borderBottomRadius={'xl'}>
          <List spacing={3} textAlign="start" px={12}>
            <ListItem>
              <Image src={p.image} alt="Segun Adebayo" boxSize="150px" />
            </ListItem>
          </List>
          <Box w="80%" pt={7}>
            <Button w="full" colorScheme="blue" variant={p.active ? "solid" : "outline"} onClick={() => addToCart(p.id)}>
              {p.active ? "REMOVE FROM CART" : "ADD TO CART"}
            </Button>
          </Box>
        </VStack>
      </PriceWrapper>
    </Flex>
  )
}