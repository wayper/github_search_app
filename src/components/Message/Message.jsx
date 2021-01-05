import React from 'react';
import PropTypes from 'prop-types';
import {
  MessageWrap,
  MessageBox,
  MessageHeading,
  MessageText,
  CloseButton,
} from './styles';

const colorStatusMap = {
  error: 'red',
  success: 'green',
  warning: 'orange',
};

function Message({
  text,
  messageType,
  killMessage,
}) {
  return (
    <MessageWrap>
      <MessageBox color={colorStatusMap[messageType] || 'red'}>
        <MessageHeading>
          {messageType}
        </MessageHeading>
        <MessageText>
          {text}
        </MessageText>
        <CloseButton onClick={killMessage}>
          Close
        </CloseButton>
      </MessageBox>
    </MessageWrap>
  )
}

Message.propTypes = {
  text: PropTypes.string,
  messageType: PropTypes.string,
  killMessage: PropTypes.func,
};

Message.defaultProps = {
  text: '',
  messageType: '',
  killMessage: () => {},
};

export default Message;
