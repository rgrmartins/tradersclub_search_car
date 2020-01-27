import { all } from 'redux-saga/effects';

import car from './Car/sagas';

export default function* rootSaga() {
  return yield all([car]);
}
