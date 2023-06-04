import React, { useCallback, useContext, useRef, useState } from "react";

import debounce from "lodash.debounce";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import styles from "./Search.module.scss";
import { SearchContext } from "../../App";

const Search = () => {
  const [value, setValue] = useState('')
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();

  // search input optimized
  const onClickClear = () => {
    setValue("");
    setSearchValue('')
    // document.querySelector('input').focus()
    inputRef.current.focus();
    console.log(searchValue)
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str)
    }, 500),
    []
  )

  const onChangeInput = (event) => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Pizza search..."
      />
      <SearchIcon className={styles.icon} />
      {value ? (
        <CloseIcon onClick={onClickClear} className={styles.clearIcon} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
