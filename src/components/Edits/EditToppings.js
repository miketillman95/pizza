import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'



const EditToppings = () => {
const [type, setType] = useState('')
const [deleteType, setDeletetype] = useState('')
const navigate = useNavigate()

const handleAddToppings = async (e) => {
e.preventDefault()
try{
	const res = await axios.post("http://localhost:3010/api/toppings", {type:type})
	console.log(res.data)
	navigate('/owner')
} catch(err){
	console.log(err.response)
}
}



const handleDeleteToppings = async  (id) => {
// if (id != id.type) return alert('This topping does not exist in the Db') or return 404 message from route
	console.log(id)
	try{
		const res = await axios.delete('http://localhost:3010/api/topping' + '/' + id, {type: deleteType})
		console.log(res.data)
		navigate('/owner')
	} catch(err){
		console.log(err.response)
	}

}

return (
	<div className ='edit-topping container'>
		<h2>edit toppings</h2>
		<div>
			<form onSubmit={handleAddToppings}>
				<label>Add topping</label><br/>
				<input 
				required
				type='text'
				onChange={(e) => setType(e.target.value)}
				/>
				<button type='submit'>Add</button>
			</form>
		</div>

		<div>
		<form onSubmit={handleDeleteToppings}>
			<label>delete toppings</label><br/>
			<input 
			required
			type='text'
			onChange={(e) => setDeletetype(e.target.value)}
			/>
			<button type='submit'>Delete</button>
			</form>
		<br/>
		<Link to='/updatetoppings'> Update Toppings</Link>

		</div>
	</div>
)
}

export default EditToppings