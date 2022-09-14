import React from 'react'
import { useEffect } from 'react'

const Owner = () => {

  const loadToppings = () => {
    fetch("http://localhost:3010/api/toppings")
          .then((res) => res.json())
          .then((data) => console.log(data))
  }

  useEffect(()=> {
    loadToppings()
  }, [])

  return (
    <div>
      <div className='Toppings-header'>
        <h1> Pizza</h1>
        </div>
    </div>
  )
}

export default Owner