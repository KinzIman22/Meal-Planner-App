Smart Meal Planner App (React Native)

A modern React Native (Expo) application that allows users to discover meals, view recipes, save favorites, and plan weekly meals using an AI-style suggestion system.

Features
Search meals by name
Browse food categories
View detailed meal recipes
Add and remove favorite meals
Weekly meal planner (Monday to Sunday)
AI-style meal suggestions (Healthy, Protein, Veg, Comfort, Surprise)
Watch YouTube recipe tutorials
Color-coded weekly planner
Bottom tab navigation
AI Feature

The app includes a rule-based AI suggestion system:

Healthy meals based on salad keyword
Protein meals based on chicken keyword
Vegetarian meals based on vegetable keyword
Comfort meals based on pasta keyword
Surprise option using random meal API
Folder Structure
MealPlannerApp
│
├── App.js
├── index.js
│
├── navigation
│   ├── StackNavigator.js
│   ├── TabNavigator.js
│
├── screens
│   ├── HomeScreen.js
│   ├── MealDetailsScreen.js
│   ├── FavoritesScreen.js
│   ├── PlannerScreen.js
│
├── components
│   ├── MealCard.js
│   ├── CategoryCard.js
│   ├── SearchBar.js
│   ├── DayPlannerCard.js
│
├── context
│   ├── MealContext.js
│
├── services
│   ├── api.js
│
├── constants
│   ├── categories.js
│
├── styles
│   ├── colors.js
Screens Overview
HomeScreen
Main landing screen
Search meals using API
Displays categories list
Shows featured meal
AI meal suggestion buttons
Navigation to meal details screen
MealDetailsScreen
Displays full recipe details
Meal image and name
Ingredients list
Step-by-step instructions
Add to favorites
Add to weekly planner
YouTube tutorial link
Calendar-style day selection
FavoritesScreen
Displays saved favorite meals
Remove meals from favorites
Uses global context state
PlannerScreen
Weekly meal planner from Monday to Sunday
Color-coded day layout
Displays assigned meals per day
Uses context for global state
Components
MealCard

Reusable component to display meal information:

Image
Title
Category
Click navigates to details screen
CategoryCard

Displays meal categories:

Used in HomeScreen
Helps filter/search meals
SearchBar

Custom input field:

Used for searching meals
Controlled input component
DayPlannerCard

Used in Planner screen:

Shows day name
Shows assigned meal for that day
API Integration
Uses Axios for API calls
Uses TheMealDB API
Endpoints:
Random meal
Search meals
Meal details
Tech Stack
React Native (Expo)
React Navigation (Stack and Bottom Tabs)
Axios
Context API
JavaScript (ES6+)
StyleSheet
Installation
npm install

npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated

npm install axios

npx expo start
Project Purpose

This project demonstrates:

React Native app development
Component-based architecture
API integration
State management using Context API
Navigation handling
Real-world mobile app structure
