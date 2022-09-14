/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('toppings').del()
  await knex('toppings').insert([
    {id: 1, pepperoni: 9},
    {id: 2, tomato: 9},
    {id: 3, onions: 9}
  ]);
};
