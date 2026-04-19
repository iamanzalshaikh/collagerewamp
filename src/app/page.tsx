import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Hero from "@/components/Hero";
import ExecutiveSnapshot from "@/components/ExecutiveSnapshot";
import About from "@/components/About";
import Placements from "@/components/Placements";
import WhyCimdr from "@/components/WhyCimdr";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import DignitaryQuote from "@/components/DignitaryQuote";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AnnouncementBar />
      <Hero />
      <ExecutiveSnapshot />
      <About />
      <Placements />
      <WhyCimdr />
      <Courses />
      <Testimonials />
      <Gallery />
      <DignitaryQuote />
      <Vision />
      <Footer />
    </main>
  );
}
