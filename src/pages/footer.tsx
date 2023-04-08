// import {
//   Box,
//   Container,
//   Link,
//   SimpleGrid,
//   Stack,
//   Text,
//   Flex,
//   Tag,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import { ReactNode } from 'react';
//
// const Logo = (props: any) => {
//   return <Image alt={'logo'} src={'/logo.svg'} width={50} height={50} />;
// };

// const ListHeader = ({ children }: { children: ReactNode }) => {
//   return (
//     <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
//       {children}
//     </Text>
//   );
// };

// export default function Footer() {
//   return (
//     <Box
//       bg={useColorModeValue('gray.50', 'gray.900')}
//       color={useColorModeValue('gray.700', 'gray.200')}
//     >
//       <Container as={Stack} maxW={'6xl'} py={10}>
//         <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={12}>
//           <Stack align={{ base: 'flex-start', md: 'flex-end' }}>
//             <ListHeader>Product</ListHeader>
//             <Link href={'#'}>Overview</Link>
//             <Stack direction={'row'} align={'center'} spacing={8}>
//               <Link href={'#'}>Features</Link>
//               {/* <Tag
//                 size={'sm'}
//                 bg={useColorModeValue('blue.300', 'blue.800')}
//                 ml={2}
//                 color={'white'}
//               >
//                 New
//               </Tag> */}
//             </Stack>
//             <Link href={'#'}>Tutorials</Link>
//             <Link href={'#'}>Pricing</Link>
//             <Link href={'#'}>Releases</Link>
//           </Stack>
//           <Stack align={'flex-start'}>
//             <ListHeader>Company</ListHeader>
//             <Link href={'#'}>About Us</Link>
//             <Link href={'#'}>Press</Link>
//             <Link href={'#'}>Careers</Link>
//             <Link href={'#'}>Contact Us</Link>
//             <Link href={'#'}>Partners</Link>
//           </Stack>
//           <Stack align={'flex-start'}>
//             <ListHeader>Legal</ListHeader>
//             <Link href={'#'}>Cookies Policy</Link>
//             <Link href={'#'}>Privacy Policy</Link>
//             <Link href={'#'}>Terms of Service</Link>
//             <Link href={'#'}>Law Enforcement</Link>
//             <Link href={'#'}>Status</Link>
//           </Stack>
//           <Stack align={'flex-start'}>
//             <ListHeader>Follow Us</ListHeader>
//             <Link href={'#'}>Facebook</Link>
//             <Link href={'#'}>Twitter</Link>
//             <Link href={'#'}>Dribbble</Link>
//             <Link href={'#'}>Instagram</Link>
//             <Link href={'#'}>LinkedIn</Link>
//           </Stack>
//         </SimpleGrid>
//       </Container>
//       <Box py={10}>
//         <Flex
//           align={'center'}
//           _before={{
//             content: '""',
//             borderBottom: '1px solid',
//             borderColor: useColorModeValue('gray.200', 'gray.700'),
//             flexGrow: 1,
//             mr: 8,
//           }}
//           _after={{
//             content: '""',
//             borderBottom: '1px solid',
//             borderColor: useColorModeValue('gray.200', 'gray.700'),
//             flexGrow: 1,
//             ml: 8,
//           }}
//         >
//           <Logo />
//         </Flex>
//         <Text pt={6} fontSize={'sm'} textAlign={'center'}>
//           © 2023 Octix . All rights reserved
//         </Text>
//       </Box>
//     </Box>
//   );
// }
import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Center,
  Flex,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import Image from 'next/image';
const Logo = (props: any) => {
  return (
    <>
      <Flex>
        <Image alt={'logo'} src={'/logo.svg'} width={30} height={30} />
        <Text fontSize={28} fontWeight={'bold'} marginLeft={3}>
          Octix
        </Text>
      </Flex>
    </>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={{ md: '4xl', sm: '6xl' }} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>© 2023 Octix . All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Products</ListHeader>
            <Link>Payments</Link>
            <Link>Checkout</Link>
            <Link>Billing</Link>
            <Link>Terminal</Link>
            <Link>And many more . . . </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Solution</ListHeader>
            <Link>Ecommerce</Link>
            <Link>Embedded Finance</Link>
            <Link>Marketplaces</Link>
            <Link>Saas</Link>
            <Link>And many more . . . </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('blue.400', 'blue.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'blue.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
