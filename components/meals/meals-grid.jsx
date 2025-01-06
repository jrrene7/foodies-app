import styles from "./meals-grid.module.css"
export default function MealsGrid({ meals }) {
  return (
    <ul>
      {meals.map((meal) => (
        <li key={meal.id} className={styles.meals}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
