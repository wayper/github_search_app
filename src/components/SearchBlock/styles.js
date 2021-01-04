import styled from 'styled-components';

export const SearchBlockWrap = styled.div`
  grid-area: searchBlock;
  display: flex;
  flex-direction: column;
  color: #FAFAFA;
`;

export const InputWrap = styled.div`
  display: flex;
  position: relative;
  height: 3em;
  padding: 0 1.5em;
  &::before {
    position: absolute;
    content: '';
    width: 3em;
    height: 3em;
    top: 0;
    left: 0;
    border-radius: 50% 0 0 50%;
    background-color: white;
  }
  &::after {
    position: absolute;
    content: '';
    width: 3em;
    height: 3em;
    top: 0;
    right: 0;
    border-radius: 0 50% 50% 0;
    background-color: white;
  }
`;

export const Input = styled.input`
  z-index: 2;
  flex: 1;
  height: inherit;
  padding: 0;
  margin: 0;
  border: none;
  background-color: white;
  font-size: 1.2em;
  outline:none;
  user-select: none;  
  &::-moz-focus-outer, &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

export const History = styled.div``;

export const HistoryHeading = styled.h5`
  padding: 1.1em 0 0.8em 0;
  font-size: 1.2em;
`;

export const HistoryList = styled.ul`
`;

export const HistoryListItem = styled.li`
  font-size: 1.1em;
  padding: 0.2em 0;
`;

SearchBlockWrap.displayName = 'SearchBlockWrap';
InputWrap.displayName = 'InputWrap';
Input.displayName = 'Input';
History.displayName = 'History';
HistoryHeading.displayName = 'HistoryHeading';
HistoryList.displayName = 'HistoryList';
HistoryListItem.displayName = 'HistoryListItem';

export default SearchBlockWrap;
