import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from './booksOperations';

const booksSlice = createSlice({
  name: 'books',
  initialState: { entities: [], isLoading: false, error: null },
  extraReducers: {
    [fetchBooks.fulfilled]: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    [fetchBooks.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchBooks.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default booksSlice.reducer;

// import { createReducer, combineReducers } from '@reduxjs/toolkit';
// const entities = createReducer([], {
//   [fetchBooks.fulfilled]: (_, action) => action.payload,
// });

// const isLoading = createReducer(false, {
//   [fetchBooks.pending]: () => true,
//   [fetchBooks.fulfilled]: () => false,
//   [fetchBooks.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [fetchBooks.rejected]: (_, action) => action.payload,
//   [fetchBooks.pending]: () => null,
// });

// export default combineReducers({
//   entities,
//   isLoading,
//   error,
// });
