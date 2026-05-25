import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Code } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Tribu Pakaras",
    desc: "Tribu Pakaras is an ecommerce outdoor apparel shop and its more than a brand—it’s a community built for those who move with purpose, passion, and courage.",
    tags: ["Laravel", "Vue", "Inertia"],
    year: "2026",
  },
  {
    num: "02",
    title: "MCenter",
    desc: "A Hospital System for a big hospital in dumaguete. Designed with purpose and ease of usability in mind.",
    tags: ["Next.js", "Laravel", "MySQL"],
    year: "2026",
  },
  {
    num: "03",
    title: "Gamersvue",
    desc: "A platform where gamers can shop, share, trade and comment on a game that they love.",
    tags: ["React Native", "FastAPI"],
    year: "2025",
  },
  {
    num: "04",
    title: "Sweep",
    desc: "Delete cluttered gallery pictured with ease, just sweep left to save or right to delete.",
    tags: ["Flutter"],
    year: "2024",
  },
];

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
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

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={index * 0.08}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          padding: "2rem",
          border: `1px solid ${hovered ? "#333" : "var(--border)"}`,
          background: hovered ? "var(--bg-2)" : "transparent",
          transition: "all 0.25s ease",
          cursor: "default",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "1.2rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              color: hovered ? "var(--accent)" : "var(--text-dim)",
              transition: "color 0.25s",
              letterSpacing: "0.08em",
            }}
          >
            {project.num}
          </span>
          <div
            style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--text-dim)",
              }}
            >
              {project.year}
            </span>
            <a
              href={project.repo}
              style={{ color: "var(--text-dim)", transition: "color 0.2s" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-dim)")
              }
            >
              <Code size={14} />
            </a>
            <a
              href={project.live}
              style={{ color: "var(--text-dim)", transition: "color 0.2s" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-dim)")
              }
            >
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            marginBottom: "0.75rem",
          }}
        >
          {project.title}
        </h3>

        <p
          style={{
            fontSize: "0.9rem",
            color: "var(--text-muted)",
            lineHeight: 1.7,
            fontWeight: 300,
            marginBottom: "1.5rem",
          }}
        >
          {project.desc}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--text-dim)",
                letterSpacing: "0.04em",
              }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Accent line on hover */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "1px",
            width: hovered ? "100%" : "0%",
            background: "var(--accent)",
            transition: "width 0.35s ease",
          }}
        />
      </div>
    </FadeIn>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
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
            02 /
          </span>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            Projects
          </h2>
          <div
            style={{ flex: 1, height: "1px", background: "var(--border)" }}
          />
        </div>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
          gap: "1px",
          background: "var(--border)",
        }}
      >
        {projects.map((p, i) => (
          <div key={p.num} style={{ background: "var(--bg)" }}>
            <ProjectCard project={p} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
