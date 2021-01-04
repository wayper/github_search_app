import styled from 'styled-components';

export const PaginationWrap = styled.div`
  grid-area: pagination;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectPerPage = styled.select`
  outline:none;
  user-select: none;  
  &::-moz-focus-outer, &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

PaginationWrap.displayName = 'PaginationWrap';
SelectPerPage.displayName = 'SelectPerPage';

export default PaginationWrap;
