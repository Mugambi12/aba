import React from "react";
import "./Pagination.css";

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
  onNextPage,
  onPrevPage,
  onFirstPage,
  onLastPage,
}) => {
  const renderPaginationButtons = () => {
    const buttons = [];
    const maxButtonsToShow = 5;

    const startPage =
      currentPage <= Math.floor(maxButtonsToShow / 2)
        ? 1
        : Math.min(
            currentPage - Math.floor(maxButtonsToShow / 2),
            totalPages - maxButtonsToShow + 1
          );
    const endPage =
      startPage + maxButtonsToShow - 1 <= totalPages
        ? startPage + maxButtonsToShow - 1
        : totalPages;

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`pagination-btn ${currentPage === i ? "active" : ""}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        onClick={onFirstPage}
        disabled={currentPage === 1}
      >
        <i className="fas fa-angle-double-left"></i>
      </button>
      <button
        className="pagination-btn"
        onClick={onPrevPage}
        disabled={currentPage === 1}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      {renderPaginationButtons()}
      <button
        className="pagination-btn"
        onClick={onNextPage}
        disabled={currentPage === totalPages}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
      <button
        className="pagination-btn"
        onClick={onLastPage}
        disabled={currentPage === totalPages}
      >
        <i className="fas fa-angle-double-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
