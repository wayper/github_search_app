import styled from 'styled-components';

export const ContentBlockWrap = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr;
  grid-template-columns: 1fr 3fr;
  grid-gap: 2em;
  padding: 1em 0;
  grid-template-areas: 
  "searchBlock pagination"
  "searchBlock cardList";

  @media (max-width: 768px) {
    display: inline-grid;
    grid-template-rows: 1fr 30px 8fr;
    grid-template-columns: 1fr;
    grid-template-areas: 
    "searchBlock"
    "pagination"
    "cardList";
  }
`;

ContentBlockWrap.displayName = 'ContentBlockWrap';

export default ContentBlockWrap;
