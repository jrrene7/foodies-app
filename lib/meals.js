import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getAllMeals() {
  await new Promise(resolve => setTimeout(resolve, 5000)); // Simulate slow database query
  // throw new Error('Failed to fetch meals'); // Simulate error
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}