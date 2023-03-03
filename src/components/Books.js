import { useState } from 'react';
import Book from './Book';
import AddBook from './AddBook';

const BookList = () => {
  // eslint-disable-next-line no-unused-vars
  const [bookArray, setBookArray] = useState(
    [
      {
        title: 'The First Man in Rome',
        author: 'Colleen McCullough',
      },
      {
        title: 'The Lord of the Rings',
        author: 'J. R. R. Tolkien',
      },
      {
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoyevsky',
      },
    ],
  );

  return (
    <section className="bookList">
      <ul>
        {bookArray.map((elem) => (
          <li key={elem.title}>
            <Book title={elem.title} author={elem.author} />
          </li>
        ))}
      </ul>
      <AddBook />
    </section>
  );
};

export default BookList;
