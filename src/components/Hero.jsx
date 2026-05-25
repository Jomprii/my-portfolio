import { motion } from "framer-motion";

const stagger = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};
const item = {
  initial: { y: 30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 2rem",
        maxWidth: "900px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Grid decoration */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.3,
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      <motion.div variants={stagger} initial="initial" animate="animate">
        <motion.p
          variants={item}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            color: "var(--accent)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
          }}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          variants={item}
          style={{
            fontSize: "clamp(3rem, 9vw, 6rem)",
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: "0.2rem",
          }}
        >
          Junefree
        </motion.h1>
        <motion.h1
          variants={item}
          style={{
            fontSize: "clamp(3rem, 9vw, 5rem)",
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: "2rem",
            color: "var(--text-muted)",
          }}
        >
          Full-Stack Web Developer.
        </motion.h1>

        <motion.p
          variants={item}
          style={{
            fontSize: "1.1rem",
            color: "var(--text-muted)",
            maxWidth: "480px",
            lineHeight: 1.7,
            fontWeight: 300,
            marginBottom: "3rem",
          }}
        >
          I build responsive and scalable web applications with modern
          technologies, focused on creating clean user experiences and reliable
          backend systems.
        </motion.p>

        <motion.div
          variants={item}
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <a
            href="#projects"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.82rem",
              color: "#000",
              background: "var(--accent)",
              padding: "0.75rem 1.75rem",
              textDecoration: "none",
              letterSpacing: "0.05em",
              display: "inline-block",
            }}
          >
            View Work →
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.82rem",
              color: "var(--text-muted)",
              border: "1px solid var(--border)",
              padding: "0.75rem 1.75rem",
              textDecoration: "none",
              letterSpacing: "0.05em",
              display: "inline-block",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "var(--text-muted)";
              e.target.style.color = "var(--text)";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "var(--border)";
              e.target.style.color = "var(--text-muted)";
            }}
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "48px",
            background:
              "linear-gradient(to bottom, transparent, var(--text-dim))",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: "var(--text-dim)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
          }}
        >
          scroll
        </span>
      </motion.div>
    </section>
  );
}
