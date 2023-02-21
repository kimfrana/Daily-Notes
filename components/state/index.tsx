import { configureStore } from '@reduxjs/toolkit';
import addCardStore from './addCardStore';

export const store = configureStore({
 reducer: {
  addCard: addCardStore
 }
})