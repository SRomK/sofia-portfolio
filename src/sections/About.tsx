import { motion } from 'framer-motion'
import { bio } from '../data/resume'
import { useState } from 'react'
import styles from './About.module.css'

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

export default function About() {
  const [photoVisible, setPhotoVisible] = useState(true)

  return (
    <section id="about" className={styles.about}>
      <motion.p
        className={styles.manifesto}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        Building scalable web applications with performance, accessibility, and
        clean architecture — and shipping production features that survive real scale.
      </motion.p>

      <div className={styles.inner}>
        <motion.div
          className={styles.left}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {photoVisible && (
            <div className={styles.photoWrap}>
              <img
                src="/sofia.jpg"
                alt="Sofia Romero Kamermann"
                className={styles.photo}
                onError={() => setPhotoVisible(false)}
              />
            </div>
          )}
          <span className={styles.thisIsMe}>This is me.</span>
          <h2 className={styles.name}>Hi, I'm Sofia.</h2>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
        >
          <p>
            I'm a frontend developer dedicated to turning ideas into precise, performant interfaces. I specialize in Vue.js and React, and I use AI tooling daily to accelerate delivery — without cutting corners on quality, architecture, or code review.
          </p>
          <p>
            With 4+ years in enterprise platforms and startup environments, I've learned to move fast without breaking things. My approach is to write code that the next developer — or future me — will be glad to inherit. {bio.openTo}.
          </p>

          <div className={styles.languages}>
            <span className={styles.langLabel}>LANGUAGES</span>
            <div className={styles.langList}>
              {bio.languages.map((lang) => (
                <span key={lang.name} className={styles.langItem}>
                  <span className={styles.langName}>{lang.name}</span>
                  <span className={styles.langLevel}>{lang.level}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
