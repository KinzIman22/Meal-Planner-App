import axios from 'axios';

const BASE_URL =
  'https://www.themealdb.com/api/json/v1/1';


const searchMealsAxios = async (
  searchText
) => {

  try {

    const response =
      await axios.get(
        `${BASE_URL}/search.php?s=${searchText}`
      );

    return response.data.meals;

  } catch (error) {

    console.log(error);
    throw error;
  }
};



const getRandomMeal = async () => {

  try {

    const response =
      await fetch(
        `${BASE_URL}/random.php`
      );

    const data =
      await response.json();

    return data.meals;

  } catch (error) {

    console.log(error);
    throw error;
  }
};



const getCategories = async () => {

  try {

    const response =
      await fetch(
        `${BASE_URL}/categories.php`
      );

    const data =
      await response.json();

    return data.categories;

  } catch (error) {

    console.log(error);
    throw error;
  }
};



const getMealsByCategory =
  async (category) => {

    try {

      const response =
        await axios.get(
          `${BASE_URL}/filter.php?c=${category}`
        );

      return response.data.meals;

    } catch (error) {

      console.log(error);
      throw error;
    }
  };

export default {
  searchMealsAxios,
  getRandomMeal,
  getCategories,
  getMealsByCategory
};