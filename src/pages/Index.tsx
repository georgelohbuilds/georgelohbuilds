import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Journey } from "@/components/Journey";
import { FutureApps } from "@/components/FutureApps";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Mission />
      <Journey />
      <FutureApps />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
