import React from 'react';
import PropTypes from 'prop-types';
import CardList from '../CardList';
import Pagination from '../Pagination';
import SearchBlock from '../SearchBlock';
import {
  ContentBlockWrap,
} from './styles';

function ContentBlock({
  total,
  value,
  page,
  perPage,
  totalPages,
  history,
  cardList,
  onChange,
  isLoading,
  changePerPage,
  setPrevPage,
  setNextPage,
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
          : <CardList data={cardList}/>
      )}
    </ContentBlockWrap>
  )
}

ContentBlock.propTypes = {
  value: PropTypes.string,
  history: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

ContentBlock.defaultProps = {
  value: '',
  history: [],
  onChange: () => {},
};

export default ContentBlock;
