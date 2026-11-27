import { useState, useEffect } from "react";
import classNames from "classnames";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import styles from "./Pagination.module.sass";

const INIT_VALS = {
  currentPage: 1,
  resultsPerPage: 5,
  isLastPage: false,
};

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(INIT_VALS.currentPage);
  const [isLastPage, setIsLastPage] = useState(INIT_VALS.isLastPage);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (isLastPage) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };

  const getPages = () => {
    const visiblePages = 7;
    let start = Math.max(1, currentPage - 3);
    let end = start + visiblePages - 1;
    start = Math.max(1, end - visiblePages + 1);
    let pages = []
    let i = start
    while (i <= end){
        pages.push(i)
        i++;
    }
    return pages;
  };

  const pageLeftClasses = classNames(styles.pageBtn, {
    [styles.active]: currentPage >= 2,
    [styles.inactive]: currentPage < 2,
  });
  const pageRightClasses = classNames(styles.pageBtn, {
    [styles.active]: !isLastPage,
    [styles.inactive]: isLastPage,
  });

  return (
    <>
      <div className={styles.controlGroup}>
        <button onClick={prevPage} className={pageLeftClasses}>
          <SlArrowLeft />
        </button>
        {getPages().map((page) => (
          <button
            key={page}
            className={currentPage === page ? styles.current : styles.pageCircle}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        <button onClick={nextPage} className={pageRightClasses}>
          <SlArrowRight />
        </button>
      </div>
    </>
  );
}
