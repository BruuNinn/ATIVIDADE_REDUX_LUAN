import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ListaLivros() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const removeBook = (index) => {
    dispatch({ type: 'REMOVE_BOOK', payload: index });
  };

  return (
    <div>
      {books.map((book, index) => (
        <div key={index}>
          {book} <button onClick={() => removeBook(index)}>Remover</button>
        </div>
      ))}
    </div>
  );
}

export default ListaLivros;
