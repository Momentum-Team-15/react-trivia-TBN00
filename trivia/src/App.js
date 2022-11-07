import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [category, setCategory] = useState([])

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php').then(res => setCategory(res.data.trivia_categories)) 
  }, [])
  console.log(category)
  return (
    <section className='trivia-container'>
      {category.map((group) => (
      <div>
        <h1>{group.name}</h1>
      </div>
      ))}
      </section>
  );
}

export default App;
