import React from "react";

import "./Pagination.scss";

export default function Pagination({
  currentPage,
  totalPages,
  handlePreviousPage,
  handleNextPage,
}) {
  const visiblePages = 2; // number of pages to show on each side of the current page
  const startPage = Math.max(currentPage - visiblePages, 1);
  const endPage = Math.min(currentPage + visiblePages, totalPages);

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button onClick={handlePreviousPage}>Previous</button>
      )}
      {startPage > 1 && <span>...</span>}
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      ).map((page) => (
        <div
          key={page}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </div>
      ))}
      {endPage < totalPages && <span>...</span>}
      {currentPage < totalPages && (
        <button onClick={handleNextPage}>Next</button>
      )}
    </div>
  );
}
