import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.css';

const paginate = (props) => {
  return (
    <nav>
      <ReactPaginate
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        pageClassName={styles.Pagination__page}
        previousClassName={styles.Pagination__prev}
        nextClassName={styles.Pagination__next}
        pageLinkClassName={styles.Pagination__link}
        previousLinkClassName={styles.Pagination__prevLink}
        nextLinkClassName={styles.Pagination__nextLink}
        activeLinkClassName={styles.Pagination__active}
        pageCount={props.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={props.handlePageClick}
        containerClassName={styles.Pagination}
        disabledClassName={styles.Pagination__disable}
      />
    </nav>
  );
};

export default paginate;
