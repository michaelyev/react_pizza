import React from 'react'

import styles from './Search.module.scss'

const Search = () => {
  return (
    <input className={styles.root} placeholder='Pizza search...' />
  )
}

export default Search