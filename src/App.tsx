import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import TreatmentCategories from './components/TreatmentCategories';
import PopularPackages from './components/PopularPackages';
import ExperienceFlow from './components/ExperienceFlow';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import PromoBanner from './components/PromoBanner';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <TreatmentCategories />
      <PopularPackages />
      <ExperienceFlow />
      <Testimonials />
      <FAQ />
      <PromoBanner />
      <Location />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
