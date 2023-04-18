'use client';
import { ReactNode } from 'react';
import { Box, Flex, Link, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function Nav2() {
  return (
    <>
      <Box bg={'transparent'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Image alt={'logo'} src={'/logo.svg'} width={20} height={20} />

          <Link
            href={'/'}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
            fontWeight={'bold'}
          >
            Paybora
          </Link>
        </Flex>
      </Box>
    </>
  );
}
