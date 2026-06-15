import React, {
  createContext,
  useState
} from 'react';

export const MealContext = createContext();

const MealProvider = ({ children }) => {

  const [favorites, setFavorites] = useState([]);

  const [plannerMeals, setPlannerMeals] = useState({
    Monday: null,
    Tuesday: null,
    Wednesday: null,
    Thursday: null,
    Friday: null,
    Saturday: null,
    Sunday: null,
  });


  const addFavorite = (meal) => {

    const exists = favorites.find(
      item => item.idMeal === meal.idMeal
    );

    if (!exists) {
      setFavorites([
        ...favorites,
        meal
      ]);
    }
  };

  

  const removeFavorite = (id) => {

    setFavorites(
      favorites.filter(
        item => item.idMeal !== id
      )
    );
  };


  const addMealToDay = (day, meal) => {

    setPlannerMeals(prev => ({
      ...prev,
      [day]: meal
    }));
  };

  return (
    <MealContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        plannerMeals,
        addMealToDay
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

export default MealProvider;