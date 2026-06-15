import React from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

import colors from '../styles/colors';

export default function CategoryCard({
  item,
  onPress
}) {

  return (

    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >

      <Text style={styles.text}>
        {item.name}
      </Text>

    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10
  },

  text: {
    color: colors.white,
    fontWeight: 'bold'
  }

});

