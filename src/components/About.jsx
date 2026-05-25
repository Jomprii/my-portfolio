import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    cat: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "PHP"],
  },
  { cat: "Frontend", items: ["React", "Next.js", "Vite", "Tailwindcss"] },
  { cat: "Backend", items: ["Node.js", "FastAPI", "MySQL"] },
  { cat: "Mobile", items: ["React Native", "Flutter", "Kotlin"] },
  {
    cat: "Tools",
    items: ["Git", "Docker", "Figma", "Canva", "Blender", "Adobe Photoshop"],
  },
];

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 24, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "8rem 2rem", maxWidth: "900px", margin: "0 auto" }}
    >
      <FadeIn>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "4rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--accent)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            01 /
          </span>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            About
          </h2>
          <div
            style={{ flex: 1, height: "1px", background: "var(--border)" }}
          />
        </div>
      </FadeIn>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem" }}
      >
        <div>
          <FadeIn delay={0.1}>
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.9,
                fontWeight: 300,
                marginBottom: "1.5rem",
              }}
            >
              I’m a full-stack developer focused on building modern web
              applications that are clean, responsive, and practical. I enjoy
              turning ideas into functional digital experiences. I’m
              continuously improving my skills by building real-world projects
              with React, next, Vue, Laravel, and FastAPI while exploring better
              ways to write scalable and maintainable code.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.9,
                fontWeight: 300,
              }}
            >
              When I'm not coding, I'm usually gaming, reading a book, or
              exploring new programming paradigms.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div
              style={{ marginTop: "2.5rem", display: "flex", gap: "1.5rem" }}
            >
              {[
                { label: "Years Exp.", val: "4+" },
                { label: "Projects", val: "20+" },
                { label: "Commits", val: "200+" },
              ].map(({ label, val }) => (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "1.6rem",
                      fontWeight: 300,
                      color: "var(--accent)",
                    }}
                  >
                    {val}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "var(--text-dim)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginTop: "0.2rem",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <div>
          {skills.map(({ cat, items }, i) => (
            <FadeIn key={cat} delay={0.1 + i * 0.08}>
              <div style={{ marginBottom: "1.8rem" }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-dim)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "0.6rem",
                  }}
                >
                  {cat}
                </div>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}
                >
                  {items.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.78rem",
                        color: "var(--text-muted)",
                        background: "var(--bg-3)",
                        border: "1px solid var(--border)",
                        padding: "0.25rem 0.65rem",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
