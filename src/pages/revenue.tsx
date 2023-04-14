import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
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
            Revenue and finance management, <br />
            <Text as={'span'} color={'blue.500'}>
              engineered for high-growth businesses
            </Text>
          </Heading>
          <Text color={'gray.800'} fontSize={'2xl'}>
            Paybora Revenue and finance management streamlines accrual
            accounting so you can close your books quickly and accurately.
            Automate and configure revenue reports to simplify compliance with
            IFRS 15 and ASC 606 revenue recognition standards.
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
        top={'0rem'}
      >
        <Text color={'blue.500'} fontSize={50}>
          Billing
        </Text>
        <Text fontSize={30} width={'60%'}>
          Paybora Billing is the fastest way for your business to bill customers
          with subscriptions or invoices. Capture more revenue, support new
          products or business models, and accept recurring payments globally.
        </Text>
        <Image
          alt="payments page"
          src={'/billing.webp'}
          width={400}
          height={400}
          className={styles.checkout}
        />
      </Flex>
      <Flex
        top={'-4rem'}
        direction={'column'}
        position={'relative'}
        marginBottom={'16rem'}
        marginX={'5rem'}
        padding={'2rem'}
      >
        <Text
          top={'-4rem'}
          color={'blue.500'}
          fontSize={50}
          paddingLeft={'10rem'}
          right={'-20rem'}
          float={'right'}
          position={'relative'}
        >
          Invoicing
        </Text>
        <Text
          top={'-4rem'}
          fontSize={30}
          width={'60%'}
          right={'-30rem'}
          position={'relative'}
          color={'white'}
        >
          Paybora Invoicing is a global invoicing software platform built to
          save you time and get you paid faster. Create an invoice and send it
          to your customers in minutes—no code required. Our advanced features
          and Invoicing API make it easy to automate accounts receivable,
          collect payments, and reconcile transactions.
        </Text>
        <Image
          alt="payments page"
          src={'/invoice.webp'}
          width={400}
          height={400}
          className={styles.payments}
        />
      </Flex>
      <Flex
        top={'-11rem'}
        direction={'column'}
        position={'relative'}
        marginBottom={'16rem'}
        marginX={'5rem'}
        padding={'2rem'}
      >
        <Text color={'blue.500'} fontSize={50}>
          Revenue reporting
        </Text>
        <Text fontSize={25} width={'60%'}>
          Paybora Revenue Recognition streamlines accrual accounting so you can
          close your books quickly and accurately. Automate and configure
          revenue reports to simplify compliance with IFRS 15 and ASC 606
          revenue recognition standards.
        </Text>
        <Image
          alt="payments page"
          src={'/revenue.webp'}
          width={400}
          height={400}
          className={styles.checkout}
        />
      </Flex>
      <div className={styles.background3}></div>
      {/* <Moreglobalpay /> */}
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
    <Box p={4} px={20} mx={10} position={'relative'}>
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
