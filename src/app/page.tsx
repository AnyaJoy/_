"use client"
import "../styles/globals.scss";
import dynamic from 'next/dynamic';
import Header from "@/components/sections/header";
import HomeScreen from "@/components/sections/home";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Footer from "@/components/sections/footer";
import About from "@/components/sections/about";
import ScrollToTop from "@/components/scrollToTop";
import Toaster from "@/components/toaster";


const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Home() {

  return (
    <>
      <Header />
      <HomeScreen />
      <Projects />
      <Skills />
      <About /> 
      <Footer />
      <ScrollToTop />
      <Toaster />
      <AnimatedCursor
        innerSize={13}
        outerSize={20}
        color="225, 225, 225"
        outerAlpha={0.2}
        innerScale={0.000001}
        outerScale={4}
        showSystemCursor={true}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          "img",
          ".highlight"
        ]}
      />
    </>
  );
}
