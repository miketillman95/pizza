import React from 'react'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';


export default function Owner () {
const [pizza, setPizza] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
	fetch("https://this-is-b.azurewebsites.net/api/pizza")
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
		{pizza &&
			pizza.map(({ id, type, toppings }) => (
				<>
					<h2 style={{color: '#9B0B0B'}}key={id}>{type}:</h2>
					<h3 style={{fontFamily: 'fantasty'}}>{toppings}</h3><br/>
				</>
		))}
	</div>
	<br/>
	<Link to='/editpizza'><Button variant='secondary'>Edit the pizza</Button></Link> 
</div>
);
}