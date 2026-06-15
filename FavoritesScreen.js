import React, {
  useContext
} from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { MealContext } from '../context/MealContext';
import MealCard from '../components/MealCard';

export default function FavoritesScreen({ navigation }) {

  const {
    favorites,
    removeFavorite
  } = useContext(MealContext);

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        ❤️ Favorites ({favorites.length})
      </Text>

      {favorites.length === 0 ? (
        <Text>No Favorites Yet</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.idMeal}
          renderItem={({ item }) => (
            <View>

              <MealCard
                item={item}
                onPress={() =>
                  navigation.navigate('MealDetails', { meal: item })
                }
              />

              <TouchableOpacity
                onPress={() => removeFavorite(item.idMeal)}
              >
                <Text style={styles.remove}>
                  Remove
                </Text>
              </TouchableOpacity>

            </View>
          )}
        />
      )}

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 15
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },

  remove: {
    color: 'red',
    marginBottom: 10
  }

});

