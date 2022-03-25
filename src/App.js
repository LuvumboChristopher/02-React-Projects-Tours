import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {

  const [ loading, setLoading]= useState(true)
  const [tours, setTours]= useState([])

  const deleteTour = (id) => {
      const newArrayOfTours = tours.filter(tour=> tour.id !== id)
      setTours(newArrayOfTours)
  }

  const getTours = async()=> {
    try{
      const response = await fetch(url)
      const result = await response.json()
      setTours(result) 
      setLoading(false)
    } catch(err) {
      setLoading(false)
      console.error(err)
    }
  }

  useEffect(()=>{
    getTours()
  },[])

  if(loading){
    return (
      <Loading />
    )
  }

  if(tours.length === 0){
    return (
      <main>
        <h4>No more tours left</h4>
        <button onClick={()=>getTours()} className='btn'>
          Refresh
        </button>
      </main>
    )
  } else {
    return (
      <main>
        <Tours tours={tours} deleteTour={deleteTour} />
      </main>
    )
  }
}

export default App
