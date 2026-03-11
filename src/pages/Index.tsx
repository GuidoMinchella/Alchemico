import HeroSection from '@/components/HeroSection';
import BrandStory from '@/components/BrandStory';
import SignaturePinsa from '@/components/SignaturePinsa';
import MenuPreview from '@/components/MenuPreview';
import Atmosphere from '@/components/Atmosphere';
import Testimonials from '@/components/Testimonials';
import LocationContact from '@/components/LocationContact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <BrandStory />
      <SignaturePinsa />
      <MenuPreview />
      <Atmosphere />
      <Testimonials />
      <LocationContact />
      <Footer />
    </div>
  );
};

export default Index;
