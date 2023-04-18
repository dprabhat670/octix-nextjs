'use client';
import {
  Box,
  Heading,
  Stack,
  Text,
  Container,
  SimpleGrid,
  Icon,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { FaFileInvoice, FaLink } from 'react-icons/fa';
import { MdPayments, MdPrivateConnectivity } from 'react-icons/md';
import { IoBagCheckOutline } from 'react-icons/io5';
import { ImSigma } from 'react-icons/im';
import { HiIdentification } from 'react-icons/hi';
import { SiMoneygram, SiContactlesspayment } from 'react-icons/si';
import { AiOutlineRadarChart } from 'react-icons/ai';
import { IconType } from 'react-icons';

const Products = () => {
  return (
    <Box py={0} px={0} minH={'100vh'}>
      <Stack spacing={4} width={'100%'} direction={'column'}>
        <Stack marginTop={8}>
          <GridListWithHeading />
        </Stack>
      </Stack>
    </Box>
  );
};
interface features {
  id: number;
  title?: string;
  children?: Array<features>;
  text?: string;
  Icon?: IconType;
}
const Features = ([] = [
  {
    id: 1,
    title: 'Payments',
    text: 'Accept payments and move money globally with Paybora’s powerful APIs and software solutions designed to help you capture more revenue.',
    Icon: MdPayments,

    color1: 'gray.100',
    color2: 'purple.300',
  },
  {
    id: 2,
    title: 'Checkout',
    text: 'Paybora Checkout is a prebuilt, hosted payment page optimized for conversion. Whether you offer one-time purchases or subscriptions, use Checkout to easily and securely accept payments online.',
    Icon: IoBagCheckOutline,
    color1: 'gray.100',
    color2: 'green.400',
  },
  {
    id: 3,
    title: 'Billing',
    text: 'Paybora Billing is the fastest way for your business to bill customers with subscriptions or invoices. Capture more revenue, support new products or business models, and accept recurring payments globally.',
    Icon: FaFileInvoice,
    color1: 'gray.100',
    color2: 'blue.400',
  },
  {
    id: 4,
    title: 'Financial Connections',
    text: 'Paybora Financial Connections lets your users securely share their financial data so you can streamline payments, reduce fraud, underwrite risk, build new products, and more. Integrate once to retrieve financial data and use it to move money or build financial products through Paybora’s interoperable APIs.',
    Icon: SiMoneygram,
    color1: 'white',
    color2: 'yellow.400',
  },
  {
    id: 5,
    title: 'Terminal',
    text: 'Paybora Terminal enables you to build your own in-person checkout to accept payments in the physical world. Built with platforms and modern retailers in mind, Terminal helps you unify your online and offline channels with flexible developer tools, pre-certified card readers, and cloud-based hardware management.',
    Icon: SiContactlesspayment,
    color1: 'white',
    color2: 'red.600',
  },
  {
    id: 7,
    title: 'Payment Links',
    text: 'Use Payment Links to sell online without a website. Create a full payment page in just a few clicks and share the link with your customers—no code required.',
    Icon: FaLink,
    color1: 'white',
    color2: 'cyan.400',
  },
  {
    id: 8,
    title: 'Radar',
    text: 'Radar detects and blocks fraud using machine learning that trains on data across millions of global companies.',
    Icon: AiOutlineRadarChart,
    color1: 'white',
    color2: 'red.500',
  },
  {
    id: 8,
    title: 'Identity',
    text: 'Paybora Identity lets you programmatically confirm the identity of global users so you can prevent attacks from fraudsters while minimizing friction for legitimate customers.',
    Icon: HiIdentification,
    color1: 'white',
    color2: 'orange.400',
  },
  {
    id: 9,
    title: 'Sigma',
    text: 'Paybora Sigma has helped accelerate our financial close process. Instead of manually combining multiple data sources each month, we’re now able to run a few simple queries in Sigma, enabling faster monthly reconciliation for credit card transactions.',
    Icon: ImSigma,
    color1: 'gray.100',
    color2: 'pink.400',
  },
  {
    id: 10,
    title: 'Connected',
    text: 'Paybora Financial Connections lets your users securely share their financial data so you can streamline payments, reduce fraud, underwrite risk, build new products, and more. Integrate once to retrieve financial data and use it to move money or build financial products through Paybora’s interoperable APIs.',
    Icon: MdPrivateConnectivity,
    color1: 'white',
    color2: 'green.700',
  },
]);

const GridListWithHeading = () => {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'} color={'#007DFC'}>
          Products : That helps your business and finance !{' '}
        </Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          We bring together everything that’s required to build websites and
          apps that accept payments and send payouts globally. Paybora’s
          products power payments for online and in-person retailers,
          subscriptions businesses, software platforms and marketplaces, and
          everything in between.
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={20}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={10}
          position={'relative'}
        >
          {Features.map((feature) => (
            <HStack
              key={feature.id}
              align={'top'}
              boxShadow={'md'}
              padding={2}
              paddingTop={4}
              borderRadius={13}
            >
              <Box color={'green.400'} px={2}>
                <Icon
                  width={7}
                  height={7}
                  as={feature.Icon}
                  color={feature.color1}
                  zIndex={-1}
                  position={'absolute'}
                />
                <Icon
                  as={feature.Icon}
                  color={feature.color2}
                  zIndex={1}
                  width={6}
                  height={6}
                />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600} color={'gray.700'}>
                  {feature.title}
                </Text>
                <Text color={'gray.600'}>
                  {feature.text.slice(0, 120)} . . . . .
                </Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Products;
