import React from 'react';
import AppStack from './src/navigation/navigation'
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const linking = {
    prefixes: ['developerali://'],
    config: {
      screens: {
        ResetPassword: {
          path: 'ResetPassword'
        }
      }
    }
  }
return (
    <NavigationContainer linking={linking}>
      <AppStack/>
    </NavigationContainer>
  );
};

export default App;
