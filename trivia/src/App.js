import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { requestCategories } from './requests'
import { Categories } from './components/Categories'
import { Questions } from './components/Questions'



function App() {
  const [category, setCategory] = useState([])
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)
  const [questions, setQuestions] = useState([])
  const [url, setUrl] = useState()

  useEffect(() => {
    requestCategories().then(res => setCategory(res.data.trivia_categories))
  }, [])

  useEffect(() => {
    axios.get(url).then(res => setQuestions(res.data.results))
  }, [url])


  return (
    <div>
      <section className='trivia-container'>
        {selectedCategoryId ? (
          <Questions
            selectedCategoryId={selectedCategoryId}
            setSelectedCategoryId={setSelectedCategoryId} />

        ) : (
          <>
            {category.map((topic) => (
              <div className='button-container'>
                <Categories
                  selectedCategoryId={selectedCategoryId}
                  setSelectedCategoryId={setSelectedCategoryId}
                  topicId={topic.id}
                  category={topic.name}
                  setUrl={setUrl} />
              </div>
            ))}
          </>
        )}
      </section>
    </div>
  )
}


export default App;