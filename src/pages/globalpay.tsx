'use client';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  HStack,
  Flex,
  VStack,
  SimpleGrid,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { IconType } from 'react-icons';
import { AiOutlineRadarChart } from 'react-icons/ai';
import { ImSigma } from 'react-icons/im';
import { SiContactlesspayment } from 'react-icons/si';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
export default function CallToActionWithAnnotation() {
  return (
    <div>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 24 }}
        >
          <Heading
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            as={'span'}
            position={'relative'}
            bgGradient="linear-gradient(to-r, #007eff 17.91%, #00b3ff 76.64%)"
            bgClip="text"
            fontWeight={'700'}
            fontFamily={
              ' ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
            }
          >
            A complete global payments platform, <br />
            <Text as={'span'} color={'blue.500'}>
              engineered for growth
            </Text>
          </Heading>
          <Text color={'gray.800'} fontSize={'2xl'}>
            Accept payments and move money globally with Paybora’s powerful APIs
            and software solutions designed to help you capture more revenue.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Button
              colorScheme={'blue'}
              bg={'blue.600'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'blue.500',
              }}
            >
              Get Started
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>

      <Flex
        direction={'column'}
        position={'relative'}
        marginBottom={'16rem'}
        marginX={'5rem'}
        padding={'2rem'}
      >
        <Text color={'blue.500'} fontSize={50}>
          Checkout
        </Text>
        <Text fontSize={30} width={'60%'}>
          Paybora Checkout is a prebuilt, hosted payment page optimized for
          conversion. Whether you offer one-time purchases or subscriptions, use
          Checkout to easily and securely accept payments online.
        </Text>
        <Image
          alt="payments page"
          src={'/paymentspage.webp'}
          width={400}
          height={400}
          className={styles.checkout}
        />
      </Flex>
      <Flex
        direction={'column'}
        position={'relative'}
        marginBottom={'16rem'}
        marginX={'5rem'}
        padding={'2rem'}
      >
        <Text
          color={'blue.500'}
          fontSize={50}
          paddingLeft={'10rem'}
          right={'-20rem'}
          float={'right'}
          position={'relative'}
        >
          Payments
        </Text>
        <Text
          fontSize={30}
          width={'60%'}
          right={'-30rem'}
          top={0}
          position={'relative'}
          color={'white'}
        >
          Accept payments and move money globally with Paybora’s powerful APIs
          and software solutions designed to help you capture more revenue.
        </Text>
        <Image
          alt="payments page"
          src={'/pay.webp'}
          width={400}
          height={400}
          className={styles.payments}
        />
      </Flex>
      <Flex
        direction={'column'}
        position={'relative'}
        marginBottom={'16rem'}
        marginX={'5rem'}
        padding={'2rem'}
      >
        <Text color={'blue.500'} fontSize={50}>
          Financial Connections
        </Text>
        <Text fontSize={25} width={'60%'}>
          Paybora Financial Connections lets your users securely share their
          financial data so you can streamline payments, reduce fraud,
          underwrite risk, build new products, and more. Integrate once to
          retrieve financial data and use it to move money or build financial
          products through Paybora’s interoperable APIs.
        </Text>
        <Image
          alt="payments page"
          src={'/financeconnect.webp'}
          width={400}
          height={400}
          className={styles.checkout}
        />
      </Flex>
      <div className={styles.background3}></div>
      <Extras />
    </div>
  );
}
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
    title: 'Radar',
    text: 'Radar detects and blocks fraud using machine learning that trains on data across millions of global companies.',
    Icon: AiOutlineRadarChart,
    color1: 'white',
    color2: 'red.500',
  },
  {
    id: 2,
    title: 'Sigma',
    text: 'Paybora Sigma has helped accelerate our financial close process. Instead of manually combining multiple data sources each month, we’re now able to run a few simple queries in Sigma, enabling faster monthly reconciliation for credit card transactions.',
    Icon: ImSigma,
    color1: 'gray.100',
    color2: 'pink.400',
  },
  {
    id: 3,
    title: 'Terminal',
    text: 'Paybora Terminal enables you to build your own in-person checkout to accept payments in the physical world. Built with platforms and modern retailers in mind, Terminal helps you unify your online and offline channels with flexible developer tools, pre-certified card readers, and cloud-based hardware management.',
    Icon: SiContactlesspayment,
    color1: 'white',
    color2: 'red.600',
  },
]);
const Extras = () => {
  return (
    <>
      <Container maxW={'6xl'} paddingBottom={10}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          position={'relative'}
        >
          {Features.map((feature) => {
            return (
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
            );
          })}
        </SimpleGrid>
      </Container>
    </>
  );
};
