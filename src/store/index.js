import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import profileReducer from './reducer/profile';
import transferReducer from './reducer/transfer';
import userReducer from './reducer/user';
// import paginationReducer from "./reducer/pagination";

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  users: userReducer,
  transfer: transferReducer,
  profile: profileReducer,
  // pagination: paginationReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
