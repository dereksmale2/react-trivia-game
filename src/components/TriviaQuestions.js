/* globals fetch */

import React, { useState, useEffect } from 'react'
import TriviaQuestion from './TriviaQuestion'

const TriviaQuestions = ({ category, clearSelectedCategory }) => {
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])

  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=10&category=${category.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setQuestions(data.results)
      })
  }, [category])

  const handleAnswer = (answer) => {
    console.log(answer)
  }

  const SubmitAnswers = () => {}

  return (
    <div>
      <h2>{category.name}</h2>
      <button onClick={clearSelectedCategory}>Return to all categories</button>
      {questions.map((question) => (
        <TriviaQuestion
          question={question}
          handleAnswer={handleAnswer}
          key={question.id}
        />
      ))}
      <button type='submit' onClick={SubmitAnswers}>
        Submit Answers
      </button>
    </div>
  )
}

export default TriviaQuestions
