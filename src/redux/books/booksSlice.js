import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookArray: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

export const bookSlice = createSlice({
  name: 'Book',
  initialState,
  reducers: {
    addBook: (state, action) => (
      { ...state, bookArray: [...state.bookArray, action.payload] }
    ),
    removeBook: (state, action) => {
      const aux = state.bookArray.filter((elem) => elem.item_id !== action.payload);
      return {
        ...state,
        bookArray: aux,
      };
    },
  },
});

export const {
  addBook, removeBook,
} = bookSlice.actions;

export default bookSlice.reducer;
