import React, { useState } from 'react';

import './bootstrap.min.css'; 

const questions = [
  {
    question: 'Что такое HTML?',
    options: ['Язык программирования', 'Гипертекстовый язык разметки', 'База данных', 'Видеоформат'],
    correctAnswer: 'Гипертекстовый язык разметки'
  },
  {
    question: 'Какое расширение у файлов каскадных таблиц стилей?',
    options: ['.js', '.html', '.css', '.py'],
    correctAnswer: '.css'
  },
  {
    question: 'Что означает аббревиатура "CSS"?',
    options: ['Counter Strike: Source', 'Cascading Style Sheets', 'Crazy Style Syntax', 'Computer Style Sheets'],
    correctAnswer: 'Cascading Style Sheets'
  },
  {
    question: 'Что такое CSS?',
    options: ['Язык программирования', 'Гипертекстовый язык разметки', 'Каскадные таблицы стилей', 'Фреймворк для JavaScript'],
    correctAnswer: 'Каскадные таблицы стилей'
  },
  {
    question: 'Какое расширение у файлов JavaScript?',
    options: ['.js', '.html', '.css', '.py'],
    correctAnswer: '.js'
  },
  {
    question: 'Что такое DOM?',
    options: ['Document Object Model', 'Data Object Model', 'Design Object Model', 'Document Oriented Model'],
    correctAnswer: 'Document Object Model'
  },
  {
    question: 'Какие основные типы данных есть в JavaScript?',
    options: ['Number, String, Boolean', 'Integer, Float, String', 'Integer, String, Array', 'Object, Array, Boolean'],
    correctAnswer: 'Number, String, Boolean'
  },
  {
    question: 'Что такое AJAX?',
    options: ['Язык программирования', 'Методология веб-разработки', 'Технология асинхронного обмена данными с сервером', 'Фреймворк для создания пользовательских интерфейсов'],
    correctAnswer: 'Технология асинхронного обмена данными с сервером'
  },
  {
    question: 'Как создать переменную в JavaScript?',
    options: ['let myVariable = 10;', 'variable myVariable = 10;', 'int myVariable = 10;', 'myVariable = 10;'],
    correctAnswer: 'let myVariable = 10;'
  },
  {
    question: 'Какой метод используется для добавления элемента в конец массива в JavaScript?',
    options: ['push()', 'append()', 'add()', 'insert()'],
    correctAnswer: 'push()'
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='quiz'>
      {showScore ? (
        <div className='score-section'>
          Ваш результат: {score} из {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Вопрос {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].question}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} className="btn btn-primary" onClick={() => handleAnswerOptionClick(option === questions[currentQuestion].correctAnswer)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
