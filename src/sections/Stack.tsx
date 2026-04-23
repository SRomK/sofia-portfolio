import { motion } from 'framer-motion'
import {
  SiVuedotjs, SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss, SiSass, SiMui,
  SiChartdotjs, SiJest, SiSonar, SiGooglecloud, SiJenkins,
  SiPython, SiDjango, SiMysql, SiPostgresql, SiGit, SiBitbucket, SiJira, SiPostman,
  SiGithubcopilot, SiPinia, SiAnthropic, SiOpenai, SiGooglegemini,
} from 'react-icons/si'
import type { IconType } from 'react-icons'
import { stack } from '../data/resume'
import SectionLabel from '../components/SectionLabel'
import styles from './Stack.module.css'

const iconConfig: Partial<Record<string, { icon: IconType; color: string }>> = {
  'Vue.js': { icon: SiVuedotjs, color: '#42b883' },
  'React': { icon: SiReact, color: '#61DAFB' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
  'HTML5': { icon: SiHtml5, color: '#E34F26' },
  'CSS3': { icon: SiCss, color: '#1572B6' },
  'Sass': { icon: SiSass, color: '#CC6699' },
  'MUI': { icon: SiMui, color: '#007FFF' },
  'Chart.js': { icon: SiChartdotjs, color: '#FF6384' },
  'Jest': { icon: SiJest, color: '#C21325' },
  'SonarQube': { icon: SiSonar, color: '#4E9BCD' },
  'GCP': { icon: SiGooglecloud, color: '#4285F4' },
  'Jenkins': { icon: SiJenkins, color: '#D24939' },
  'Python': { icon: SiPython, color: '#3776AB' },
  'Django': { icon: SiDjango, color: '#44B78B' },
  'MySQL': { icon: SiMysql, color: '#4479A1' },
  'PostgreSQL': { icon: SiPostgresql, color: '#336791' },
  'Git': { icon: SiGit, color: '#F05032' },
  'Bitbucket': { icon: SiBitbucket, color: '#0052CC' },
  'Jira': { icon: SiJira, color: '#0052CC' },
  'Postman': { icon: SiPostman, color: '#FF6C37' },
  'GitHub Copilot': { icon: SiGithubcopilot, color: '#6e5494' },
  'Pinia': { icon: SiPinia, color: '#FFD859' },
  'Claude': { icon: SiAnthropic, color: '#d97706' },
  'ChatGPT': { icon: SiOpenai, color: '#10a37f' },
  'Gemini': { icon: SiGooglegemini, color: '#4285F4' },
}

export default function Stack() {
  return (
    <section id="stack" className={styles.stack}>
      <div className={styles.inner}>
        <SectionLabel text="My Stack" size="md" />

        <div className={styles.categories}>
          {stack.map((category, i) => (
            <motion.div
              key={category.label}
              className={styles.row}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <h3 className={styles.categoryLabel}>{category.label}</h3>

              <div className={styles.techGrid}>
                {category.items.map((name) => {
                  const conf = iconConfig[name]
                  const Icon = conf?.icon
                  return (
                    <div key={name} className={styles.techItem}>
                      {Icon && (
                        <Icon
                          className={styles.techIcon}
                          style={{ color: conf?.color }}
                        />
                      )}
                      <span className={styles.techName}>{name}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
