
exports.up = function(knex) {
    return knex.schema.createTable('pizza', tbl => {
      tbl.increments("id");
      tbl.string('type', 128).notNullable()
      tbl.integer('amount', 100).notNullable()
      tbl.boolean('buy_more').notNullable()
      tbl.timestamps(true, true)
  
    })
  };


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pizza');

};
