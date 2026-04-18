export default function Navbar() {
  return (
    <nav
      className="flex items-center justify-between p-4 md:p-7 md:text-2xl font-bold"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 56,
        backgroundColor: "white",
        zIndex: 1000,
      }}
    >
      <header className="leading-5">
        Pal <br /> Nesto
      </header>
      <header className="space-x-4">
        <a href="http://beglitched.club/" target="_blank" rel="noreferrer">
          Glitch by Palnesto
        </a>
        <a href="/portfolio">Our Works</a>
      </header>
    </nav>
  );
}
