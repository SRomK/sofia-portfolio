import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/resume'
import SectionLabel from '../components/SectionLabel'
import styles from './Projects.module.css'

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.inner}>
        <SectionLabel text="Selected Work" size='md' />

        <ul className={styles.list}>
          {projects.map((p, i) => (
            <motion.li
              key={p.number}
              className={`${styles.item} ${hovered === i ? styles.active : ''} ${hovered !== null && hovered !== i ? styles.dimmed : ''
                }`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <a
                href={p.url ?? undefined}
                target={p.url ? '_blank' : undefined}
                rel={p.url ? 'noopener noreferrer' : undefined}
                className={styles.link}
              >
                <span className={styles.number}>_{p.number}.</span>

                <div className={styles.body}>
                  <div className={styles.titleRow}>
                    <span className={styles.name}>{p.name}</span>
                    {p.url && <span className={styles.arrow}>↗</span>}
                  </div>
                  <span className={styles.company}>{p.company}</span>
                  <p className={styles.description}>{p.description}</p>
                  <div className={styles.tags}>
                    {p.tags.map((t, ti) => (
                      <span key={t} className={styles.tagWrapper}>
                        {ti > 0 && <span className={styles.sep}>·</span>}
                        <span className={styles.tag}>{t}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <span className={styles.bgNumber} aria-hidden>
                  {p.number}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
