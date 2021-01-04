import styled from 'styled-components';

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
  border-bottom: 1px solid #FFD180;
  color: #FFD180;
`;

export const Logo = styled.div`
  font-size: 1.8em;
  font-weight: bold;
`;

export const AppNameBlock = styled.div`
  font-size: 1.2em;
`;

HeaderWrap.displayName = 'HeaderWrap';
Logo.displayName = 'Logo';
AppNameBlock.displayName = 'AppNameBlock';

export default HeaderWrap;
