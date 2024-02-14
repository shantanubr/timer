import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Timer } from './src/Timer';
import { SafeAreaView, ScrollView, View, useColorScheme } from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior={'automatic'}
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Timer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
