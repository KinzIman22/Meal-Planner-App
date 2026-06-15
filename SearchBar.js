import React from 'react';

import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';

import colors from '../styles/colors';

export default function SearchBar({
  value,
  onChangeText,
  placeholder = "Search Meals..."
}) {

  return (

    <View style={styles.container}>

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
      />

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    marginVertical: 10
  },

  input: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.lightGray
  }

});
