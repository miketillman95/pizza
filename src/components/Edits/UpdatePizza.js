import axios from "axios";
import { useState, useEffect } from "react";

const UpdatePizza = () => {

const [pizzas, setPizzas] = useState([]);
const [typeOfPizza, setTypeOfPizza] = useState("")

const apiEndPoint = "http://localhost:3010/api/pizza";
	useEffect(() => {
	const getPizza = async () => {
		const { data: res } = await axios.get(apiEndPoint, {type:pizzas});
		setPizzas(res);
		};
		getPizza();
	}, []);



const handleUpdatePizza = async (pizzaId, updatedtypeOfPizza) => {
if(!updatedtypeOfPizza) return
    console.log(pizzas.id)
	console.log(pizzaId)
    const results = await axios.put(apiEndPoint + "/" + pizzaId, {type: updatedtypeOfPizza});
	console.log(results)
    const pizzaClone = [...pizzas];
    const index = pizzaClone.indexOf(pizzas);
    pizzaClone[index] = { ...pizzas };
    setPizzas(pizzaClone);
	window.location.reload();
	

};



if (pizzas.length === 0) return <h2> Pizzas are loading or if problem consist server issue </h2>;
return (
	<>
		<div className="container">
			<table className="table">
				<thead>
					<tr>
					<th>type</th>
					<th>Update</th>
					</tr>
				</thead>
				<tbody>
						{pizzas.map((pizza) => (
						<tr>
							<td> {pizza.type} </td>
								<td>
									<form>
										<input
										required
										type='text'
										onChange={(e) => setTypeOfPizza(e.target.value)}
										/>
									<button type= 'button' onClick={() => handleUpdatePizza(pizza.id, typeOfPizza)}> Update </button>
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