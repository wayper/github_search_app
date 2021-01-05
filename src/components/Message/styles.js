import styled from 'styled-components';

export const MessageWrap = styled.div`
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  ${({ color }) => (`
    background-color: ${color};
  `)}
  border-radius: 15px;
  padding: 1em;
  overflow: hidden;
`;

export const MessageHeading = styled.div`
  padding: 0;
  font-weight: bold;
`;

export const MessageText = styled.div`
  padding: 1em 0;
`;

export const CloseButton = styled.button`
  background-color: blue;
`;

MessageWrap.displayName = 'MessageWrap';
MessageBox.displayName = 'MessageBox';
MessageHeading.displayName = 'MessageHeading';
MessageText.displayName = 'MessageText ';
CloseButton.displayName = 'CloseButton ';

export default MessageWrap;
