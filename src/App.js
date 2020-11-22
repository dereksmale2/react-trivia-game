/* globals fetch */

import './App.css'
import 'tachyons'
import React, { useState, useEffect } from 'react'
import TriviaQuestions from './components/TriviaQuestions'

const Trivia = () => {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then((response) => response.json())
      .then((data) => setCategories(data.trivia_categories))
  }, [])

  if (selectedCategory) {
    return (
      <TriviaQuestions
        category={selectedCategory}
        clearSelectedCategory={() => setSelectedCategory(null)}
      />
    )
  }

  return (
    <div>
      <center>
        <h1>Welcome to Trivia Game!</h1>
      </center>
      <center>
        <h3>Select a category below to begin</h3>
      </center>
      {categories.map((trivia) => (
        <button
          className='ma3 ba pa3 blue'
          key={trivia.id}
          onClick={() => setSelectedCategory(trivia)}
        >
          {trivia.name}
        </button>
      ))}
    </div>
  )
}

export default Trivia
