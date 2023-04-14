import Image from 'next/image';
import { Box, Heading, Text, Stack, Container } from '@chakra-ui/react';
import styles from '@/styles/Home.module.css';
export default function SolutionCard() {
  interface carddata {
    id: number;
    title?: string;
    heading?: string;
    children?: Array<carddata>;
    text?: string;
    image?: any;
  }
  const data: carddata[] = [
    {
      id: 1,
      title: 'Ecommerce solution',
      heading: 'A complete payments platform for ecommerce',
      text: 'Paybora provides all the tools you need to accept payments online and in-person from customers around the world. Plus, our platform maximizes conversion and reduces fraud using machine learning.',
      image: '/ecommerce marketing.jpg',
    },
    {
      id: 2,
      title: 'SaaS platforms solution',
      heading: 'Unify payments, billing, and revenue management',
      text: 'Improve customer experience, grow recurring revenue, and reduce costs with a single unified platform for payments, subscriptions, invoicing, accounting, tax, and more. Companies work with us to move fast and scale globally.',
      image: '/SAAS-animated-video.jpg',
    },
    {
      id: 3,
      title: 'Marketplace solution',
      heading: 'The easiest way to build and scale a marketplace',
      text: 'Stripe brings together everything you need to onboard service providers, manage payments, send payouts, and more. Companies like DoorDash, Booking.com, and Instacart use Stripe’s suite of products to increase retention and scale their operations globally.',
      image: '/istockphoto-1217550624-612x612.jpg',
    },
    {
      id: 4,
      title: 'Embedded finance solution',
      heading: 'Launch financial services on your platforms',
      text: 'Enhance your platform by embedding financial services, including accounts, cards, and lending. Companies offer embedded financial services—tailored specifically to their core users—to attract more customers, add new lines of revenue, and improve their customer experience.',
      image: '/embedded-finance.jpg',
    },
  ];
  return (
    <>
      <Stack
        spacing={4}
        as={Container}
        maxW={'3xl'}
        textAlign={'center'}
        marginY={5}
      >
        <Heading fontSize={'3xl'} color={'#007DFC'}>
          Solutions : That solves problem of your business and finance !{' '}
        </Heading>
      </Stack>
      <div className={styles.cards}>
        {data.map((item) => {
          return (
            <>
              <Box
                key={item.id}
                maxW={'445px'}
                bg={'white'}
                boxShadow={'base'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}
                marginX={{ base: 0, md: 5 }}
              >
                {/* Image box */}
                <Box
                  h={'210px'}
                  bg={'gray.100'}
                  mt={-6}
                  mx={-6}
                  mb={6}
                  pos={'relative'}
                >
                  <Image alt="img" src={item.image} layout={'fill'} />
                </Box>
                <Stack>
                  <Text
                    color={'blue.500'}
                    textTransform={'uppercase'}
                    fontWeight={800}
                    fontSize={'sm'}
                    letterSpacing={1.1}
                  >
                    {item.title}
                  </Text>
                  <Heading
                    color={'gray.700'}
                    fontSize={'2xl'}
                    fontFamily={'body'}
                  >
                    {item.heading}
                  </Heading>
                  <Text color={'gray.500'}>{item.text}</Text>
                </Stack>
              </Box>
            </>
          );
        })}
      </div>
    </>
  );
}
