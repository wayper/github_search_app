import { SET_MESSAGE, KILL_MESSAGE } from '../actions/types';

export default (state = null, { type, payload }) => {
  const { text, messageType } = payload || {};

  switch (type) {
    case SET_MESSAGE:
      return {
        messageType,
        text,
      };
    case KILL_MESSAGE:
      return null;
    default:
      return state;
  }
}
