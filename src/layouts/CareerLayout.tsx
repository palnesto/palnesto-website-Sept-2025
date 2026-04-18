import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import wp from "../components/assets/whatsapp.png";

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-visible max-w-[1980px] flex flex-col bg-neutral-50 dark:bg-neutral-900">
      <Navbar />
      <main className="flex-1 pt-9">{children}</main>
      <Footer />
      <section className="fixed bottom-0 right-0 z-50 flex items-center justify-center w-28 h-28">
        <a href="https://wa.me/918886911466" target="_blank" rel="noreferrer">
          <img src={wp} alt="whatsapp" />
        </a>
      </section>
    </div>
  );
}
