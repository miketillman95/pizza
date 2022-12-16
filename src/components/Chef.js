import React from 'react'
import { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import axios from 'axios'

import {pizzaData} from '../Data/pizzaData'


export default function Owner () {
const [pizza, setPizza] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [type, setType] = useState('')
const [pizzaToppings, setPizzaToppings] = useState('')
const [checkType, setCheckType] = useState ([])
const navigate = useNavigate()
const localHost = "http://localhost:4000/api/pizza"
const apiEndPoint = "https://this-is-b.azurewebsites.net/api/pizza"

useEffect(() => {
	fetch(localHost)
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

// checking for pizza in DB function
async function  getPizza() {
	const {data: res} = await axios.get(localHost, {type:type})
	console.log('api res', res)
	setCheckType(res)
	const duplicates = checkType.filter((item, index) => index !== checkType.indexOf(item));
	console.log('duplicates', duplicates)
	return duplicates
}


const handleAddNewPizza = async (e) => {
	e.preventDefault()
		if (getPizza() === true ){
		console.log(getPizza)
		return alert('This pizza name already exist')

		} else {
			try {
				const res = await axios.post(localHost, {type:type, toppings: pizzaToppings })
				console.log(res)
				// navigate('/chef')
			} catch(err) {
				console.log(err)
			}

		}
}


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
	<form onSubmit={handleAddNewPizza}>
			<label>Add pizza name</label><br/>
				<input 
				required
				type='text'
				onChange={(e) => setType(e.target.value)}
				/>
				<br/>
				<label>Add toppings to pizza</label><br/>
				<input 
				required
				type='text'
				onChange={(e) => setPizzaToppings(e.target.value)}
				/>
				<br/>
				<Button variant='success' type='submit'>Create New Pizza</Button>
		</form>
		<Link  style={{color: 'black'}} to='/updatepizza'><Button variant='secondary' type='submit'>Update Pizza</Button></Link>

	
</div>
);
}