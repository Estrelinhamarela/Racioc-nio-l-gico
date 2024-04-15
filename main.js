const exerciseHistory = [];

const operators = ['+', '-', '*', '/'];
const maxNumber = 10;

function generateExercise() {
  const operator = operators[Math.floor(Math.random() * operators.length)];
  let num1 = Math.floor(Math.random() * maxNumber);
  let num2 = Math.floor(Math.random() * maxNumber);
  
  // Evita divisão por zero
  if (operator === '/' && num2 === 0) {
    num2 = 1;
  }

  let question = `${num1} ${operator} ${num2} = `;
  let answer;
  
  switch (operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    case '/':
      answer = (num1 / num2).toFixed(2);
      break;
    default:
      answer = 'N/A';
  }
  
  return { question, answer: answer.toString() };
}

const exerciseElement = document.getElementById('exercise');
const answerElement = document.getElementById('answer');
const resultElement = document.getElementById('result');
const exerciseHistoryElement = document.getElementById('exerciseHistory');

function displayExercise() {
  const exercise = generateExercise();
  exerciseElement.textContent = exercise.question;
  exerciseElement.dataset.answer = exercise.answer;
}

function checkAnswer() {
  const userAnswer = answerElement.value.trim();
  const correctAnswer = exerciseElement.dataset.answer;

  if (userAnswer === correctAnswer) {
    resultElement.textContent = 'Resposta correta!';
    resultElement.classList.remove('incorrect');
    resultElement.classList.add('correct');
  } else {
    resultElement.textContent = 'Resposta incorreta. Tente novamente!';
    resultElement.classList.remove('correct');
    resultElement.classList.add('incorrect');
  }

  exerciseHistory.push({ question: exerciseElement.textContent, userAnswer, correctAnswer });

  answerElement.value = '';
  updateHistory();
  displayExercise();
}

function updateHistory() {
  exerciseHistoryElement.innerHTML = '';
  exerciseHistory.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.question} - Sua resposta: ${item.userAnswer}, Resposta correta: ${item.correctAnswer}`;
    if (item.userAnswer === item.correctAnswer) {
      li.classList.add('correct');
    } else {
      li.classList.add('incorrect');
    }
    exerciseHistoryElement.appendChild(li);
  });
}

displayExercise();

function generateExercise() {
  const operator = operators[Math.floor(Math.random() * operators.length)];
  let num1 = Math.floor(Math.random() * maxNumber);
  let num2 = Math.floor(Math.random() * maxNumber);
  
  // Evita divisão por zero
  if (operator === '/' && num2 === 0) {
    num2 = 1;
  }

  let question;
  let answer;
  
  if (operator === '/') {
    question = `${num1} ÷ ${num2} = `;
    answer = num1 % num2 === 0 ? num1 / num2 : (num1 / num2).toFixed(2);
  } else {
    question = `${num1} ${operator} ${num2} = `;
    answer = eval(`${num1} ${operator} ${num2}`);
  }

  return { question, answer: answer.toString() };
}


function displayExercise() {
  const exercise = generateExercise();
  exerciseElement.textContent = exercise.question;
  exerciseElement.dataset.answer = exercise.answer;
}

function checkAnswer() {
  const userAnswer = answerElement.value.trim();
  const correctAnswer = exerciseElement.dataset.answer;

  if (userAnswer === correctAnswer) {
    resultElement.textContent = 'Resposta correta!';
    resultElement.classList.remove('incorrect');
    resultElement.classList.add('correct');
  } else {
    resultElement.textContent = 'Resposta incorreta. Tente novamente!';
    resultElement.classList.remove('correct');
    resultElement.classList.add('incorrect');
  }

  exerciseHistory.push({ question: exerciseElement.textContent, userAnswer, correctAnswer });

  answerElement.value = '';
  updateHistory();
  displayExercise();
}

function updateHistory() {
  exerciseHistoryElement.innerHTML = '';
  exerciseHistory.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.question} - Sua resposta: ${item.userAnswer}, Resposta correta: ${item.correctAnswer}`;
    if (item.userAnswer === item.correctAnswer) {
      li.classList.add('correct');
    } else {
      li.classList.add('incorrect');
    }
    exerciseHistoryElement.appendChild(li);
  });
}

displayExercise();

answerElement.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    checkAnswer();
  }
});
