import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import '../../index.css'





const EditPizza = () => {
const [type, setType] = useState('')
const [pizzaToppings, setPizzaToppings] = useState('')
const [checkType, setCheckType] = useState ([])
const navigate = useNavigate()
const apiEndPoint ="http://localhost:3010/api/pizza"


async function  getPizza() {
	const {data: res} = await axios.get(apiEndPoint, {type:type})
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
				const res = await axios.post(apiEndPoint, {type:type, toppings: pizzaToppings })
				console.log(res)
				// navigate('/chef')
			} catch(err) {
				console.log(err)
			}

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
				<Button variant='success' type='submit'>Create New Pizza</Button>
		</form>
	</div>

	<br/>
	<Link  style={{color: 'black'}} to='/updatepizza'><Button variant='secondary' type='submit'>Update Pizza</Button></Link>

</div>
)
}

export default EditPizza