import React, { useEffect, useState } from 'react';
import './App.css';

// components
import { Intro } from './Components/Intro';
import { QuestionCard } from './Components/QuestionCard';

// types
import { ModifyQuestionType } from './Types/Type';

// Services
import { getQuestions } from './Services/Data';

const App = () => {

  let [quiz, setQuiz] = useState<ModifyQuestionType[]>([]);
  let [quizPage, setQuizPage] = useState<boolean>(true);
  let [num, setNum] = useState(0);
  let [score, setScore] = useState(0);
  let [name, setName] = useState<String>("");

  useEffect(() => {
    async function QuestionAnswer() {
      const response = await getQuestions(20, 'easy');
      setQuiz(response)
    };
    QuestionAnswer();
  }, []);

  let numberOfQuiz = quiz.length;

  if (!quiz.length) {
    return <h4>loading...</h4>
  };

  let onEnter = (username: string) => {
    setQuizPage(false)
    setName(username)
  };
  let quizNext = (ans: string) => {
    setNum(num + 1)

    if (quiz[num].answer === ans) {
      setScore(score + 1)
    }
  };

  if (num > numberOfQuiz - 1) {

    let greets = "Congratulations!"

    if (score <= numberOfQuiz / 2) {
      greets = "Sorry!"
    }

    return (
      <div className="main-container">
        <h5> {greets} {name} </h5>
        <h2>You got {score} out of {numberOfQuiz}</h2>
      </div>
    )
  }

  return (
    <div className="main-container" >
      {quizPage ? <Intro onselect={onEnter} /> :
        <QuestionCard
          question={quiz[num].question}
          options={quiz[num].options}
          onnext={quizNext}
          num={num}
          queslength={numberOfQuiz}
        />}
    </div>
  )
};

export default App;