import axios from "axios";
import { useState, useEffect } from "react";

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
if (!updatedTopping) return
	const results = await axios.put(apiEndPoint + '/' + toppingsId, {type: updatedTopping})
	console.log(results)
	const toppingClone = [...toppings]
	const index = toppingClone.indexOf(toppings)
	toppingClone[index] = {...toppings}
	setToppings(toppingClone)
	window.location.reload()
};

const handleDeleteToppings = async  (id) => {
	// if (id != id.type) return alert('This topping does not exist in the Db') or return 404 message from route
		console.log(id)
		try{
			const res = await axios.delete( apiEndPoint + '/' + id)
			console.log(res.data)
			// navigate('/owner')
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
								<button type='button' onClick={() => handleUpdateToppings(toppings.id, topping)}>Update </button>
								<button type= 'button' onClick={() => handleDeleteToppings(toppings.id)}> Delete </button>
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