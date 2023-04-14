import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoBusiness, IoLogoBitcoin } from 'react-icons/io5';
import { AiTwotoneBank } from 'react-icons/ai';
import { ReactElement } from 'react';
import styles from '@/styles/Home.module.css';
interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Container maxW={'5xl'} py={12} my={20} position={'relative'}>
      {/* <div className={styles.background2}></div> */}
      <div className={styles.background}></div>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            Why Paybora ?
          </Text>
          <Text fontSize={'2rem'} color={'blue.400'}>
            Embrace nimble methodologies to streamline your enterprise
          </Text>
          <Text color={'white'} fontSize={'md'}>
            You can use Paybora not only to accept payments but also to quickly
            support new markets, upgrade existing systems and tools, go
            direct-to-consumer, and engage customers with subscriptions and
            marketplaces. Get expert integration guidance from our professional
            services team and certified partners so you can see value with
            Paybora faster.
          </Text>
          <Stack
            spacing={4}
            color={'white'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }
          >
            <Feature
              icon={<Icon as={IoBusiness} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Business helping tools'}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Revenue and finance management'}
            />
            <Feature
              icon={
                <Icon as={AiTwotoneBank} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Banking as a service'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
            className={styles.homeimg}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
