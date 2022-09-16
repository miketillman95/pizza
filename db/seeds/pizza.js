/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pizza').del()
  await knex('pizza').insert([
    { type: 'pepperoni', toppings: 'pepperoni', buy_more: false },
    { type: 'supreme', toppings: 'tomato onion peppers sausage garlic', buy_more: false },
    { type: 'veggie', toppings: 'tomato onion peppers', buy_more: true },


  ]);
};
