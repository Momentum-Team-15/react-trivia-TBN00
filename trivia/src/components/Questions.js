import { useState } from 'react';


export const Questions = ({ setSelectedCategoryId, triviaQuestion }) => {

    let [counter, setCounter] = useState(0)
    let [correctCounter, setCorrectCounter] = useState(0)
    let [incorrectCounter, setIncorrectCounter] = useState(0)

    if (triviaQuestion.length === 0) {
        return <div></div>
    }
    const random = triviaQuestion[counter].incorrect_answers.concat(triviaQuestion[counter].correct_answer).sort(() => Math.random() - 0.5)

    const handleGoBack = () => setSelectedCategoryId(null)
    const handleClick = (e) => e.target.innerText === triviaQuestion[counter].correct_answer ?
        (setCounter(counter += 1), setCorrectCounter(correctCounter += 1)) : (setCounter(counter += 1), setIncorrectCounter(incorrectCounter += 1))


    return (
        <section>
                <button onClick={handleGoBack}>Home</button>
            <div>
                {counter === 10 ? (
                    <>
                        {alert(`Correct: ${correctCounter} Incorrect: ${incorrectCounter}`)}
                        {handleGoBack()}
                    </>
                ) : (
                    <div className='trivia-page'>
                        <p>{triviaQuestion[counter].question.replace(/[^a-zA-Z0-9 ?%]/g, '').replace(/quot/g, '"').replace(/039/g, "'")}</p>
                        <div>
                            {random.map((answer, index) => (
                                <div className='answer-buttons'>
                                <button className='button is-danger' key={index} onClick={handleClick}>{answer.replace(/[^a-zA-Z0-9 ?%]/g, '').replace(/quot/g, '"').replace(/039/g, "'")}</button>
                                </div>
                            ))}
                        </div>
                        <div className='answer-counters'>
                        <p>Correct answers: {correctCounter}</p>
                        <p>Incorrect answers: {incorrectCounter}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
