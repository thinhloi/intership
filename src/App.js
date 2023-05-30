import './App.scss'
import { Button } from './components/Buttons'
import { Quote } from './components/Quote'
import { useState, useEffect } from 'react';
import { MdCached } from "react-icons/md";
import { MdArrowRightAlt } from "react-icons/md";

function App() {
  const [quotes, setQuotes] = useState([])
  const [list, setList] = useState(true)
  const [author, setAuthor] = useState(null)

  useEffect(() => {
    if (quotes.length === 0 && !author)
      fetch('https://quote-garden.onrender.com/api/v3/quotes/random')
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json.data)
      })
  },[quotes,author])

  useEffect(() => {
    if (author)
      fetch('https://quote-garden.onrender.com/api/v3/quotes/?author=' + author)
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json.data)
      })
  },[author])

  const handleRandom= () => {
    setQuotes([])
    setAuthor(null)
    setList(true)
  }
  return (
    <>
      <div className='header'>
        <Button text='random'
          endIcon={<MdCached />}
          onClick={handleRandom}
        />
      </div>
      <div className='quote-card'>
        {author && (
          <div className='author-header'>
            <p>{author}</p>
          </div>
        )}
        <div className='quote-card-body'>
          {quotes.map((item, index) => (
            <>
              <Quote key={index}
                text={item.quoteText}
              />
              {list && (
                <button
                  type='button'
                  className='btn-quote'
                  onClick={() => {
                    setQuotes([]);
                    setAuthor(item.quoteAuthor);
                    setList(false);
                  }} >
                  <div className='btn-group'>
                    <div className='desc-group'>
                      <span className='quote-author'>
                        {item.quoteAuthor}
                      </span>
                      <span className='quote-genre'>
                        {item.quoteGenre}
                      </span>
                    </div>
                    <div className='btn-icon'>
                      {<MdArrowRightAlt size={40} />}
                    </div>
                  </div>
                </button>
              )}
            </>
          ))}
        </div>
      </div >
    </>
  )
}

export default App;