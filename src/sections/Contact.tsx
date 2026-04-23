import { motion } from 'framer-motion'
import { bio } from '../data/resume'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <motion.p
          className={styles.cta}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        >
          Looking for a frontend developer?
        </motion.p>

        <motion.a
          href={`mailto:${bio.email}`}
          className={styles.email}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        >
          {bio.email}
        </motion.a>
      </div>

      <footer className={styles.footer}>
        <span>Design &amp; built by {bio.name}</span>
        <a
          href={bio.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ghLink}
        >
          GitHub ↗
        </a>
      </footer>
    </section>
  )
}
