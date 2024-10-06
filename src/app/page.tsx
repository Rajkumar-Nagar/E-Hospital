'use client';

import Navbar from '../components/navbar';
import Hero from '../components/Hero';
import Doctors from '../components/Doctors';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Doctors />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}
