import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer_space}>
      <div className={`${styles.footer_text} material-symbols-outlined`}>copyright</div>
      <div>CPK limited</div>
    </div>
  )
}

export default Footer