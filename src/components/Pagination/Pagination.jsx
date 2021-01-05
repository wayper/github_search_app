import React from 'react';
import PropTypes from 'prop-types';
import { PaginationWrap, SelectPerPage } from './styles';

function Pagination({
  page,
  total,
  perPage,
  totalPages,
  setPrevPage,
  setNextPage,
  changePerPage,
}) {
  return (
    <PaginationWrap>
      <button onClick={setPrevPage} disabled={!total || page <= 1 && true}>Prev</button>
      <div>Page: {page}/{totalPages}</div>
      <SelectPerPage value={perPage} onChange={changePerPage}>
        <option value={10}>10 rows</option>
        <option value={30}>30 rows</option>
        <option value={50}>50 rows</option>
        <option value={100}>100 rows</option>
      </SelectPerPage>
      <div>Records: {total}</div>
      <button onClick={setNextPage} disabled={!total || page >= totalPages && true}>Next</button>
    </PaginationWrap>
  )
}

Pagination.propTypes = {
  page: PropTypes.number,
  total: PropTypes.number,
  perPage: PropTypes.number,
  totalPages: PropTypes.number,
  setPrevPage: PropTypes.func,
  setNextPage: PropTypes.func,
  changePerPage: PropTypes.func,
};

Pagination.defaultProps = {
  page: 0,
  total: 0,
  perPage: 0,
  totalPages: 0,
  setPrevPage: () => {},
  setNextPage: () => {},
  changePerPage: () => {},
};

export default Pagination;
