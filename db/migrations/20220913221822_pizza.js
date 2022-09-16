
exports.up = function(knex) {
    return knex.schema.createTable('pizza', tbl => {
      tbl.increments("id");
      // All the way at the finish line and think i was supposed to reference toppings in the other table?
      // and maybe a join table in building the query? So you can tcontrol the pizza and toppings together?
      tbl.string('type', 128).references('toppings.toppings')
      tbl.string('toppings', 100)
      tbl.boolean('buy_more')
      tbl.timestamps(true, true)
  
    })
  };


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pizza');

};
