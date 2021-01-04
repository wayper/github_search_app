import React from 'react';
import {
  Logo,
  HeaderWrap,
  AppNameBlock,
} from './styles';

function Header() {
  return (
    <HeaderWrap>
      <Logo>
        {/* <img /> */}
        <div>REQUESTUM</div>
        <div>web development company</div>
      </Logo>
      <AppNameBlock>
        Github users search app
      </AppNameBlock>
    </HeaderWrap>
  )
}

export default Header;
