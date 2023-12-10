import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import Home from './screens/Home';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      {/* <StatusBar /> */}
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Home />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
