import React from 'react';
import PropTypes from 'prop-types';
import CardList from '../CardList';
import Pagination from '../Pagination';
import SearchBlock from '../SearchBlock';
import {
  ContentBlockWrap,
} from './styles';

function ContentBlock({
  page,
  total,
  value,
  perPage,
  history,
  cardList,
  onChange,
  isLoading,
  totalPages,
  setPrevPage,
  setNextPage,
  changePerPage,
}) {
  return (
    <ContentBlockWrap>
      <SearchBlock
        history={history}
        value={value}
        onChange={onChange}
      />
      <Pagination
        page={page}
        total={total}
        perPage={perPage}
        totalPages={totalPages}
        setPrevPage={setPrevPage}
        setNextPage={setNextPage}
        changePerPage={changePerPage}
      />
      {(
        isLoading
          ? <div>Loading ...</div>
          : <CardList cardList={cardList}/>
      )}
    </ContentBlockWrap>
  )
}

ContentBlock.propTypes = {
  page: PropTypes.number,
  total: PropTypes.number,
  value: PropTypes.string,
  history: PropTypes.arrayOf(PropTypes.string),
  perPage: PropTypes.number,
  cardList: PropTypes.arrayOf(
    PropTypes.object
  ),
  onChange: PropTypes.func,
  isLoading: PropTypes.bool,
  totalPages: PropTypes.number,
  setPrevPage: PropTypes.func,
  setNextPage: PropTypes.func,
  changePerPage: PropTypes.func,
};

ContentBlock.defaultProps = {
  page: 0,
  total: 0,
  value: '',
  perPage: 0,
  history: [],
  cardList: [],
  onChange: () => {},
  isLoading: false,
  totalPages: 0,
  setPrevPage: () => {},
  setNextPage: () => {},
  changePerPage: () => {},
};

export default ContentBlock;
