import {combineReducers, configureStore} from '@reduxjs/toolkit';
import sTambah from './Pertambahan';

const rootReducer = combineReducers({
  sTambah,
  //   nambah lagi
});

const store = configureStore({reducer: rootReducer});

export {store};
