import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogSection from "./Blogsection/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      
      <BlogSection />
      <Footer />
    </div>
  );
}