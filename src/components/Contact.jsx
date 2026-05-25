import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code, X, Globe, Mail } from "lucide-react";

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

const socials = [
  { icon: Code, label: "GitHub", href: "https://github.com" },
  { icon: X, label: "Twitter / X", href: "https://twitter.com" },
  { icon: Globe, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Mail, label: "Email", href: "mailto:alex@example.com" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e) {
    e.preventDefault();
    // Replace with real form logic (e.g. Formspree, EmailJS)
    setSent(true);
  }

  const inputStyle = {
    width: "100%",
    background: "var(--bg-2)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    padding: "0.85rem 1rem",
    fontFamily: "var(--font-sans)",
    fontSize: "0.9rem",
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "8rem 2rem 10rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
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
            03 /
          </span>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            Contact
          </h2>
          <div
            style={{ flex: 1, height: "1px", background: "var(--border)" }}
          />
        </div>
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "5rem",
        }}
      >
        <div>
          <FadeIn delay={0.1}>
            <p
              style={{
                fontSize: "1.2rem",
                fontWeight: 300,
                lineHeight: 1.4,
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
              }}
            >
              Got a crazy idea?, let's build it.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p
              style={{
                color: "var(--text-muted)",
                fontWeight: 300,
                lineHeight: 1.8,
                marginBottom: "2.5rem",
                fontSize: "0.9rem",
              }}
            >
              Open to full-time roles, freelance, <br /> open-source projects,
              and interesting conversations.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div style={{ display: "flex", gap: "1.2rem" }}>
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  title={label}
                  style={{
                    color: "var(--text-dim)",
                    transition: "color 0.2s",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-dim)")
                  }
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          {sent ? (
            <div
              style={{
                padding: "2rem",
                border: "1px solid var(--accent)",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "var(--accent)",
                }}
              >
                Message sent ✓
              </span>
              <span
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                  fontWeight: 300,
                }}
              >
                Thanks! I'll get back to you soon.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <input
                required
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
                onFocus={(e) =>
                  (e.target.style.borderColor = "var(--text-muted)")
                }
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
                onFocus={(e) =>
                  (e.target.style.borderColor = "var(--text-muted)")
                }
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
              <textarea
                required
                placeholder="Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) =>
                  (e.target.style.borderColor = "var(--text-muted)")
                }
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
              <button
                type="submit"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  letterSpacing: "0.06em",
                  color: "#000",
                  background: "var(--accent)",
                  border: "none",
                  padding: "0.85rem",
                  cursor: "pointer",
                  alignSelf: "flex-start",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                Send Message →
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
