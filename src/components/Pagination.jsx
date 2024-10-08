import React from 'react';

const Pagination = ({ currentPage, setCurrentPage, totalItems, itemsPerPage, setItemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>

      <span>Page {currentPage} of {totalPages}</span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>

      <input
        type="number"
        min="1"
        max="10"
        value={itemsPerPage}
        onChange={(e) => setItemsPerPage(Math.min(10, Math.max(1, Number(e.target.value))))}
      />
    </div>
  );
};

export default Pagination;
