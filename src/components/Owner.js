import React from 'react'
import { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import axios from 'axios'


export default function Owner () {
const [toppings, setToppings] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [type, setType] = useState('')
const navigate = useNavigate()
const apiEndPoint ="https://this-is-b.azurewebsites.net/api/toppings"


useEffect(() => {
	fetch(apiEndPoint)
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

const handleAddToppings = async (e) => {
	e.preventDefault()
	try{
		const res = await axios.post(apiEndPoint, {type:type})
		console.log(res.data)
		navigate('/owner')
	} catch(err){
		console.log(err.response)
	}
	}




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
	<form onSubmit={handleAddToppings}>
				<label>Add topping</label><br/>
				<input 
				required
				type='text'
				onChange={(e) => setType(e.target.value)}
				/>
				<Button variant='success'  size='sm' type='submit'>Add</Button>
			</form>
	<Link to='/updatetoppings'><Button variant='secondary'>Update toppings</Button></Link> 
</div>
);
}
