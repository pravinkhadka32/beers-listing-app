import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import createRootReducer from './reducers';
import rootSaga from './saga';

const sagaMiddlerware = createSagaMiddleware();

const middlewares = [sagaMiddlerware];

const store = configureStore({
    reducer: createRootReducer(),
    middleware: middlewares
});

sagaMiddlerware.run(rootSaga);

export default store;