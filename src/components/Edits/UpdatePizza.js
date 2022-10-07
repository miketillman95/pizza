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
}, [pizzas]);



const handleUpdatePizza = async (pizzaId, updatedtypeOfPizza) => {
if(!updatedtypeOfPizza) return alert('Must enter a pizza')
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

const handleDeletePizza = async  (id) => {
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
										type='text'
										onChange={(e) => setTypeOfPizza(e.target.value)}
										/>
									<button type= 'button' onClick={() => handleUpdatePizza(pizza.id, typeOfPizza)}> Update </button>
									<button type= 'button' onClick={() => handleDeletePizza(pizza.id)}> Delete </button>
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