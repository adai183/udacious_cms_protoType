import React from 'react'
import styles from './index.module.scss'
import cssModules from 'react-css-modules'
import { Link } from 'react-router'
import LogoImage from './logo.png'

const Navigation = (props) => (
  <div className={styles.container}>
      <nav className={styles.navContainer}>
        <Link to='/'><img className={styles.logo} src={LogoImage} alt='logo'/></Link>
        <ul>
          <li><Link to='/' className={styles.link}>{'Home'}</Link></li>
          <li><Link to='/cms' className={styles.link}>{'New Article'}</Link></li>
        </ul>
      </nav>
    </div>
)

export default cssModules(Navigation, styles)
