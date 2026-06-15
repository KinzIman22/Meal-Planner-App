import React, {
  useContext
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import { MealContext } from '../context/MealContext';
import DayPlannerCard from '../components/DayPlannerCard';

export default function PlannerScreen() {

  const { plannerMeals } =
    useContext(MealContext);

  const days = Object.keys(plannerMeals);

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        📅 Weekly Planner
      </Text>

      {days.map((day) => (
        <DayPlannerCard
          key={day}
          day={day}
          meal={plannerMeals[day]}
        />
      ))}

    </ScrollView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 15
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  }

});
