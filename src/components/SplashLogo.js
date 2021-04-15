import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

//lottie
import LottieView from 'lottie-react-native';

const SplashGif = require('../assets/splash-screen.json');

const SplashLogo = () => {
  return(
    <SafeAreaView >
      <LottieView style={styles.lottieView} source={SplashGif} autoPlay autoSize loop />     
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  lottieView: {
    height: '100%',
    width: '100%'
  },
});

export default SplashLogo;