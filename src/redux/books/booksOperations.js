import { createAsyncThunk } from '@reduxjs/toolkit';
import * as bookShelfAPI from '../../services/bookshelf-api';

// Thunks - avoiding the routine of creating 3 standart actionCreators
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const books = await bookShelfAPI.fetchBooks();
  return books;
});
