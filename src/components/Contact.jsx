import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaPhoneAlt,
  FaInstagram,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

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
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Jomprii" },
  {
    icon: FaFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/junefree.yamson.7",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/junefree-yamson-882568350/",
  },
  {
    icon: FaInstagram,
    label: "Email",
    href: "https://www.instagram.com/_jompri",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_2pm3vvn", "template_x0bsjsq", form.current, {
        publicKey: "bsNA2od9lYjXMZ9Hq",
      })
      .then((response) => {
        console.log("SUCCESS!", response);
        setSent(true);
      })
      .catch((error) => {
        console.error("FAILED...", error);
      });
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
                fontSize: "1.3rem",
                fontWeight: 300,
                lineHeight: 1.4,
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
              }}
            >
              Got a wild idea? let me help you build it.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p
              style={{
                display: "flex",
                color: "var(--text-muted)",
                fontWeight: 300,
                lineHeight: 1.8,
                marginBottom: "0.5rem",
                fontSize: "0.9rem",
                alignItems: "center",
                userSelect: "all",
              }}
            >
              <FaPhoneAlt size={15} style={{ marginRight: 10 }} /> +63 962 4224
              861
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jyamson30@gmail.com"
              target={"_blank"}
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <p
                style={{
                  display: "flex",
                  color: "var(--text-muted)",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  marginBottom: "2.5rem",
                  fontSize: "0.9rem",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                <SiGmail size={15.5} style={{ marginRight: 10 }} />
                Jyamson30@gmail.com
              </p>
            </a>
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
                  target={"_blank"}
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
              ref={form}
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <input
                required
                type="text"
                placeholder="Name"
                name="name"
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
                name="email"
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
                name="message"
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
