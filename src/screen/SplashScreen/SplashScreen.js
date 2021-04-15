import React from 'react';
import {View, StyleSheet} from 'react-native';

//logo
import SplashLogo from '../../components';

const SplashScreen = (props) => {
  setTimeout(() => {
    props.navigation.replace('MainScreen');
  }, 3000);

  return(
    <View style={styles.container} >
      <SplashLogo />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});
export default SplashScreen;