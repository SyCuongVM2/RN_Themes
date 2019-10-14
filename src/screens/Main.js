import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { withTheme } from '../core/themeProvider';

const MainScreen = ({ theme }) => {
  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.text, { color: theme.color }]}>MAIN PART</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
});

export default withTheme(MainScreen);