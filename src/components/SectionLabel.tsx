import styles from './SectionLabel.module.css'

type Props = {
  text: string
  size?: 'sm' | 'md' | 'lg'
}

export default function SectionLabel({ text, size = 'sm' }: Props) {
  return (
    <div className={`${styles.label} ${styles[size]}`}>
      <span className={styles.star}>✦</span>
      <span>{text}</span>
    </div>
  )
}
