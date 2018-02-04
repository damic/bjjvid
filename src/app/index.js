import React from 'react';
import { StyleSheet, View, TabBarIOS, FlatList, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default () => (
  <View style={styles.container}>
    <FlatList data={[{ key: 'Armbar' }, { key: 'Rear-Naked Choke' }]} renderItem={({ item }) => <Text style={styles.text}>{item.key}</Text>} />
    <TabBarIOS>
      <TabBarIOS.Item title="Moves" />
      <TabBarIOS.Item title="Profile" />
      <TabBarIOS.Item title="Review" />
    </TabBarIOS>
  </View>
);
