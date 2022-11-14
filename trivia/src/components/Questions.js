import { useEffect, useState } from 'react';
import { requestQuestions } from '../requests';


export const Questions = ({ selectedCategoryId, setSelectedCategoryId }) => {
    const [triviaQuestion, setTriviaQuestion] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState([])
    const [incorrectAnswer, setIncorrectAnswer] = useState([])
    let [counter, setCounter] = useState(0)
    let [correctCounter, setCorrectCounter] = useState(0)
    let [incorrectCounter, setIncorrectCounter] = useState(0)
    let random = incorrectAnswer.concat(correctAnswer).sort(() => Math.random() - 0.5)

    const handleGoBack = () => setSelectedCategoryId(null)
    const handleClick = (e) => e.target.innerText === correctAnswer ?
        (setCounter(counter += 1), setCorrectCounter(correctCounter += 1)) : (setCounter(counter += 1), setIncorrectCounter(incorrectCounter += 1))

    useEffect(() => {
        requestQuestions(selectedCategoryId).then(res => {
            setTriviaQuestion(res.data.results[counter].question.replace(/[^a-zA-Z0-9 ,?%]/g, ''))
            setCorrectAnswer(res.data.results[counter].correct_answer)
            setIncorrectAnswer(res.data.results[counter].incorrect_answers)
        })
    }, [selectedCategoryId, counter])

    return (
        <section>
            <div>
                {counter === 10 ? (
                    <>
                        {alert(`Correct: ${correctCounter} Incorrect: ${incorrectCounter}`)}
                        {handleGoBack()}
                    </>
                ) : (
                    <>
                        <button onClick={handleGoBack}>Home</button>
                        <p>{triviaQuestion.replace(/quot/g, '"').replace(/039/g, "'")}</p>
                        <div>
                            {random.map((answer, index) => (
                                <button ket={index} onClick={handleClick}>{answer.replace(/[^a-zA-Z0-9 ?%]/g, '')}</button>
                            ))}
                        </div>
                        <p>Correct answers: {correctCounter}</p>
                        <p>Incorrect answers: {incorrectCounter}</p>
                        {console.log(triviaQuestion)}
                        {console.log(counter)}
                        {console.log(random)}
                    </>
                )}
            </div>
        </section>
    )
}
