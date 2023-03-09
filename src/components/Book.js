import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchDeleteBooks, fetchGetBooks } from '../redux/books/booksSlice';

const Book = (props) => {
  const { id, author, title } = props;
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    // eslint-disable-next-line no-unused-vars
    dispatch(fetchDeleteBooks(id)).then((response) => dispatch(fetchGetBooks()));
  };

  return (
    <div>
      <p>
        Author:
        {' '}
        {author}
      </p>
      <p>
        Title:
        {' '}
        {title}
      </p>
      <button onClick={() => handleDeleteBook(id)} type="button">Remove</button>
    </div>
  );
};

Book.defaultProps = { id: '', author: '', title: '' };
Book.propTypes = { id: PropTypes.string, author: PropTypes.string, title: PropTypes.string };

export default Book;
