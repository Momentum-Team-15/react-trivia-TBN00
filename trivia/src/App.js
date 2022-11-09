import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { requestCategories } from './requests'
import { Categories } from './components/Categories'
import { Questions } from './components/Questions'



function App() {
  const [category, setCategory] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [questions, setQuestion] = useState([])
  const [url, setUrl] = useState()

  useEffect(() => {
    requestCategories().then(res => setCategory(res.data.trivia_categories))
  }, [])

  useEffect(() => {
    axios.get(url).then(res => setQuestion(res.data.results))
  }, [url])


  return (
    <div>
      <section className='trivia-container'>
        {category.map((topic) => (
          <div className='button-container'>
            <Categories
              topicId={topic.id}
              category={topic.name}
              setUrl={setUrl}/>
          </div>
        ))}
        {console.log(url)}
      </section>

      <section className='question-container'>
        {questions.map((ques) => (
          <div>
            <Questions
              inquiry={ques.question}
              correct={ques.correct_answer}
              incorrect={ques.incorrect_answers} />
          </div>
        ))}
      </section>
    </div>
  );
}


export default App;