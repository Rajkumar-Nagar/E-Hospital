
import Doctors from '@/components/Doctors';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonials';

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
