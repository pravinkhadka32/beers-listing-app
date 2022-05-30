import { all } from '@redux-saga/core/effects';
import { homeSagas } from '../../home';

export default function* rootSaga() {
    yield all([...homeSagas]);
}