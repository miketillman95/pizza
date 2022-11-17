import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'
import Button from 'react-bootstrap/Button';




const EditToppings = () => {
const [type, setType] = useState('')
const navigate = useNavigate()
const apiEndPoint ="https://this-is-b.azurewebsites.net/api/toppings"

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
				<Button variant='success'  size='sm' type='submit'>Add</Button>
			</form>
		</div>
		<br/>
		<Link style={{color: 'black'}} to='/updatetoppings'> <Button variant='secondary' size='sm' type='submit'>Update Toppings</Button></Link>
	</div>
)
}

export default EditToppings