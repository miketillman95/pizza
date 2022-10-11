import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import Button from 'react-bootstrap/Button';




const EditPizza = () => {
const [type, setType] = useState('')
const [pizzaToppings, setPizzaToppings] = useState('')
const navigate = useNavigate()
const apiEndPoint ="http://localhost:3010/api/pizza"


const handleAddNewPizza = async (e) => {
	e.preventDefault()
	console.log(type, pizzaToppings )
	try {
		const res = await axios.post(apiEndPoint, {type:type, toppings: pizzaToppings })
		console.log(res)
		navigate('/chef')
	} catch(err) {
		console.log(err)
	}
}






return (
<div className ='edit-pizza-container'>
	<h2>Pizza Creation</h2>
	<div className='add-edit-pizza'>
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
			<br/>
			<Button variant='secondary' type='submit'>Create New Pizza</Button>
		</form>
	</div>

	<br/>
	<Link  style={{color: 'black'}} to='/updatepizza'><Button variant='secondary' type='submit'>Update Pizza</Button></Link>

</div>
)
}

export default EditPizza