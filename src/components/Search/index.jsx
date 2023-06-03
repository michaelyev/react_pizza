import React, { useContext, useRef } from 'react'


import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import styles from './Search.module.scss'
import { SearchContext } from '../../App';


const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext)
  const inputRef = useRef()

// search input optimized
const onClickClear = () => {
  setSearchValue('')
  // document.querySelector('input').focus()
  inputRef.current.focus()
}


  return (
    <div className={styles.root}>
      <input ref={inputRef} value={searchValue} onChange={(event) =>setSearchValue(event.target.value) } className={styles.input} placeholder="Pizza search..." />
      <SearchIcon className={styles.icon}  />
      {searchValue ? <CloseIcon onClick={onClickClear} className={styles.clearIcon}/> : '' }
      
    </div>
  );
}

export default Search