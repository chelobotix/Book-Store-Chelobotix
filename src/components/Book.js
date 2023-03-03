import PropTypes from 'prop-types';

const Book = (props) => {
  const { author, title } = props;
  return (
    <div>
      <p>{author}</p>
      <p>{title}</p>
      <button type="button">Remove</button>
    </div>
  );
};

Book.defaultProps = { author: '', title: '' };
Book.propTypes = { author: PropTypes.string, title: PropTypes.func };

export default Book;
