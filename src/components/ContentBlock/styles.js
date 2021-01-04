import styled from 'styled-components';

export const ContentBlockWrap = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr;
  grid-template-columns: 1fr 3fr;
  grid-gap: 2em;
  padding: 1em 0;
  margin: 0 auto;
  max-width: 1200px;
  grid-template-areas: 
  "searchBlock pagination"
  "searchBlock cardList";

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

ContentBlockWrap.displayName = 'ContentBlockWrap';

export default ContentBlockWrap;
