import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AILearningSection from "@/components/AILearningSection";
import AIPoweredSection from "@/components/AIPoweredSection";
import CertificationsSection from "@/components/CertificationsSection";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import CTAStrip from "@/components/CTAStrip";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import BackgroundGrid from "@/components/BackgroundGrid";
import SectionDivider from "@/components/SectionDivider";
import ThreeBackground from "@/components/ThreeBackground";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nitin Daswani",
    jobTitle: "Python & Django Developer",
    email: "nitindaswani771@gmail.com",
    url: "https://nitindaswani.dev",
    image: "https://nitindaswani.dev/og-image.jpg",
    sameAs: [
      "https://github.com/nitindaswani",
      "https://linkedin.com/in/nitindaswani",
      "https://www.instagram.com/nitiiinnnnn_",
      "https://linktr.ee/nitindaswani",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Lucky Institute of Professional Studies",
    },
    knowsAbout: [
      "Python",
      "Django",
      "REST APIs",
      "HTML5",
      "CSS3",
      "JavaScript",
      "SQL",
      "Git",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "AI Prompt Engineering Workshop",
        credentialCategory: "Certificate",
        recognizedBy: {
          "@type": "Organization",
          name: "SIN School of AI",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Ethical Hacking Workshop",
        credentialCategory: "Certificate",
        recognizedBy: {
          "@type": "Organization",
          name: "NullCyberX",
        },
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jodhpur",
      addressRegion: "Rajasthan",
      addressCountry: "India",
    },
  };

  return (
    <>
      <Helmet>
        <title>Nitin Daswani | Python & Django Developer</title>
        <meta
          name="description"
          content="Portfolio of Nitin Daswani - Python Developer specializing in Django, REST APIs, and modern web applications. Building scalable backend systems with clean architecture. Based in Jodhpur, Rajasthan."
        />
        <meta
          name="keywords"
          content="Nitin Daswani, Python Developer, Django Developer, Backend Developer, Web Developer, REST APIs, Full Stack Developer, Jodhpur, Rajasthan, India"
        />
        
        {/* Open Graph */}
        <meta property="og:title" content="Nitin Daswani | Python & Django Developer" />
        <meta
          property="og:description"
          content="Building modern web applications with Python & Django. Clean backend architecture, REST APIs, and smooth responsive experiences."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nitindaswani.dev" />
        <meta property="og:image" content="https://nitindaswani.dev/og-image.jpg" />
        <meta property="og:site_name" content="Nitin Daswani Portfolio" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nitin Daswani | Python & Django Developer" />
        <meta
          name="twitter:description"
          content="Building modern web applications with Python & Django. Clean backend architecture, REST APIs, and smooth responsive experiences."
        />
        <meta name="twitter:image" content="https://nitindaswani.dev/og-image.jpg" />
        
        <link rel="canonical" href="https://nitindaswani.dev" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <LoadingScreen />
      <CustomCursor />
      <ScrollProgressIndicator />
      <BackgroundGrid />
      <ThreeBackground />
      <Navbar />

      <main>
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider flip />
        <SkillsSection />
        <StatsSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider flip />
        <ExperienceSection />
        <SectionDivider />
        <AILearningSection />
        <SectionDivider flip />
        <AIPoweredSection />
        <SectionDivider />
        <CertificationsSection />
        <SectionDivider flip />
        <ContactSection />
        <CTAStrip />
      </main>

      <Footer />
    </>
  );
};

export default Index;
