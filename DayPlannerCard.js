import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import colors from '../styles/colors';

export default function DayPlannerCard({
  day,
  meal
}) {

  return (

    <View style={styles.card}>

      <Text style={styles.day}>
        {day}
      </Text>

      <Text style={styles.meal}>
        {meal
          ? meal.strMeal
          : 'No Meal Selected'}
      </Text>

    </View>

  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
    elevation: 3
  },

  day: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary
  },

  meal: {
    marginTop: 5,
    color: colors.gray
  }

});

