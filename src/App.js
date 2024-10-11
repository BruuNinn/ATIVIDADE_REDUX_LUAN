import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import FormularioLivro from './componentes/FormularioLivro';
import ListaLivros from './componentes/ListaLivros';
import './App.css';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <div className="container">
        <h1>Gerenciador de Livros</h1>
        <button onClick={toggleTheme}>Alternar Tema</button>
        <FormularioLivro />
        <ListaLivros />
      </div>
    </div>
  );


  
}





export default App;

