
exports.up = function(knex) {
  return knex.schema.createTable('toppings', tbl => {
    tbl.increments("id");
    tbl.string('type', 128).notNullable()
    tbl.string('amount').notNullable()
    tbl.boolean('buy_more').notNullable()
    tbl.timestamps(true, true)

  })
};


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('toppings');

  
};
