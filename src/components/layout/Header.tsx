import * as styles from './Header.module.css'

import React from 'react'
import { Link } from 'gatsby-link'

import { Logo } from 'src/components/Logo'

export const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} to="/">
        <Logo />
      </Link>

      <div className={styles.headerDetails}>
        <div>
          A Two-Day <em>Magic: The Gathering</em> Cube Event in Baltimore, MD
        </div>
        <p>May 2 - 3, 2026</p>
      </div>
    </div>
  )
}
