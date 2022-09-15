const db = require('../../db')

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
	return findById([id]);
}

const remove = (id) =>{
    return db('toppings')
    .where({id})
    .del()
}

const update = (id, changes) => {
    return db('toppings')
    .where({id})
    .update(changes, '*')
}
module.exports = {
    add,
    findById,
	findBy,
    find,
    update, 
    remove
}