import styled from 'styled-components';

export const CardListWrap = styled.div`
  grid-area: cardList;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5em;

  @media (max-width: 768px) {
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: 1fr;
  }
`;

CardListWrap.displayName = 'CardListWrap';

export default CardListWrap;
