
exports.up = function(knex) {
  return knex.schema.createTable('toppings', tbl => {
    tbl.increments("id");
    tbl.string('pepperoni', 255)
    tbl.string('tomato', 255)
    tbl.string('onions', 255)
    tbl.timestamps(true, true)

  })
};


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('toppings');

  
};
