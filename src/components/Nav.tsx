import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { bio } from '../data/resume'
import styles from './Nav.module.css'

const menuLinks = [
  { label: 'About', href: '#about', color: '#c084fc' },
  { label: 'Stack', href: '#stack', color: '#60a5fa' },
  { label: 'Experience', href: '#experience', color: '#34d399' },
  { label: 'Projects', href: '#projects', color: '#a78bfa' },
  { label: 'Contact', href: '#contact', color: '#f472b6' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.button
        className={styles.hamburger}
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        animate={{ opacity: open ? 0 : 1, pointerEvents: open ? 'none' : 'auto' }}
        transition={{ duration: 0.2 }}
      >
        <span className={styles.line} />
        <span className={styles.line} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              className={styles.panel}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <button
                className={styles.closeBtn}
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>

              <div className={styles.content}>
                <div className={styles.columns}>
                  <div className={styles.col}>
                    <span className={styles.colLabel}>SOCIAL</span>
                    <a
                      href={bio.github}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.socialLink}
                    >
                      Github
                    </a>
                    <a
                      href={bio.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.socialLink}
                    >
                      LinkedIn
                    </a>
                    <a
                      href={`mailto:${bio.email}`}
                      className={styles.socialLink}
                    >
                      Email
                    </a>
                  </div>

                  <div className={styles.col}>
                    <span className={styles.colLabel}>MENU</span>
                    {menuLinks.map((link, i) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        className={styles.menuLink}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.06 }}
                        onClick={() => setOpen(false)}
                      >
                        <span
                          className={styles.dot}
                          style={{ background: link.color }}
                        />
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className={styles.getInTouch}>
                  <span className={styles.colLabel}>GET IN TOUCH</span>
                  <a
                    href={`mailto:${bio.email}`}
                    className={styles.emailLink}
                  >
                    {bio.email}
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
