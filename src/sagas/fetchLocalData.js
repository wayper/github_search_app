import { takeLatest, put, call } from 'redux-saga/effects';
import getData from '../utils/getData';
import { FETCH_LOCAL_DATA } from '../actions/types';
import {
  setFetchingLoading,
  setFetchingSuccess,
  setFetchingErrored,
  saveLocalData,
  // setPagination,
  setMessage,
} from '../actions';

const STATUS_MAP = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
}

export function* fetchLocalData({ payload }) {
  const ifNotHaveURL = !payload || !payload.url;

  if (ifNotHaveURL) {
    throw Error('not have url for loading');
  }

  yield put(setFetchingLoading());

  try {
    const result = yield call(getData, payload.url);

    const isStatusOk = result.status === STATUS_MAP.OK;

    const isNotResults = !isStatusOk || !result.data;

    if (isNotResults) {
      throw Error('Failed to get data')
    }

    const data = result.data;

    yield put(saveLocalData(data));
    // yield put(setPagination({
    //   count,
    //   next,
    //   previous,
    // }))

    yield put(setFetchingSuccess());
  } catch (error) {
    yield put(setMessage({
      text: error.message,
      messageType: 'error',
    }));

    yield put(setFetchingErrored());
  }
}

export default function* () {
 yield takeLatest(FETCH_LOCAL_DATA, fetchLocalData);
}
