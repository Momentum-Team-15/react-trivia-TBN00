import { useEffect, useState } from 'react';
import { requestQuestions } from '../requests';


export const Questions = ({selectedCategoryId, setSelectedCategoryId}) => {
    const [triviaQuestion, setTriviaQuestion] = useState ('')
    const [correctAnswer, setCorrectAnswer] = useState ('')
    const [incorrectAnswer, setIncorrectAnswer] = useState ([])
    let [counter, setCounter] = useState (0)

    const handleGoBack = () => setSelectedCategoryId(null)
    const handleNext = () => setCounter(counter+=1)

    
useEffect(() => {
    requestQuestions(selectedCategoryId).then(res => {
        setTriviaQuestion(res.data.results[counter].question)
        setCorrectAnswer(res.data.results[counter].correct_answer)
        setIncorrectAnswer(res.data.results[counter].incorrect_answers)
    })
}, [selectedCategoryId, counter] )

    // let randomized = [correctAnswer+incorrectAnswer]
    // console.log(randomized)

    return (
        <div>
            <button onClick={handleGoBack}>Home</button>
            <p>{triviaQuestion}</p>
            {console.log(triviaQuestion)}
            <button onClick={handleNext}>{correctAnswer}</button>
            {incorrectAnswer.map((wrong)=> (
                <button>{wrong}</button>
                ))}
                {console.log(counter)}
        </div>
    )
}
