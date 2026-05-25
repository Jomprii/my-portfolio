import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div style={{ borderTop: "1px solid var(--border)" }}>
          <About />
        </div>
        <div style={{ borderTop: "1px solid var(--border)" }}>
          <Projects />
        </div>
        <div style={{ borderTop: "1px solid var(--border)" }}>
          <Contact />
        </div>
      </main>
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "1.5rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--text-dim)",
          }}
        >
          © 2025 Junefree — Built with Vite + React
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--text-dim)",
          }}
        >
          Designed & Coded by hand
        </span>
      </footer>
    </>
  );
}
