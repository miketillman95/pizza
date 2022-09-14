/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pizza').del()
  await knex('pizza').insert([
    { type: 'pepperoni', amount: 10, buy_more: false },
    { type: 'supreme', amount: 10, buy_more: false },
    { type: 'veggie', amount: 0, buy_more: true },


  ]);
};
