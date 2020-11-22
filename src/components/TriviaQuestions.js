/* globals fetch */

import React, { useState, useEffect } from 'react'
import TriviaQuestion from './TriviaQuestion'
import Submit from './Submit'

const TriviaQuestions = ({ category, clearSelectedCategory }) => {
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState({})
  const [submit, setSubmit] = useState(false)

  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=10&category=${category.id}`)
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.results)
      })
  }, [category])

  const handleAnswer = ({ answer, id }) => {
    setAnswers({ ...answers, [id]: answer })
  }

  if (submit) {
    return (
      <Submit
        clearSelectedCategory={clearSelectedCategory}
        questions={questions}
        category={category}
        answers={answers}
      />
    )
  }

  return (
    <div>
      <center>
        <h2>{category.name}</h2>
      </center>
      <center>
        <button onClick={clearSelectedCategory}>
          Return to all categories
        </button>
      </center>
      {questions.map((question) => (
        <TriviaQuestion
          question={question}
          handleAnswer={handleAnswer}
          key={question.id}
        />
      ))}
      <center>
        <button type='submit' onClick={() => setSubmit(!submit)}>
          Submit Answers
        </button>
      </center>
    </div>
  )
}

export default TriviaQuestions
