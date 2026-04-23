import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MdWork } from 'react-icons/md'
import { experience } from '../data/resume'
import SectionLabel from '../components/SectionLabel'
import styles from './Experience.module.css'

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

// Group consecutive entries by company, preserving order
const companies: { name: string; roles: typeof experience }[] = []
for (const job of experience) {
  const last = companies[companies.length - 1]
  if (last && last.name === job.company) {
    last.roles.push(job)
  } else {
    companies.push({ name: job.company, roles: [job] })
  }
}

// Build a flat role index for expanded state
let globalRoleIdx = 0
const roleIndices: number[][] = companies.map((c) =>
  c.roles.map(() => globalRoleIdx++)
)

export default function Experience() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set([0]))

  const toggle = (idx: number) =>
    setExpanded((prev) => {
      const next = new Set(prev)
      next.has(idx) ? next.delete(idx) : next.add(idx)
      return next
    })

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.inner}>
        <SectionLabel text="My Experience" size="md" />

        <div className={styles.timeline}>
          {companies.map((company, ci) => {
            const isCurrent = company.roles.some((r) =>
              r.period.includes('Present')
            )
            const initial = company.name.charAt(0).toUpperCase()

            return (
              <motion.div
                key={company.name}
                className={styles.companyBlock}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: ci * 0.1, ease: EASE }}
              >
                {/* ── Company header row ── */}
                <div className={styles.companyRow}>
                  <div className={styles.timelineCol}>
                    <div className={styles.companyBadge}>{initial}</div>
                    <div className={styles.line} />
                  </div>
                  <div className={styles.companyMeta}>
                    <span className={styles.companyName}>{company.name}</span>
                    {isCurrent && (
                      <span className={styles.currentBadge}>CURRENT</span>
                    )}
                  </div>
                </div>

                {/* ── Roles ── */}
                {company.roles.map((job, ri) => {
                  const idx = roleIndices[ci][ri]
                  const isOpen = expanded.has(idx)
                  const isLast = ri === company.roles.length - 1

                  return (
                    <div key={job.period} className={styles.roleBlock}>
                      <div className={styles.timelineCol}>
                        <div className={styles.roleIconCircle}>
                          <MdWork className={styles.roleIcon} />
                        </div>
                        {!isLast && <div className={styles.line} />}
                      </div>

                      <div className={styles.roleContent}>
                        <button
                          className={styles.roleHeader}
                          onClick={() => toggle(idx)}
                          aria-expanded={isOpen}
                        >
                          <div className={styles.roleLeft}>
                            <span
                              className={`${styles.roleName} ${job.period.includes('Present')
                                  ? styles.roleNameCurrent
                                  : ''
                                }`}
                            >
                              {job.role}
                            </span>
                            <span className={styles.roleMeta}>
                              Full-time · {job.period}
                            </span>
                          </div>
                          <span className={styles.toggleBtn}>
                            {isOpen ? '×' : '+'}
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              className={styles.roleDetails}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                              <ul className={styles.bullets}>
                                {job.bullets.map((b) => (
                                  <li key={b}>{b}</li>
                                ))}
                              </ul>
                              {job.tags.length > 0 && (
                                <div className={styles.tags}>
                                  {job.tags.map((t) => (
                                    <span key={t} className={styles.tag}>
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
