
exports.up = function(knex) {
    return knex.schema.createTable('pizza', tbl => {
      tbl.increments("id");
      tbl.string('type', 128)
      tbl.integer('amount', 100)
      tbl.boolean('buy_more')
      tbl.timestamps(true, true)
  
    })
  };


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pizza');

};
