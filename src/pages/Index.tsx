import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import StatsBar from "@/components/StatsBar";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const Index = () => (
  <>
    <Helmet>
      <title>The Design Den | Premium Interior Design Studio in Nashik</title>
      <meta
        name="description"
        content="The Design Den is Nashik's premier interior design studio specializing in residential and commercial interiors. 200+ projects, 10+ years experience. Transform your space today."
      />
      <meta name="keywords" content="interior design nashik, home interior, commercial interior, modular kitchen, The Design Den" />
      <link rel="canonical" href="https://thedesignden.in" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "The Design Den",
        "description": "Premium interior design studio in Nashik",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Near Samrat Sweets, Rajiv Nagar",
          "addressLocality": "Nashik",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "telephone": "+919876543210",
        "email": "hello@thedesignden.in",
        "openingHours": "Mo-Sa 10:00-19:00",
        "url": "https://thedesignden.in"
      })}</script>
    </Helmet>
    <Navbar />
    <Hero />
    <About />
    <WhyChooseUs />
    <Services />
    <StatsBar />
    <Projects />
    <Testimonials />
    <Contact />
    <Footer />
    <WhatsAppCTA />
  </>
);

export default Index;
