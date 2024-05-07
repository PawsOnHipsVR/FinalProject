let score = 0;
let incorrect = 0;

const mainDiv = document.querySelector(`#mainDiv`);

function removeElement(select) {
  let elementSelected = document.querySelector(select);
  elementSelected.remove();
}

function createElement(newElement, parentElement, text = ``, id = ``) {
  const elementNew = document.createElement(newElement);
  parentElement.append(elementNew);

  if (text != ``) {
    elementNew.innerText = text;
  }

  if (id != ``) {
    elementNew.id = id;
  }
}

function questionOneIncorrect() {
  incorrect = 1;
  removeElement(`h2`);
  const allButtons = document.querySelectorAll(`button`);
  allButtons.forEach((e) => e.remove());
  createElement(`h2`, mainDiv, `Incorrect`);
  createElement(`button`, mainDiv, `Next Question`, `nextQuestion`);

  const next = document.querySelector(`#nextQuestion`);
  next.addEventListener(`click`, questionTwo);
}

function questionOneCorrect() {
  incorrect = 0;
  score++;
  removeElement(`h2`);
  const allButtons = document.querySelectorAll(`button`);
  allButtons.forEach((e) => e.remove());
  createElement(`h2`, mainDiv, `Correct`);
  createElement(`button`, mainDiv, `Next Question`, `nextQuestion`);

  const next = document.querySelector(`#nextQuestion`);
  next.addEventListener(`click`, questionTwo);
}

function questionOne() {
  createElement(`h1`, mainDiv, `Question One`);
  createElement(`h2`, mainDiv, `Who is the current president? (May 2024)`);
  createElement(`button`, mainDiv, `Trump`, `answerOne`);
  createElement(`button`, mainDiv, `Bush`, `answerTwo`);
  createElement(`button`, mainDiv, `Biden`, `answerThree`);
  createElement(`button`, mainDiv, `Obama`, `answerFour`);

  const answerOne = document.querySelector(`#answerOne`);
  const answerTwo = document.querySelector(`#answerTwo`);
  const answerThree = document.querySelector(`#answerThree`);
  const answerFour = document.querySelector(`#answerFour`);

  answerOne.addEventListener(`click`, questionOneIncorrect);
  answerTwo.addEventListener(`click`, questionOneIncorrect);
  answerThree.addEventListener(`click`, questionOneCorrect);
  answerFour.addEventListener(`click`, questionOneIncorrect);
}

function questionTwoIncorrect() {
  incorrect = 1;
  removeElement(`h2`);
  const allButtons = document.querySelectorAll(`button`);
  allButtons.forEach((e) => e.remove());
  createElement(`h2`, mainDiv, `Incorrect`);
  createElement(`button`, mainDiv, `Next Question`, `nextQuestion`);

  const next = document.querySelector(`#nextQuestion`);
  next.addEventListener(`click`, questionThree);
}

function questionTwoCorrect() {
  incorrect = 0;
  score++;
  removeElement(`h2`);
  const allButtons = document.querySelectorAll(`button`);
  allButtons.forEach((e) => e.remove());
  createElement(`h2`, mainDiv, `Correct`);
  createElement(`button`, mainDiv, `Next Question`, `nextQuestion`);

  const next = document.querySelector(`#nextQuestion`);
  next.addEventListener(`click`, questionThree);
}

function questionTwo() {
  removeElement(`h1`);
  removeElement(`h2`);
  removeElement(`#nextQuestion`);

  createElement(`h1`, mainDiv, `Question Two`);
  createElement(`h2`, mainDiv, `What year was Obama elected?`);
  createElement(`button`, mainDiv, `2001`, `answerOne`);
  createElement(`button`, mainDiv, `2024`, `answerTwo`);
  createElement(`button`, mainDiv, `2004`, `answerThree`);
  createElement(`button`, mainDiv, `2008`, `answerFour`);

  const answerOne = document.querySelector(`#answerOne`);
  const answerTwo = document.querySelector(`#answerTwo`);
  const answerThree = document.querySelector(`#answerThree`);
  const answerFour = document.querySelector(`#answerFour`);

  answerOne.addEventListener(`click`, questionTwoIncorrect);
  answerTwo.addEventListener(`click`, questionTwoIncorrect);
  answerThree.addEventListener(`click`, questionTwoIncorrect);
  answerFour.addEventListener(`click`, questionTwoCorrect);
}

