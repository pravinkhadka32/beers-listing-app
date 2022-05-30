import { put, call, all, takeLatest } from 'redux-saga/effects';
import actions from './actions';
import Api from '../../../app/services/Api';

const api = new Api();

export const fetchAll = takeLatest(actions.FETCH_BEERS, function* (action) {
    try {
        const response = yield call(api.get, 'beers', { page: action.page, per_page: action.per_page });
        yield put({ type: actions.FETCH_BEERS_SUCCESS, response });
    } catch (error) {
        yield put({ type: actions.FETCH_BEERS_FAILURE, error });
    }
});

export default function* saga() {
    yield all([fetchAll]);
}
