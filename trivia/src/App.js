import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

let triviaUrl = 'https://opentdb.com/api.php?amount=10&category='

function App() {
  const [category, setCategory] = useState([])
  const [questions, setQuestion] = useState([])
  const [url, setUrl] = useState ()

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php').then(res => setCategory(res.data.trivia_categories))
  }, [])

  useEffect(() => {
    axios.get(url).then(res => setQuestion(res.data.results))
  }, [url])

  return (
    <div>
      <section className='trivia-container'>
        {category.map((topic) => (
          <div className='button-container'>
            <button onClick={() => setUrl(triviaUrl + topic.id)}>{topic.name}</button>
            <p>{topic.id}</p>
          </div>
        ))}
        {console.log(url)}
      </section>

      <section className='question-container'>
        {questions.map((qa)=> (
            <div>
              <h3>{qa.question}</h3>
              <button>{qa.correct_answer}</button>
              <button>{qa.incorrect_answers}</button>
            </div>
        ))}
      </section>
    </div>
  );
}


export default App;