import React, { useContext } from 'react'


import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import styles from './Search.module.scss'
import { SearchContext } from '../../App';

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext)

  return (
    <div className={styles.root}>
      <input value={searchValue} onChange={(event) =>setSearchValue(event.target.value) } className={styles.input} placeholder="Pizza search..." />
      <SearchIcon className={styles.icon}  />
      {searchValue ? <CloseIcon onClick={()=> setSearchValue('')} className={styles.clearIcon}/> : '' }
      
    </div>
  );
}

export default Search