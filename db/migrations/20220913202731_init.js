
exports.up = function(knex) {
  return knex.schema.createTable('toppings', tbl => {
    tbl.increments("id");
    tbl.integer('pepperoni')
    tbl.integer('tomato')
    tbl.integer('onions')
    tbl.timestamps(true, true)

  })
};


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('toppings');

  
};
