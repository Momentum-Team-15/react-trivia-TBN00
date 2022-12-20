import './App.css';
import 'bulma/css/bulma.min.css'
import { useState, useEffect } from 'react';
import { requestCategories } from './requests'
import { requestQuestions } from './requests';
import { Categories } from './components/Categories'
import { Questions } from './components/Questions'



function App() {
  const [category, setCategory] = useState([])
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)
  const [triviaQuestion, setTriviaQuestion] = useState([])

  useEffect(() => {
    requestCategories().then(res => setCategory(res.data.trivia_categories))
  }, [])

  useEffect(() => {
    requestQuestions(selectedCategoryId).then(res => {
        setTriviaQuestion(res.data.results)
    })
}, [selectedCategoryId])


  return (
    <div>
      <section className='trivia-container'>
        {selectedCategoryId ? (
          <Questions
            selectedCategoryId={selectedCategoryId}
            setSelectedCategoryId={setSelectedCategoryId} 
            triviaQuestion={triviaQuestion} />
        ) : (
          <>
            {category.map((topic, index) => (
              <div className='button-container' key={index}>
                <Categories
                  setSelectedCategoryId={setSelectedCategoryId}
                  topicId={topic.id}
                  category={topic.name} />
              </div>
            ))}
          </>
        )}
      </section>
    </div>
  )
}


export default App;