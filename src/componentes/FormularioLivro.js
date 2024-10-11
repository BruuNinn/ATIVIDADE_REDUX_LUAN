import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function FormularioLivro() {
  const [book, setBook] = useState('');
  const dispatch = useDispatch();

  const addBook = () => {
    if (book) {
      dispatch({ type: 'ADD_BOOK', payload: book });
      setBook('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={book}
        onChange={(e) => setBook(e.target.value)}
        placeholder="Digite o nome do livro"
      />
      <button onClick={addBook}>Adicionar Livro</button>
    </div>
  );
}

export default FormularioLivro;
