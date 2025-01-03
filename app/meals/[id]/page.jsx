export default function MealDetailPage({ params }) {
  const mealId = params.id;
  return (
    <>
      <h1>Meal Detail Page</h1>
      <p>Meal ID: {mealId}</p>
    </>
  );
}