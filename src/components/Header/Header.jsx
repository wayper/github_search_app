import React from 'react';
import {
  LogoBox,
  CompanyName,
  CompanyTitle,
  HeaderWrap,
  AppNameBlock,
} from './styles';

function Header() {
  return (
    <HeaderWrap>
      <LogoBox>
        <CompanyName>REQUESTUM</CompanyName>
        <CompanyTitle>web development company</CompanyTitle>
      </LogoBox>
      <AppNameBlock>
        Github users search app
      </AppNameBlock>
    </HeaderWrap>
  )
}

export default Header;
