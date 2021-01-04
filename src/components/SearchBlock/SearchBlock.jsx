import React from 'react';
import PropTypes from 'prop-types';

import {
  Input,
  History,
  InputWrap,
  HistoryList,
  HistoryHeading,
  SearchBlockWrap,
  HistoryListItem,
} from './styles';

function SearchBlock({ value, history, onChange }) {
  return (
    <SearchBlockWrap>
      <InputWrap>
        <Input
          value={value}
          onChange={onChange}
        />
      </InputWrap>
      <History>
        <HistoryHeading>
          Search history:
        </HistoryHeading>
        <HistoryList>
          {history.map((keyWord) => (
            <HistoryListItem key={keyWord}>
              {keyWord}
            </HistoryListItem>
          ))}
        </HistoryList>
      </History>
    </SearchBlockWrap>
  )
}

SearchBlock.propTypes = {
  value: PropTypes.string,
  history: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

SearchBlock.defaultProps = {
  value: '',
  history: [],
  onChange: () => {},
};

export default SearchBlock;
