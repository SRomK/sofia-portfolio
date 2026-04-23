import { motion } from 'framer-motion'
import { bio } from '../data/resume'
import styles from './Hero.module.css'

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE },
  }),
}

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <motion.h1
            className={styles.title}
            initial="hidden"
            animate="visible"
          >
            <motion.span custom={0} variants={fadeUp} className={styles.titleLine}>
              {bio.titleLine1}
            </motion.span>
            <motion.span custom={0.1} variants={fadeUp} className={styles.titleLine}>
              {bio.titleLine2}
            </motion.span>
          </motion.h1>

          <motion.p
            className={styles.summary}
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            {bio.summary}
          </motion.p>

          <motion.div
            custom={0.45}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <a href="#contact" className={styles.cta}>
              Hire me
            </a>
          </motion.div>
        </div>

        <motion.div
          className={styles.stats}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
        >
          {bio.stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className={styles.scrollHint}>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className={styles.chevron}
        >
          ↓
        </motion.div>
      </div>
    </section>
  )
}
