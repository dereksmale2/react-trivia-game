import React from 'react'

const Submit = ({ clearSelectedCategory, questions, answers }) => {
  let numCorrect = 0
  for (const question of questions) {
    console.log(question)
    if (answers[question.question] === question.correct_answer) {
      numCorrect += 1
    }
  }

  return (
    <div>
      <h2> You got {numCorrect}/10 answers correct!</h2>
      <button onClick={clearSelectedCategory}>Find a new category</button>
    </div>
  )
}

export default Submit
