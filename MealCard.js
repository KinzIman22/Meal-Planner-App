import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import colors from '../styles/colors';

export default function MealCard({
  item,
  onPress
}) {

  return (

    <TouchableOpacity
      onPress={onPress}
    >

      <View style={styles.card}>

        <Image
          source={{
            uri: item.strMealThumb
          }}
          style={styles.image}
        />

        <View style={styles.info}>

          <Text
            style={styles.title}
            numberOfLines={1}
          >
            {item.strMeal}
          </Text>

          <Text style={styles.subtitle}>
            {item.strCategory || 'Meal'}
          </Text>

        </View>

      </View>

    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({

  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginVertical: 8,
    borderRadius: 12,
    elevation: 4,
    overflow: 'hidden'
  },

  image: {
    width: 90,
    height: 90
  },

  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'center'
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black
  },

  subtitle: {
    fontSize: 13,
    color: colors.gray,
    marginTop: 4
  }
});
