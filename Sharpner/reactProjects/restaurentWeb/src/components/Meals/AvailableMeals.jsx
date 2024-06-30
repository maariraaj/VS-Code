import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Fish Curry',
    description: 'Finest fish and veggies',
    price: 250,
  },
  {
    id: 'm2',
    name: 'Butter Chicken',
    description: 'Tastiest Chicken with butter!',
    price: 300,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 200,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 150,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />);

  return (
    <section className={classes.meals}>
      <Card>{mealsList}</Card>
    </section>
  )
}

export default AvailableMeals