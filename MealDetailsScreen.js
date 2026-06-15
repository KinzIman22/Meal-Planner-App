import React, { useContext } from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { MealContext } from '../context/MealContext';
import colors from '../styles/colors';

export default function MealDetailsScreen({ route }) {

  const { meal } = route.params;
  const { addFavorite, addMealToDay } = useContext(MealContext);

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  
  const dayColors = {
    Monday: '#FF6B6B',
    Tuesday: '#4D96FF',
    Wednesday: '#6BCB77',
    Thursday: '#FFD93D',
    Friday: '#845EC2',
    Saturday: '#FF9671',
    Sunday: '#00C9A7'
  };

  
  const getIngredients = () => {
    let list = [];

    for (let i = 1; i <= 20; i++) {
      let ing = meal[`strIngredient${i}`];
      if (ing) list.push(ing);
    }

    return list;
  };

 
  const getSteps = () => {
    if (!meal.strInstructions) return [];

    return meal.strInstructions
      .split('.')
      .filter(step => step.trim().length > 0);
  };

  return (
    <ScrollView style={styles.container}>

     
      <Image
        source={{ uri: meal.strMealThumb }}
        style={styles.image}
      />

    
      <Text style={styles.title}>
        {meal.strMeal}
      </Text>

      <Text style={styles.sub}>
        {meal.strCategory} | {meal.strArea}
      </Text>

      <Text style={styles.heading}>Ingredients</Text>

      {getIngredients().map((item, index) => (
        <Text key={index}>• {item}</Text>
      ))}

    
      <Text style={styles.heading}>Instructions</Text>

      {getSteps().map((step, index) => (
        <View key={index} style={styles.stepCard}>

          <Text style={styles.stepNumber}>
            Step {index + 1}
          </Text>

          <Text style={styles.stepText}>
            {step.trim()}
          </Text>

        </View>
      ))}

     
      <TouchableOpacity
        style={styles.favoriteBtn}
        onPress={() => addFavorite(meal)}
      >
        <Text style={styles.btnText}>
           Add to Favorites
        </Text>
      </TouchableOpacity>

    
      <Text style={styles.headingBig}>
        📅 Weekly Planner
      </Text>

      <View style={styles.calendarGrid}>

        {days.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dayCard,
              { backgroundColor: dayColors[day] }
            ]}
            onPress={() => addMealToDay(day, meal)}
          >
            <Ionicons name="calendar" size={20} color="#fff" />

            <Text style={styles.dayText}>
              {day}
            </Text>
          </TouchableOpacity>
        ))}

      </View>

    
      {meal.strYoutube && (
        <TouchableOpacity
          style={styles.youtubeBtn}
          onPress={() => Linking.openURL(meal.strYoutube)}
        >
          <Ionicons name="logo-youtube" size={26} color="red" />

          <Text style={styles.youtubeText}>
            Watch Video Tutorial
          </Text>
        </TouchableOpacity>
      )}

    </ScrollView>
  );
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 15
  },

  image: {
    width: '100%',
    height: 250,
    borderRadius: 15
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },

  sub: {
    color: 'gray',
    marginBottom: 10
  },

  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15
  },

  headingBig: {
    fontSize: 20,
    fontWeight: '900',
    marginTop: 20,
    marginBottom: 10
  },

  text: {
    marginTop: 5,
    lineHeight: 20
  },

  favoriteBtn: {
    backgroundColor: '#FFB100',
    padding: 12,
    marginTop: 15,
    borderRadius: 12
  },

  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  stepCard: {
    backgroundColor: '#f8f8f8',
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#4CAF50'
  },

  stepNumber: {
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 5,
    fontSize: 14
  },

  stepText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333'
  },

  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

  dayCard: {
    width: '48%',
    padding: 12,
    borderRadius: 12,
    marginVertical: 6,
    alignItems: 'center'
  },

  dayText: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5
  },

  youtubeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    padding: 10
  },

  youtubeText: {
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 8,
    fontSize: 15
  }

});