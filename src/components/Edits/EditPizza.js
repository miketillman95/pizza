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


const handleAddNewPizza = async (e) => {
	e.preventDefault()
	console.log(type, pizzaToppings )
	try{
	const res = await axios.post("http://localhost:3010/api/pizza", {type:type, toppings: pizzaToppings })

	console.log(res)


	navigate('/chef')
} catch(err){

	console.log(err.response)
}
}




const handleDeletePizza = async  (id,e) => {
e.preventDefault()
console.log(e)


// try{
// 	const res = await axios.delete(`http://localhost:3010/api/pizza/${id}`, {type: deleteType})
// 	console.log(res.data)
// 	navigate('/chef')
// } catch(err){

// 	setError(console.log(err.response))
// }

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
		<form onSubmit={handleDeletePizza}>
			<label>delete pizza</label><br/>
			<input 
			required
			type='text'
			value={deleteType}
			onChange={(e) => setDeletetype(e.target.value)}
			/>
			<button onClick={() => handleDeletePizza()} type='submit'>Delete</button>
		</form>
	</div>

	{/* <div>
	<form onSubmit={handleAddPizza}>
	<label>Add toppings</label><br/>


	<input
	required
	type='text'
	value={toppings}
	onChange={(e) => setToppings(e.target.value)}
	/>
	<button>Add</button>
	</form>
	</div>
	<br/> */}

	<br/>
	<Link to='/updatepizza'> Update Pizza</Link>

</div>
)
}

export default EditPizza