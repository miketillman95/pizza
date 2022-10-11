import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

const UpdatePizza = () => {
const [toppings, setToppings] = useState([]);
const [topping, setTopping] = useState("")


const apiEndPoint = "http://localhost:3010/api/toppings";
useEffect(() => {
	const getToppings = async () => {
		const { data: res } = await axios.get(apiEndPoint, {type:toppings});
		setToppings(res);
		};
		getToppings();
}, [toppings]);


const handleUpdateToppings = async (toppingsId, updatedTopping) => {
if (!updatedTopping) return alert('Must enter a Topping')
	const results = await axios.put(apiEndPoint + '/' + toppingsId, {type: updatedTopping})
	console.log(results)
	const toppingClone = [...toppings]
	const index = toppingClone.indexOf(toppings)
	toppingClone[index] = {...toppings}
	setToppings(toppingClone)
	window.location.reload()
};

const handleDeleteToppings = async  (id) => {
		console.log(id)
		try{
			const res = await axios.delete( apiEndPoint + '/' + id)
			console.log(res.data)
		} catch(err){
			console.log(err.response)
		}
	
}


if (toppings.length === 0) return <h2> Toppings are loading or if issue persist check database </h2>;
return (
<>
	<div className="container">
		<table className="table">
			<thead>
				<tr>
				<th>toppings</th>
				<th>Update</th>
				</tr>
			</thead>
			<tbody>
				{toppings.map((toppings) => (
					<tr>
						<td> {toppings.type} </td>
						<td>
							<form>
								<input
								required
								type='text'
								onChange ={(e) => setTopping(e.target.value)}
								/>
								<Button variant = 'secondary'type='Button' onClick={() => handleUpdateToppings(toppings.id, topping)}>Update </Button>{' '}
								<Button variant = 'danger'type= 'Button' onClick={() => handleDeleteToppings(toppings.id)}> Delete </Button>
							</form>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
</>
);
};

export default UpdatePizza;