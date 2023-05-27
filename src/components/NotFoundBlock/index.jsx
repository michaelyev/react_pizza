import React from 'react'
import styles from './NotFoundBlock.module.scss'
const index = () => {
  return (
    <div>
        <h1 className={styles.root}>
            Nothing Found
        </h1>
        <p className={styles.description}>Unfortunally you've reached a wrong page</p>
    </div>
  )
}

export default index