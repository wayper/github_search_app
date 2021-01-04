import {
  SET_FETCHING_STATUS,
  SET_MESSAGE,
  KILL_MESSAGE,
  FETCH_LOCAL_DATA,
  SAVE_LOCAL_DATA,
  SET_PAGINATION,
  SET_ACTIVE_PLANET,
} from './types';

export const setFetchingLoading = () => ({
  type: SET_FETCHING_STATUS,
  payload: 'loading',
});
export const setFetchingSuccess = () => ({
  type: SET_FETCHING_STATUS,
  payload: 'success',
});
export const setFetchingErrored = () => ({
  type: SET_FETCHING_STATUS,
  payload: 'errored',
});

export const setMessage = (payload) => ({
  type: SET_MESSAGE,
  payload,
});

export const killMessage = () => ({
  type: KILL_MESSAGE,
});

export const fetchLocalData = (payload) => ({
  type: FETCH_LOCAL_DATA,
  payload,
})

export const saveLocalData = (payload) => ({
  type: SAVE_LOCAL_DATA,
  payload,
})

export const setPagination = (payload) => ({
  type: SET_PAGINATION,
  payload,
})

export const setActivePlanet = (payload) => ({
  type: SET_ACTIVE_PLANET,
  payload,
})
