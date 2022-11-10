import { useEffect, useState } from 'react';
import { requestQuestions } from '../requests';


export const Questions = ({selectedCategoryId, setSelectedCategoryId}) => {
    const [triviaQuestion, setTriviaQuestion] = useState ('')
    const [correctAnswer, setCorrectAnswer] = useState ('')
    const [incorrectAnswer, setIncorrectAnswer] = useState ('')

    const handleGoBack = () => setSelectedCategoryId(null)

useEffect(() => {
    requestQuestions(selectedCategoryId).then(res => {
        setTriviaQuestion(res.data.results[0].question)
        setCorrectAnswer(res.data.results[0].correct_answer)
        setIncorrectAnswer(res.data.results[0].incorrect_answers)
        {console.log(res.data.results[0].question)}
    })
}, [selectedCategoryId])

    return (
        <div>
            <button onClick={handleGoBack}>Home</button>
            <p>TEST QUESTION</p>
            <p>{selectedCategoryId}</p>
            <p>{triviaQuestion}</p>
            <button>{correctAnswer} {incorrectAnswer}</button>
        </div>
    )
}
