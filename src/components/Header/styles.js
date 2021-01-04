import styled from 'styled-components';

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
  border-bottom: 1px solid #FFD180;
  color: #FFD180;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LogoBox = styled.div`
`;

export const CompanyName = styled.div`
  font-size: 1.8em;
  font-weight: bold;
  font-family: 'Roboto Slab';
`;

export const CompanyTitle = styled.div`
  font-size: 1em;
`;

export const AppNameBlock = styled.div`
  font-size: 1.2em;
  @media (max-width: 768px) {
    margin-top: 1em;
  }
`;

HeaderWrap.displayName = 'HeaderWrap';
LogoBox.displayName = 'LogoBox';
CompanyName.displayName = 'CompanyName';
CompanyTitle.displayName = 'CompanyTitle';
AppNameBlock.displayName = 'AppNameBlock';

export default HeaderWrap;
