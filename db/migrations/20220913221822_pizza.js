
exports.up = function(knex) {
    return knex.schema.createTable('pizza', tbl => {
      tbl.increments("id");
      tbl.string('pepperoni_pizza', 255)
      tbl.string('veggie_pizza', 255)
      tbl.string('meat_pizza', 255)
      tbl.timestamps(true, true)
  
    })
  };


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('toppings');

};
