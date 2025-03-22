import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AnaSayfa, AnaSayfa2, Login1} from '../Screens';
import {RoutesName} from '../config';
import buttomTabRoutess from './buttomTabRoutess';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName={RoutesName.ANASAYFA}>
      <Stack.Screen
        name="seyahat"
        component={buttomTabRoutess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RoutesName.ANASAYFA}
        component={AnaSayfa}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login2"
        component={buttomTabRoutess}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default StackRoutes;
