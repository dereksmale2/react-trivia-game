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
      {categories.map((trivia) => (
        <button key={trivia.id} onClick={() => setSelectedCategory(trivia)}>
          {trivia.name}
        </button>
      ))}
    </div>
  )
}

export default Trivia
