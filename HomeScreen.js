import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';

import SearchBar from '../components/SearchBar';
import MealCard from '../components/MealCard';
import CategoryCard from '../components/CategoryCard';

import api from '../services/api';
import categories from '../constants/categories';
import colors from '../styles/colors';

export default function HomeScreen({ navigation }) {

  const [search, setSearch] = useState('');
  const [meals, setMeals] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    loadFeaturedMeal();
  }, []);

  const loadFeaturedMeal = async () => {
    try {
      const data = await api.getRandomMeal();
      setFeatured(data || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async () => {
    if (search.trim() === '') {
      setError('Please enter a meal name');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const data = await api.searchMealsAxios(search);
      setMeals(data || []);

    } catch (error) {
      setError('Failed to fetch meals');
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setSearch('');
    setMeals([]);
    setError('');
  };

  const getMealByType = async (type) => {
    try {
      setAiLoading(true);

      let data = [];

      if (type === 'healthy') {
        data = await api.searchMealsAxios('salad');
      }
      else if (type === 'protein') {
        data = await api.searchMealsAxios('chicken');
      }
      else if (type === 'veg') {
        data = await api.searchMealsAxios('vegetable');
      }
      else if (type === 'comfort') {
        data = await api.searchMealsAxios('pasta');
      }
      else {
        data = await api.getRandomMeal();
      }

      const meal = Array.isArray(data) ? data[0] : data;

      if (meal) {
        navigation.navigate('MealDetails', { meal });
      }

    } catch (error) {
      console.log(error);
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        🍽 Smart Meal Planner
      </Text>

    
      <Text style={styles.aiTitle}>
         AI Meal Suggestions
      </Text>

      <View style={styles.aiGrid}>

        <TouchableOpacity style={styles.aiBtn} onPress={() => getMealByType('healthy')}>
          <Text style={styles.aiText}> Healthy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.aiBtn} onPress={() => getMealByType('protein')}>
          <Text style={styles.aiText}> Protein</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.aiBtn} onPress={() => getMealByType('veg')}>
          <Text style={styles.aiText}> Veg</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.aiBtn} onPress={() => getMealByType('comfort')}>
          <Text style={styles.aiText}> Comfort</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.aiBtn} onPress={() => getMealByType('random')}>
          <Text style={styles.aiText}>🎲 Surprise</Text>
        </TouchableOpacity>

      </View>

    
      {featured.length > 0 && (
        <TouchableOpacity
          style={styles.heroCard}
          onPress={() =>
            navigation.navigate('MealDetails', {
              meal: featured[0]
            })
          }
        >
          <Image
            source={{ uri: featured[0].strMealThumb }}
            style={styles.heroImage}
          />

          <View style={styles.heroOverlay}>
            <Text style={styles.heroText}>
              Featured Meal
            </Text>

            <Text style={styles.heroSub}>
              Tap to explore
            </Text>
          </View>
        </TouchableOpacity>
      )}

    
      <SearchBar
        value={search}
        onChangeText={setSearch}
        placeholder="Search Meal..."
      />

      <View style={styles.actionRow}>

        <TouchableOpacity
          style={styles.searchBtn}
          onPress={handleSearch}
        >
          <Text style={styles.searchBtnText}>
            Search
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.clearBtn}
          onPress={clearSearch}
        >
          <Text style={styles.clearText}>
            Clear
          </Text>
        </TouchableOpacity>

      </View>

      {/* CATEGORIES */}
      <Text style={styles.sectionTitle}>
        Categories
      </Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CategoryCard
            item={item}
            onPress={() => setSearch(item.name)}
          />
        )}
      />

      {loading && (
        <ActivityIndicator
          size="large"
          color={colors.primary}
          style={{ marginTop: 15 }}
        />
      )}

    
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : null}

      {meals.length > 0 ? (
        <>
          <Text style={styles.sectionTitle}>
             Results
          </Text>

          <FlatList
            data={meals}
            keyExtractor={(item) => item.idMeal}
            renderItem={({ item }) => (
              <MealCard
                item={item}
                onPress={() =>
                  navigation.navigate('MealDetails', {
                    meal: item
                  })
                }
              />
            )}
            scrollEnabled={false}
          />
        </>
      ) : (
        !loading && (
          <Text style={styles.empty}>
            Search meals or choose a category 👆
          </Text>
        )
      )}

    </ScrollView>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 15,
    backgroundColor: colors.background
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },

  aiTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10
  },

  aiGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10
  },

  aiBtn: {
    width: '48%',
    backgroundColor: '#6C63FF',
    padding: 12,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: 'center'
  },

  aiText: {
    color: 'white',
    fontWeight: 'bold'
  },

  heroCard: {
    height: 180,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15
  },

  heroImage: {
    width: '100%',
    height: '100%'
  },

  heroOverlay: {
    position: 'absolute',
    bottom: 10,
    left: 10
  },

  heroText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },

  heroSub: {
    color: 'white'
  },

  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },

  searchBtn: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 5
  },

  searchBtnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  clearBtn: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5
  },

  clearText: {
    textAlign: 'center',
    fontWeight: 'bold'
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10
  },

  error: {
    color: 'red',
    marginVertical: 10
  },

  empty: {
    textAlign: 'center',
    marginTop: 20,
    color: 'gray'
  }

});