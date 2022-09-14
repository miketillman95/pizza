const db = require('../../db/db')

function find(){
	return db("toppings")
		.select("*")
}

function findBy(filter){
	console.log(filter)
	console.log("in the findBy")
	return db("toppings")
		.select("*")
		.where(filter)
}

function findById(id){
	console.log("in the model findById", id)
	return db("toppings")
		.select("*")
		.where({ id })
		.first()
}

async function add(toppings){
	console.log("in the model add", toppings)
	const [id] = await db("toppings").insert(toppings, "id")
	console.log(id)
	return findById(id);
}

module.exports = {
	find,
	findBy,
	findById,
	add,
}