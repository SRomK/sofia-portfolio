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

        <motion.div
          className={styles.channels}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        >
          <div className={styles.channel}>
            <span className={styles.channelLabel}>EMAIL</span>
            <a href={`mailto:${bio.email}`} className={styles.channelLink}>
              {bio.email} ↗
            </a>
          </div>

          <div className={styles.divider} />

          <div className={styles.channel}>
            <span className={styles.channelLabel}>LINKEDIN</span>
            <a
              href={bio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.channelLink}
            >
              Sofia Romero Kamermann ↗
            </a>
          </div>
        </motion.div>
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
