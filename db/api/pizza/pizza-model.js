const db = require('../../db')

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

const remove = (id) =>{
    return db('pizza')
    .where({id})
    .del()
}

const update = (id, changes) => {
    return db('pizza')
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
