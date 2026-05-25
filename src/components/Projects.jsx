import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowUpRight, Code } from 'lucide-react'

const projects = [
  {
    num: '01',
    title: 'Nexus API Gateway',
    desc: 'High-performance API gateway with rate limiting, auth middleware, and real-time analytics. Handles 50k+ req/s with sub-5ms latency.',
    tags: ['Go', 'Redis', 'Docker', 'gRPC'],
    year: '2024',
    live: '#',
    repo: '#',
  },
  {
    num: '02',
    title: 'DataVault',
    desc: 'End-to-end encrypted file storage system. Zero-knowledge architecture means not even the server can read your files.',
    tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'WebCrypto'],
    year: '2024',
    live: '#',
    repo: '#',
  },
  {
    num: '03',
    title: 'Synthwave UI',
    desc: 'Open-source component library with 60+ accessible, composable React components. 1.2k GitHub stars.',
    tags: ['React', 'TypeScript', 'Storybook', 'Vitest'],
    year: '2023',
    live: '#',
    repo: '#',
  },
  {
    num: '04',
    title: 'Cortex',
    desc: 'Local-first note-taking app with AI-assisted linking and bi-directional graph visualization of your knowledge base.',
    tags: ['Rust', 'Tauri', 'React', 'SQLite'],
    year: '2023',
    live: '#',
    repo: '#',
  },
]

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ y: 24, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <FadeIn delay={index * 0.08}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          padding: '2rem',
          border: `1px solid ${hovered ? '#333' : 'var(--border)'}`,
          background: hovered ? 'var(--bg-2)' : 'transparent',
          transition: 'all 0.25s ease',
          cursor: 'default',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: hovered ? 'var(--accent)' : 'var(--text-dim)',
            transition: 'color 0.25s',
            letterSpacing: '0.08em',
          }}>
            {project.num}
          </span>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)' }}>{project.year}</span>
            <a href={project.repo} style={{ color: 'var(--text-dim)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}>
              <Code size={14} />
            </a>
            <a href={project.live} style={{ color: 'var(--text-dim)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <h3 style={{ fontSize: '1.15rem', fontWeight: 400, letterSpacing: '-0.01em', marginBottom: '0.75rem' }}>
          {project.title}
        </h3>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7, fontWeight: 300, marginBottom: '1.5rem' }}>
          {project.desc}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-dim)',
              letterSpacing: '0.04em',
            }}>
              #{tag}
            </span>
          ))}
        </div>

        {/* Accent line on hover */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '1px',
          width: hovered ? '100%' : '0%',
          background: 'var(--accent)',
          transition: 'width 0.35s ease',
        }} />
      </div>
    </FadeIn>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '8rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
      <FadeIn>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>02 /</span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 400, letterSpacing: '-0.02em' }}>Projects</h2>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>
      </FadeIn>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '1px', background: 'var(--border)' }}>
        {projects.map((p, i) => (
          <div key={p.num} style={{ background: 'var(--bg)' }}>
            <ProjectCard project={p} index={i} />
          </div>
        ))}
      </div>
    </section>
  )
}
