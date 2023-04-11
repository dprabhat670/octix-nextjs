import Head from 'next/head';
import Cta from './cta';
import Features from './features';
import Gridfeatures from './gridfeatures';
// import BackgroundContext from '@/context/BackgroundContext';
import Testimonials from './testimonial';
import Ready from './ready';
export default function Home() {
  return (
    <>
      {/* <BackgroundContext.Provider> */}
      <Cta />
      <Features />
      <br />
      <br />
      <Gridfeatures />
      <Testimonials />
      <Ready />
      {/* </BackgroundContext.Provider> */}
    </>
  );
}
