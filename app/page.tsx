import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between py-32 font-sans bg-zinc-50 sm:items-start">
      <Navbar />
      <Footer />
    </main>
  );
}
