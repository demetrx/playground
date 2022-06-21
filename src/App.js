import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { booksOperations, booksSelectors } from 'redux/books';

function App() {
  const dispatch = useDispatch();
  const { entities: books, isLoading } = useSelector(booksSelectors.getBooks);

  useEffect(() => {
    dispatch(booksOperations.fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
    <>
      {books.length > 0 && (
        <ul>
          {books.map((b) => (
            <li key={b.id}>{b.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
