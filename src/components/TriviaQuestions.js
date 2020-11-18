/* globals fetch */
// API token d692feac91a9e3011b480a18a4c7d65f09c3c30bde5aa9d3ddbae4cb7354f961

import React, { useState, useEffect } from 'react'
import TriviaQuestion from './TriviaQuestion'

const TriviaQuestions = ({ category, clearSelectedCategory }) => {
  const [questions, setQuestions] = useState([])
  const [answer, setAnswer] = useState('')

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${category.id}&token=d692feac91a9e3011b480a18a4c7d65f09c3c30bde5aa9d3ddbae4cb7354f961`
    )
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.results)
      })
  }, [category])

  return (
    <div>
      <h2>{category.name}</h2>
      <button onClick={clearSelectedCategory}>Return to all categories</button>
      <TriviaQuestion category={questions.length ? questions[0] : {}} />
      <input
        type='text'
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <input type='submit' value='Submit Answer' />
    </div>
  )
}

export default TriviaQuestions
