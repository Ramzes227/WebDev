const quizForm = document.getElementById('quiz-form');
const resultElement = document.getElementById('result');

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        alert('Пожалуйста, выберите ответ!');
        return;
    }

    const userAnswer = selectedOption.value;

    if (userAnswer === 'a') {
        resultElement.textContent = 'Верно! Молодец.';
    } else {
        resultElement.textContent = 'Упс! Неверный ответ. Попробуйте снова.';
    }

    quizForm.style.display = 'none';
}

