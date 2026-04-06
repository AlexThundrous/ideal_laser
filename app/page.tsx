import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Categories from "@/components/categories";
import Featured from "@/components/featured";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <Hero />
      <Categories />
      <Featured />
      <CTA />
      <Footer />
    </main>
  );
}