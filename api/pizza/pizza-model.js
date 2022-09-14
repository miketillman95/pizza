const db = require('../../db/db')

function find(){
	return db("pizza")
		.select("*")
}

function findBy(filter){
	console.log(filter)
	console.log("in the findBy")
	return db("pizza")
		.select("*")
		.where(filter)
}

function findById(id){
	console.log("in the model findById", id)
	return db("pizza")
		.select("*")
		.where({ id })
		.first()
}

async function add(pizza){
	console.log("in the model add", pizza)
	const [id] = await db("pizza").insert(pizza, "id")
	console.log(id)
	return findById(id);
}

module.exports = {
	find,
	findBy,
	findById,
	add,
}