import {
  SAVE_LOCAL_DATA,
} from '../actions/types';

const initialState = {
  items: [],
  total: 0,
};

export default (state = initialState, { type, payload }) => {
  const items = Array.isArray(payload)
    ? payload
    : payload && payload.items || [];

  const total = Array.isArray(payload)
    ? 0
    : payload && payload.total_count || 0;

  switch (type) {
    case SAVE_LOCAL_DATA: {
      return ({
        items,
        total,
      })
    }
    default:
      return state;
  }
}
