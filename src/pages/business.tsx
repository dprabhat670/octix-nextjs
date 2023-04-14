import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  GridItem,
  chakra,
  Grid,
  VStack,
  Divider,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
export default function CallToActionWithAnnotation() {
  // creating a edit styles of .background div

  // function backstyle() {
  //       const bg1 = document.getElementById('bg1');
  //       const bg2 = document.getElementById('bg2');
  //       bg1.style.width = '50px'
  // }
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
            Payments for platforms and marketplaces, <br />
            <Text as={'span'} color={'blue.500'}>
              engineered for growth
            </Text>
          </Heading>
          <Text color={'gray.800'} fontSize={'2xl'}>
            Stripe Connect is the fastest and easiest way to integrate payments
            into your platform or marketplace. Our APIs enable you to build and
            scale end-to-end payments experiences, from instant onboarding to
            global payouts, and create new revenue streams—all while having
            Stripe handle payments KYC.
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
          color={'gray.800'}
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

      <div className={styles.background3}></div>
      <Moreglobalpay />
    </div>
  );
}
interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};
function Moreglobalpay() {
  return (
    <Box p={4} px={20} ml={10} position={'relative'}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Lifetime Support'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Unlimited Donations'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Instant Delivery'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
    </Box>
  );
}