function questionThreeIncorrect() {
  incorrect = 1;
  removeElement(`h2`);
  const allButtons = document.querySelectorAll(`button`);
  allButtons.forEach((e) => e.remove());
  createElement(`h2`, mainDiv, `Incorrect`);
  createElement(`button`, mainDiv, `Next Question`, `nextQuestion`);

  const next = document.querySelector(`#nextQuestion`);
  next.addEventListener(`click`, questionFour);
}

function questionThreeCorrect() {
  incorrect = 0;
  score++;
  removeElement(`h2`);
  const allButtons = document.querySelectorAll(`button`);
  allButtons.forEach((e) => e.remove());
  createElement(`h2`, mainDiv, `Correct`);
  createElement(`button`, mainDiv, `Next Question`, `nextQuestion`);

  const next = document.querySelector(`#nextQuestion`);
  next.addEventListener(`click`, questionFour);
}

function questionThree() {
  removeElement(`h1`);
  removeElement(`h2`);
  removeElement(`#nextQuestion`);

  createElement(`h1`, mainDiv, `Question Three`);
  createElement(`h2`, mainDiv, `Who was the president in 2001?`);
  createElement(`button`, mainDiv, `Bush`, `answerOne`);
  createElement(`button`, mainDiv, `Biden`, `answerTwo`);
  createElement(`button`, mainDiv, `Washington`, `answerThree`);
  createElement(`button`, mainDiv, `Lincoln`, `answerFour`);

  const answerOne = document.querySelector(`#answerOne`);
  const answerTwo = document.querySelector(`#answerTwo`);
  const answerThree = document.querySelector(`#answerThree`);
  const answerFour = document.querySelector(`#answerFour`);

  answerOne.addEventListener(`click`, questionThreeCorrect);
  answerTwo.addEventListener(`click`, questionThreeIncorrect);
  answerThree.addEventListener(`click`, questionThreeIncorrect);
  answerFour.addEventListener(`click`, questionThreeIncorrect);
}

function questionFourIncorrect() {
  removeElement(`h2`);
  const allButtons = document.querySelectorAll(`button`);
  allButtons.forEach((e) => e.remove());
  createElement(`h2`, mainDiv, `Incorrect`);
  createElement(`button`, mainDiv, `Check Score`, `end`);

  const next = document.querySelector(`#end`);
  next.addEventListener(`click`, end);
}

function questionFourCorrect() {
  score++;
  removeElement(`h2`);
  const allButtons = document.querySelectorAll(`button`);
  allButtons.forEach((e) => e.remove());
  createElement(`h2`, mainDiv, `Correct`);
  createElement(`button`, mainDiv, `Check Score`, `end`);

  const next = document.querySelector(`#end`);
  next.addEventListener(`click`, end);
}

function questionFour() {
  removeElement(`h1`);
  removeElement(`h2`);
  removeElement(`#nextQuestion`);

  createElement(`h1`, mainDiv, `Question Four`);
  createElement(
    `h2`,
    mainDiv,
    `Who was the president died recently? (May 2024)`
  );
  createElement(`button`, mainDiv, `Washington`, `answerOne`);
  createElement(`button`, mainDiv, `Carter`, `answerTwo`);
  createElement(`button`, mainDiv, `Lincoln`, `answerThree`);
  createElement(`button`, mainDiv, `Bush`, `answerFour`);

  const answerOne = document.querySelector(`#answerOne`);
  const answerTwo = document.querySelector(`#answerTwo`);
  const answerThree = document.querySelector(`#answerThree`);
  const answerFour = document.querySelector(`#answerFour`);

  answerOne.addEventListener(`click`, questionFourIncorrect);
  answerTwo.addEventListener(`click`, questionFourCorrect);
  answerThree.addEventListener(`click`, questionFourIncorrect);
  answerFour.addEventListener(`click`, questionFourIncorrect);
}

function end() {
  removeElement(`h1`);
  removeElement(`h2`);
  removeElement(`#end`);

  createElement(`h1`, mainDiv, `Thanks For Playing!`);
  createElement(`h2`, mainDiv, `Score: ${score}/4`);
}

function start() {
  removeElement(`h1`);
  removeElement(`h2`);
  removeElement(`#start`);

  questionOne();
}

const startButton = document.querySelector(`#start`);
startButton.addEventListener(`click`, start);
