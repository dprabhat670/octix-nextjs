import '@/styles/globals.css';
import Navbar from './navbar';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Footer from './footer';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
