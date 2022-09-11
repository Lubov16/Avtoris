import { configureStore } from "@reduxjs/toolkit";
 
import counterReducer from './features/counter/counterSlice';
import userData from './features/user/userData';

export default configureStore({
  reducer: {
    counter: counterReducer, 
    user: userData,
  }
});

