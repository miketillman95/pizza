import axios from "axios";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';


const UpdatePizza = () => {

const [pizzas, setPizzas] = useState([]);
const [typeOfPizza, setTypeOfPizza] = useState("")
const [toppings, setToppings] = useState("")
const [typeOfToppings, setTypeOfToppings] = useState('')


const apiEndPoint = "http://localhost:3010/api/pizza";

useEffect(() => {
	const getPizza = async () => {
	const { data: res } = await axios.get(apiEndPoint, {type:pizzas});
	setPizzas(res);
	};
	const getToppings = async () => {
		const { data: res } = await axios.get(apiEndPoint, {toppings:toppings});
		setToppings(res);
		};
	getToppings()
	getPizza();
}, [pizzas, toppings]);


const handleUpdateToppings = async (toppingsId, updatedTopping) => {
	if (!updatedTopping) return alert('Must enter a Topping')
		const results = await axios.put(apiEndPoint + '/' + toppingsId, {toppings: updatedTopping})
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
	console.log(id)
	try{
		const res = await axios.delete( apiEndPoint + '/' + id)
		console.log(res.data)
		
	} catch(err){
		console.log(err.response)
	}

}



if (pizzas.length === 0) return <h2> Pizzas are loading or if problem consist server issue </h2>;
return (
	<>
		<div className="pizza-container">
			<table class="table">
				<thead>
					<tr>
					<th scope='col'>Type of pizza</th>
					<th scope='col'>Update the pizza</th>
					</tr>
				</thead>
				<tbody>
						{pizzas.map((pizza) => (
						<tr scope='row'>
							<td> {pizza.type} </td>
								<td>
									<form>
										<input
										type='text'
										onChange={(e) => setTypeOfPizza(e.target.value)}
										/>
									<Button variant= 'secondary' type= 'Button' onClick={() => handleUpdatePizza(pizza.id, typeOfPizza)}> Update </Button>{' '}
									<Button variant= 'danger' type= 'Button' onClick={() => handleDeletePizza(pizza.id)}> Delete </Button>
									</form>
								</td>
						</tr>
						))}
				</tbody>
			</table>
		</div>
		<br/>
		<br/>
		<div className="toppings-container">
			<table className="table">
				<thead>
					<tr>
					<th>Type of pizza</th>
					<th>The toppings</th>
					<th>Update the toppings </th>
					</tr>
				</thead>
				<tbody>
						{toppings.map((pizza) => (
						<tr>
							<td> {pizza.type} </td>
							<td> {pizza.toppings} </td>
								<td>
									<form>
										<input
										type='text'
										onChange={(e) => setTypeOfToppings(e.target.value)}
										/>
										<Button variant= 'secondary' size= 'sm' type= 'Button' onClick={() => handleUpdateToppings(pizza.id, typeOfToppings)}> Update </Button>{' '}
										<Button variant= 'danger' size= 'sm'type= 'Button' onClick={() => handleDeleteToppings(pizza.id)}> Delete </Button>
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