
'use strict';

import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Splash App Screen</Text>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
});
export default MainScreen;