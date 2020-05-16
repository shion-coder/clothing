import { takeLatest, put, all, call } from 'redux-saga/effects';

import { firestore, convertCollectionsSnapshot } from 'config/firebase';

import { FETCH_COLLECTIONS_START } from './shop.types';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

/* -------------------------------------------------------------------------- */

export function* fetchCollectionsStartAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collections = yield call(convertCollectionsSnapshot, snapshot);

    yield put(fetchCollectionsSuccess(collections));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsStartAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
