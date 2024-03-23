import React, { useState } from 'react';

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
              <button key={index} onClick={() => handleAnswerOptionClick(option === questions[currentQuestion].correctAnswer)}>
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
