// store.jsx
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const rootStore = configureStore({
  reducer: rootReducer,
});

export default rootStore;
