import styled from 'styled-components';

export const AppWrap = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;
  padding: 0 2em;
  background-color: #37474F;
  min-height: 100vh;
  overflow: hidden;
`;

AppWrap.displayName = 'AppWrap';

export default AppWrap;
