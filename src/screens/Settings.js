import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { withTheme } from '../core/themeProvider';

const SettingsScreen = ({ theme, themes, setTheme }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setTheme(item.key)}>
      <View style={[styles.container, { backgroundColor: item.backgroundColor }]}>
        <Text style={[styles.headline, { color: theme.backgroundColor }]}>{item.key}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList 
      style={styles.container}
      ListHeaderComponent={
        <Text style={[styles.headline, { color: theme.backgroundColor }]}>Choose your theme:</Text>
      }
      data={themes}
      renderItem={renderItem}
    />
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headline: {
    marginTop: 60,
    marginBottom: 20,
    marginLeft: 20,
    fontWeight: '200',
    fontSize: 24,
  },
  itemContainer: {
    height: 100,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  itemText: { fontWeight: 'bold' },
});

export default withTheme(SettingsScreen);