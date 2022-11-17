import React from 'react'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';


export default function Owner () {
const [toppings, setToppings] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
	fetch("https://this-is-b.azurewebsites.net/api/toppings")
	.then((response) => {
		if (!response.ok) {
			throw new Error(
				`This is an HTTP error: The status is ${response.status}`
			);
	}
	return response.json();
	})
	.then((toppings) => {
		setToppings(toppings);
		setError(null);
		})
	.catch((err) => {
		setError(err.message);
		setToppings(null);
		})
	.finally(() => {
		setLoading(false);
		});
}, []);




return (
<div className="Owner">
	<h1>Pizza Toppings</h1>
	{loading && <div>A moment please...</div>}
	{error && (
		<div>{`There is a problem fetching the post toppings - ${error}`}</div>
	)}
	<div className='pizza-display'>
			{toppings &&
			toppings.map(({ id, type }) => (
				
				<h3 key={id}>{type}</h3>
			))}
	</div>
	<br/>
	<Link to='/edittoppings'><Button variant='secondary'>Edit the toppings</Button></Link> 
</div>
);
}
