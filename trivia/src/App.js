import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [category, setCategory] = useState([])
  const [questions, setQuestion] = useState([])

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php').then(res => setCategory(res.data.trivia_categories))
  }, [])

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10&category=9').then(res => setQuestion(res.data.results))
  }, [])

  return (
    <div>
      <section className='trivia-container'>
        {category.map((topic) => (
          <div className='button-container'>
            <button>{topic.name}</button>
            <p>{topic.id}</p>
          </div>
        ))}
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
