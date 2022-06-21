// import { createAsyncThunk } from '@reduxjs/toolkit';
import * as booksActions from './booksActions';
import * as bookShelfAPI from '../../services/bookshelf-api';

export const fetchBooks = () => async (dispatch) => {
  dispatch(booksActions.fetchBooksRequest());

  try {
    const books = await bookShelfAPI.fetchBooks();
    dispatch(booksActions.fetchBooksSuccess(books));
  } catch (error) {
    dispatch(booksActions.fetchBooksError(error));
  }
};
