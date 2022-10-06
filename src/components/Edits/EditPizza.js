import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'



const EditPizza = () => {
const [type, setType] = useState('')
const [deleteType, setDeletetype] = useState('')
const [pizzaToppings, setPizzaToppings] = useState('')
const [error, setError] = useState('')
const navigate = useNavigate()
const apiEndPoint ="http://localhost:3010/api/pizza"


const handleAddNewPizza = async (e) => {
	e.preventDefault()
	console.log(type, pizzaToppings )
	try{
	const res = await axios.post(apiEndPoint, {type:type, toppings: pizzaToppings })

	console.log(res)


	navigate('/chef')
} catch(err){

	console.log(err)
}
}




const handleDeletePizza = async  ( pizzaId, deleteTypeOfPizza) => {
console.log(pizzaId)


try{
	const res = await axios.delete(apiEndPoint, + "/" + pizzaId, {type: deleteTypeOfPizza})
	console.log(res.data)
	navigate('/chef')
} catch(err){

	setError(console.log(err.data))
}

}

return (
<div className ='edit-pizza-container'>
	<h2>Create new pizza</h2>
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
			<button type='submit'>submit Pizza</button>
		</form>
	</div>

	<div className='delete-pizza'>
		<form>
		<label>delete pizza</label><br/>
		<input 
		required
		type='text'
		onChange={(e) => setDeletetype(e.target.value)}
		/>
		<button onClick={(e) => handleDeletePizza(e.id, deleteType)} type='button'>Delete</button>
		</form>
	</div>

	<br/>
	<Link to='/updatepizza'> Update Pizza</Link>

</div>
)
}

export default EditPizza