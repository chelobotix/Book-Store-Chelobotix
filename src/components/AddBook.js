/* eslint-disable */
import { useSelector, useDispatch } from 'react-redux';
import { fetchGetBooks, fetchPostBook } from '../redux/books/booksSlice';
import { update } from '../redux/books/booksSlice';
const AddBook = () => {
  const bookArray = useSelector((state) => state.book.bookArray);
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    e.preventDefault();
    const obj = {
      item_id: (`item${Object.keys(bookArray).length + 1}`),
      title: e.target.elements['title'].value,
      author: e.target.elements['author'].value,
      category: 'fiction',
    };
    dispatch(fetchPostBook(obj)).then((response) => dispatch(fetchGetBooks()))

    e.target.elements['title'].value = '';
    e.target.elements['author'].value = '';

  };

  return (
    <form onSubmit={handleAddBook}>
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="author" placeholder="Author" />
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default AddBook;
