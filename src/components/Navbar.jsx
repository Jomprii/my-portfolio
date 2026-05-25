import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["about", "projects", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 2rem",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.85rem",
          color: "var(--accent)",
          textDecoration: "none",
          letterSpacing: "0.05em",
        }}
      >
        dev.portfolio
      </a>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--text-muted)")}
          >
            {link}
          </a>
        ))}
        <a
          href="/resume.pdf"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "#000",
            background: "var(--accent)",
            padding: "0.35rem 0.9rem",
            borderRadius: "2px",
            textDecoration: "none",
            letterSpacing: "0.06em",
            fontWeight: 500,
          }}
        >
          Resume ↗
        </a>
      </div>
    </motion.nav>
  );
}
