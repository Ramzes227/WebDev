import React from 'react';
import Quiz from './components/Quiz';
import './styles.css'; // Изменили импорт на styles.css

function App() {
  return (
    <div className='app'>
      <h1>Викторина по веб-разработке</h1>
      <Quiz />
    </div>
  );
}

export default App;
