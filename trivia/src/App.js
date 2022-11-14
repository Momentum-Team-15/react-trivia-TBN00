import './App.css';
import { useState, useEffect } from 'react';
import { requestCategories } from './requests'
import { Categories } from './components/Categories'
import { Questions } from './components/Questions'



function App() {
  const [category, setCategory] = useState([])
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)

  useEffect(() => {
    requestCategories().then(res => setCategory(res.data.trivia_categories))
  }, [])

  return (
    <div>
      <section className='trivia-container'>
        {selectedCategoryId ? (
          <Questions
            selectedCategoryId={selectedCategoryId}
            setSelectedCategoryId={setSelectedCategoryId} />
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