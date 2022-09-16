import React from 'react'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

export default function Owner () {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3010/api/pizza")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((pizza) => {
        setPizza(pizza);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setPizza(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

 


  return (
    <div className="Owner">
      <h1>Type of pizzas</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post pizza - ${error}`}</div>
      )}
      <div className='pizza-display'>
      <ul>
        {pizza &&
          pizza.map(({ id, type, toppings }) => (
            <li key={id}>
              <h3>{type}</h3>
              <h3>{toppings}</h3>

            </li>
          ))}
      </ul>
      </div>
      <br/>
             <Link to='/editpizza'><button>Edit the pizza</button>
             </Link> 
          
        
    </div>
  );
}