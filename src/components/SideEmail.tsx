import { bio } from '../data/resume'
import styles from './SideEmail.module.css'

export default function SideEmail() {
  return (
    <a href={`mailto:${bio.email}`} className={styles.email}>
      {bio.email}
    </a>
  )
}
