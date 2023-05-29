import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import styles from './Search.module.scss'

const Search = ({searchValue, setSearchValue}) => {


  return (
    <div className={styles.root}>
      <input value={searchValue} onChange={(event) =>setSearchValue(event.target.value) } className={styles.input} placeholder="Pizza search..." />
      <SearchIcon className={styles.icon}  />
      {searchValue ? <CloseIcon onClick={()=> setSearchValue('')} className={styles.clearIcon}/> : '' }
      
    </div>
  );
}

export default Search