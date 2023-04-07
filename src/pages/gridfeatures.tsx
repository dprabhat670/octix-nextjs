import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
  FcAbout,
  FcAssistant,
  FcDataProtection,
  FcMoneyTransfer,
  FcManager,
} from 'react-icons/fc';
import { HiLightBulb } from 'react-icons/hi';
import { BsFillCreditCard2FrontFill } from 'react-icons/bs';

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function Gridfeatures() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          Revolutionizing finance with a technology-driven approach
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          We bring together everything that’s required to build websites and
          apps that accept payments and send payouts globally. Stripe’s products
          power payments for online and in-person retailers, subscriptions
          businesses, software platforms and marketplaces, and everything in
          between.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Close to the metal'}
            icon={
              <Icon
                as={BsFillCreditCard2FrontFill}
                w={10}
                h={10}
                color={'orangered'}
              />
            }
            description={
              'From direct integration with card networks and banks to checkout flows in the browser, we operate on and optimise at every level of the financial stack.'
            }
            href={'#'}
          />
          <Card
            heading={'Battle-tested reliability'}
            icon={<Icon as={FcDataProtection} w={10} h={10} />}
            description={
              'Our systems operate with 99.99%+ uptime and are highly scalable and redundant. Swipo is certified to the highest compliance standards.'
            }
            href={'#'}
          />
          <Card
            heading={'Intelligent optimisations'}
            icon={<Icon as={HiLightBulb} w={10} h={10} color={'yellow.400'} />}
            description={
              'Our machine learning models train on billions of data points and help increase revenue across conversion, fraud, revenue recovery, and more.'
            }
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  );
}
