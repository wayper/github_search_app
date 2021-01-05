import styled from 'styled-components';

export const CardWrap = styled.div`
  background-color: #EEEEEE;
  border-radius: 15px;
  padding: 1em;
  overflow: hidden;
`;

export const CardHeading = styled.div`
  padding: 0;
  font-weight: bold;
`;

export const ContentItem= styled.div`
  display: flex;
  margin: 1em 0 0 0;
`;

export const ContentItemTitle = styled.div`
`;

export const ContentItemText = styled.div`
  font-weight: bold;
  padding: 0 0.4em;
`;

CardWrap.displayName = 'CardWrap';
CardHeading.displayName = 'CardHeading';
ContentItem.displayName = 'ContentItem';
ContentItemTitle.displayName = 'ContentItemTitle';
ContentItemText.displayName = 'ContentItemText';

export default CardWrap;
