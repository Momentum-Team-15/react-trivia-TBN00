import { useEffect, useState } from 'react';
import { requestQuestions } from '../requests';


export const Questions = ({ selectedCategoryId, setSelectedCategoryId }) => {
    const [triviaQuestion, setTriviaQuestion] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [incorrectAnswer, setIncorrectAnswer] = useState([])
    let [counter, setCounter] = useState(0)
    // let [correctCounter, setCorrectCounter] = useState(0)
    // let [incorrectCounter, setIncorrectCounter] = useState(0)

    const handleGoBack = () => setSelectedCategoryId(null)
    const handleNext = () => setCounter(counter += 1)
    // const handleCorrect = () => setCorrectCounter(correctCounter += 1)
    // const handleIncorrect = () => setIncorrectCounter(incorrectCounter += 1)

    useEffect(() => {
        requestQuestions(selectedCategoryId).then(res => {
            setTriviaQuestion(res.data.results[counter].question.replace(/[^a-zA-Z0-9 ,?%]/g, ''))
            setCorrectAnswer(res.data.results[counter].correct_answer.replace(/[^a-zA-Z0-9 ?%]/g, ''))
            setIncorrectAnswer(res.data.results[counter].incorrect_answers)
        })
    }, [selectedCategoryId, counter])

    return (
        <div>
            <button onClick={handleGoBack}>Home</button>
            <p>{triviaQuestion.replace(/quot/g, '"').replace(/039/g, "'")}</p>
            {console.log(triviaQuestion)}
            <button onClick={handleNext}>{correctAnswer}</button>
            {incorrectAnswer.map((wrong, index) => (
                <button key={index} onClick={handleNext}>{wrong.replace(/[^a-zA-Z0-9 ?%]/g, '')}</button>
            ))}
            <p>Correct answers: {counter}</p>
            {console.log(counter)}
        </div>
    )
}
