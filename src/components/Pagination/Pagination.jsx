import React from 'react';
import PropTypes from 'prop-types';
import { PaginationWrap, SelectPerPage } from './styles';

function Pagination({
  page,
  total,
  perPage,
  totalPages,
  changePerPage,
  setPrevPage,
  setNextPage,
}) {
  return (
    <PaginationWrap>
      <button onClick={setPrevPage}>Prev</button>
      <div>Page: {page}/{totalPages}</div>
      <SelectPerPage value={perPage} onChange={changePerPage}>
        <option value={10}>10 rows</option>
        <option value={30}>30 rows</option>
        <option value={50}>50 rows</option>
        <option value={100}>100 rows</option>
      </SelectPerPage>
      <div>Total:{total}</div>
      <button onClick={setNextPage}>Next</button>
    </PaginationWrap>
  )
}

Pagination.propTypes = {
  total: PropTypes.number,
  perPage: PropTypes.number,
  changePerPage: PropTypes.func,
};

Pagination.defaultProps = {
  total: 0,
  perPage: 10,
  changePerPage: () => {},
};

export default Pagination;
