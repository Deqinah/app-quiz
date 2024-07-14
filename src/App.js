import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./Components/Start";
import Timer from "./Components/Timer";
import Trivia from "./Components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "An open-source JavaScript library, crafted with precision by Facebook, that aims to simplify the intricate process UI?",
      answers: [
        {
          text: "C#",
          correct: false,
        },
        {
          text: "React.js",
          correct: true,
        },
        {
          text: "MIS",
          correct: false,
        },
        {
          text: "Multimedia",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which language is used in React?",
      answers: [
        {
          text: "JavaScript",
          correct: true,
        },
        {
          text: "Management",
          correct: false,
        },
        {
          text: "Calculus",
          correct: false,
        },
        {
          text: "None",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "React provides of art functionality and is an excellent choice for developers looking for an easy to use and highly productive JavaScript framework ?",
      answers: [
          
        {
          text: "False",
          correct: false,
        },
        {
          text: "True",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Additional Hooks use?",
      answers: [
        {
          text: "array",
          correct: false,
        },
        {
          text: "hookstate",
          correct: false,
        },
        {
          text: "development",
          correct: false,
        },
        {
          text: "Custom,use-ref",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Web development canbe classified two?",
      answers: [
        {
          text: "Service,development",
          correct: false,
        },
        {
          text: "Frontend,backend",
          correct: true,
        },
        {
          text: "Website,Service",
          correct: false,
        },
        {
          text: "backend,Website",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "React Component is?",
      answers: [
        {
          text: "rending react component use dom",
          correct: false,
        },
        {
          text: "extention language based",
          correct: false,
        },
        {
          text: "building block user interfarance",
          correct: true,
        },
        {
          text: "None",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "App component use allow jsx dynamically display content?",
      answers: [
        {
          text: "true",
          correct: true,
        },
        {
          text: "false",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Props stand : Component?",
      answers: [
        {
          text: "false",
          correct: true,
        },
        {
          text: "true",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100%" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 250" },
        { id: 4, amount: "$ 300" },
        { id: 5, amount: "$ 350" },
        { id: 6, amount: "$ 400" },
        { id: 7, amount: "$ 500" },
        { id: 8, amount: "$ 600" },
        { id: 9, amount: "$ 650" },
        { id: 10, amount: "$ 700" },
        { id: 11, amount: "$ 950" },
        { id: 12, amount: "$ 1.000" },
        { id: 13, amount: "$ 5.000" },
        { id: 14, amount: "$ 100.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;