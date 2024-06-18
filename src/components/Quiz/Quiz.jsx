import { useState } from "react";
import "./Quiz.css"


const quiz = [
  {
      id: 1,
      question: "What is React?",
      options: ["A JavaScript library for building user interfaces", "A programming language", "A type of database", "A CSS framework"],
      correct: 0
  },
  {
      id: 2,
      question: "Who developed React?",
      options: ["Google", "Microsoft", "Facebook", "Twitter"],
      correct: 2
  },
  {
      id: 3,
      question: "What is a component in React?",
      options: ["A function that returns HTML", "A database model", "A type of CSS class", "A JavaScript function that interacts with the server"],
      correct: 0
  },
  {
      id: 4,
      question: "What is the use of props in React?",
      options: ["To manage the state of the component", "To store local component data", "To pass data to child components", "To handle component lifecycle events"],
      correct: 2
  },
  {
      id: 5,
      question: "What is the virtual DOM in React?",
      options: ["A copy of the real DOM kept in memory", "A different type of HTML", "A virtual representation of the server", "A type of CSS style"],
      correct: 0
  },
  {
      id: 6,
      question: "What is a state in React?",
      options: ["A permanent storage", "A temporary storage for component data", "A type of prop", "A function that updates the UI"],
      correct: 1
  },
  {
      id: 7,
      question: "How do you create a React application?",
      options: ["Using create-react-app", "By installing the React browser extension", "Using npm start", "By running react init"],
      correct: 0
  },
  {
      id: 8,
      question: "What is JSX in React?",
      options: ["A JavaScript extension syntax for writing HTML", "A type of CSS", "A database query language", "A method to fetch data from the server"],
      correct: 0
  },
  {
      id: 9,
      question: "How do you handle events in React?",
      options: ["Using event listeners", "Using inline JavaScript", "Using methods inside a render function", "Using synthetic events"],
      correct: 3
  },
  {
      id: 10,
      question: "What is the purpose of useEffect hook in React?",
      options: ["To manage state", "To handle component lifecycle events", "To fetch data from an API", "To update the virtual DOM"],
      correct: 1
  }
];


const Quiz = () => {

  const [ number, setNumber ] = useState(1);
  const [ lock, setLock ] = useState(false);
  const [ result, setResult ] = useState(1);

  function next() {
    if(event.target.innerText === "Next"){
      if(lock === true) {
        setNumber(number + 1);
        setLock(false);
  
        const optionArray = [];
  
        for(let i = 0; i < 4; i++) {
          const options = document.getElementsByClassName(`${i}`);
          optionArray.push(options);
        }
  
        optionArray.map((option) => {
            option[0].classList.value.includes("correct") ? option[0].classList.remove("correct") : null
            option[0].classList.value.includes("wrong") ? option[0].classList.remove("wrong") : null
  
            return null
          }
        )
      }
    } else if(event.target.innerText === "Reset") {
      setNumber(1);
      setResult(0);
      setLock(false);
    }
  }

  function answer(event, correct) {

    

    if(lock === false) {
      const { target } = event;
      const { className } = target;
      const userChoice = parseInt(className);
      const correctAnswer = correct;
      
      if (userChoice === correctAnswer) {
        target.classList.add("correct");
        setResult(result + 1);
        setLock(true);
      } else {
        target.classList.add("wrong");
        setLock(true);
        document.getElementsByClassName(`${correctAnswer}`)[0].classList.add("correct")
      }
    }
  }

  const questions = quiz.find(item => item.id === number);

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      {
        number < quiz.length ?
        (
          <div>
            <h2>{number}. {questions.question}</h2>
            <ul>
              {
                questions.options.map((option, index) => (
                  <li 
                    key={index} 
                    className={`${index}`} 
                    onClick={() => (
                      answer(event, questions.correct)
                    )}
                  >
                    {option}
                  </li>
                ))
              }
            </ul>
          </div>
        ) : (
          <h2>Result: {result}/ {quiz.length}</h2>
        )
      }

      <button onClick={next}>
        { number < quiz.length ? "Next" : "Reset" }
      </button>
      <div className="index">{number} of {quiz.length} questions</div>
    </div>
  )
}
export default Quiz