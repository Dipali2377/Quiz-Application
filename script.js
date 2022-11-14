const quizData = [
  {
    question: "Q1: What is HTML?",
    a: "hyper test markup language",
    b: "hpyer text markup language",
    c: "Hey Test Markup Language",
    d: "Hyper Text Markup Language",
    ans: "ans4",
  },

  {
    question: "Q2: What is long form of CSS?",
    a: "Cascading Style Sheets",
    b: "Cascading Styles Sheets",
    c: "Cascadings Style Sheets",
    d: "Cascading Style Sheet",
    ans: "ans1",
  },

  {
    question: "Q3:  Choose the correct HTML tag for the largest heading",
    a: "<heading>",
    b: "<h1></h1>",
    c: "<head>",
    d: "<h6>",
    ans: "ans4",
  },

  {
    question: "Q4: What is the correct HTML tag for inserting a line break?",
    a: "<br>",
    b: "<lb>",
    c: "<break></break>",
    d: "<break>",
    ans: "ans1",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

let QuestionCount = 0;
LoadQuestions = () => {
  const QuestionList = quizData[QuestionCount];
  question.innerHTML = QuestionList.question;

  option1.innerHTML = QuestionList.a;
  option2.innerHTML = QuestionList.b;
  option3.innerHTML = QuestionList.c;
  option4.innerHTML = QuestionList.d;
};

LoadQuestions();

// Creating the function that will store the checked answer

const getCheckedAnswer = () => {
  let answer;
  answers.forEach((curAnswer) => {
    if (curAnswer.checked) {
      answer = curAnswer.id;
    }
  });
  return answer;
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckedAnswer();
});
