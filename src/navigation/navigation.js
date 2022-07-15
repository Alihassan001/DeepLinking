import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import { Home, ResetPassword } from '../screens'
const Stack = createNativeStackNavigator();

export default AppStack = () => {
  return(
  <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='ResetPassword' component={ResetPassword}/>
    </Stack.Navigator>
  )
}