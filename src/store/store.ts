import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import { logger } from "redux-logger";

import { rootReducer } from './root-reducer';
// import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';

import { rootSaga } from './root-saga';


const sagaMiddleware = createSagaMiddleware();

const middleware = [process.env.NODE_ENV !== "production" && logger, sagaMiddleware].filter(Boolean);

export type RootState = ReturnType<typeof rootReducer>

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancer =
  (process.env.NODE_ENV !== "production" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleware));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);