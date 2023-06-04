import React from 'react'
import ReactPaginate from 'react-paginate'

import styles from './Pagination.module.scss'


const Pagination = ({onPageChange, currentPage}) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onPageChange(event.selected + 1)}
      pageRangeDisplayed={3}
      pageCount={3}
      currentPage={currentPage}
      forcePage = {currentPage - 1}
      previousLabel="<"
      renderOnZerocurrentPage={null}
    />
  );
}

export default Pagination