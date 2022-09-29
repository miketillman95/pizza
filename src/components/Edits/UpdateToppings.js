import axios from "axios";
import { useState, useEffect } from "react";

const UpdatePizza = () => {
const [toppings, setToppings] = useState([]);

const apiEndPoint = "http://localhost:3010/api/toppings";
useEffect(() => {
	const getToppings = async () => {
		const { data: res } = await axios.get(apiEndPoint, {type:toppings});
		setToppings(res);
		};
		getToppings();
}, [toppings]);


const handleUpdateToppings = async (toppings) => {
    toppings.type = "Updated";
    await axios.put(apiEndPoint + "/" + toppings.id);
    const toppingsClone = [...toppings];
    const index = toppingsClone.indexOf(toppings);
    toppingsClone[index] = { ...toppings };
    setToppings(toppingsClone);
};



if (toppings.length === 0) return <h2> there are no toppings in the Database </h2>;
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
				{toppings.map((update) => (
					<tr>
						<td> {update.type} </td>
						<td>
							<form>
								<input
								required
								type='text'
								>
								</input>
								<button type='button'
								onClick={() => handleUpdateToppings(toppings)}>Update </button>
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