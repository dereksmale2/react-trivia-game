import React from 'react'

const Submit = ({ clearSelectedCategory, questions }) => {
  const SubmitAnswers = () => {
    let numCorrect = 0
    for (const question of questions) {
      if (question.chosenAnswer === question.correct_answer) {
        numCorrect += 1
      }
    }
    return numCorrect
  }

  return (
    <div>
      <h2> You got {SubmitAnswers()}/10 answers correct!</h2>
      <button onClick={clearSelectedCategory}>Find a new category</button>
    </div>
  )
}

export default Submit
