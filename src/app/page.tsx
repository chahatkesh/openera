"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// Dynamically import components that aren't needed for initial render
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Timeline = dynamic(() => import("@/components/Timeline"), { ssr: true });
const Prizes = dynamic(() => import("@/components/Prizes"), { ssr: true });
const Judges = dynamic(() => import("@/components/Judges"), { ssr: true });
const Sponsors = dynamic(() => import("@/components/Sponsors"), { ssr: true });
const ProblemStatements = dynamic(() => import("@/components/ProblemStatements"), { ssr: true });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });
const Organizers = dynamic(() => import("@/components/Organizers"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <ProblemStatements />
      <Timeline />
      <Prizes />
      <Judges />
      <Sponsors />
      <FAQ />
      <Organizers />
      <Footer />
    </div>
  );
}
