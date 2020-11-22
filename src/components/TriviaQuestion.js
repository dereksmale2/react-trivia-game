import React, { useState, useEffect } from 'react'
import { isEmpty } from 'lodash'

// https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
const shuffleArray = (array) => {
  for (let origLocation = array.length - 1; origLocation > 0; origLocation--) {
    const newLocation = Math.floor(Math.random() * origLocation)
    const temp = array[origLocation]
    array[origLocation] = array[newLocation]
    array[newLocation] = temp
  }
}

const TriviaQuestion = ({ question, handleAnswer }) => {
  const [chosenAnswer, setChosenAnswer] = useState(null)
  const [shuffledAnswers, setShuffledAnswers] = useState([])

  useEffect(() => {
    if (!isEmpty(question)) {
      const answers = question.incorrect_answers.slice()
      answers.push(question.correct_answer)
      shuffleArray(answers)
      setShuffledAnswers(answers)
    }
  }, [question])

  return (
    <div className='ma3'>
      <div>
        <b>Question:</b>
        <span dangerouslySetInnerHTML={{ __html: question.question }} />
      </div>
      <div>
        {shuffledAnswers.map((answer) => (
          <form key={answer}>
            <label>
              <input
                type='radio'
                name={'answer-' + answer}
                value={answer}
                checked={chosenAnswer === answer}
                onChange={() => {
                  setChosenAnswer(answer)
                  handleAnswer({ id: question.question, answer })
                }}
              />
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </label>
          </form>
        ))}
      </div>
    </div>
  )
}

export default TriviaQuestion
