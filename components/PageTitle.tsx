import * as React from 'react'

import styles from './PageTitle.module.css'

const PageTitle: React.FC = ({ children }) => {
  return <h1 className={styles.root}>{children}</h1>
}

export default PageTitle
