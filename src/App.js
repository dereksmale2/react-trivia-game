/* globals fetch */

import './App.css'
import 'tachyons'
import { useState, useEffect } from 'react'

function Trivia() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then((response) => response.json())
      .then((data) => setCategories(data.trivia_categories))
  }, [])

  return (
    <div>
      {categories.map((trivia) => (
        <div key={trivia.id}>{trivia.name}</div>
      ))}
    </div>
  )
}

export default Trivia
