import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AnaSayfa, AnaSayfa2, BizeUlasin, Hakkimizda, Hamburger, KullanımKilavuzu, Login1, Login2, SSSS} from '../Screens';
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
      <Stack.Screen
        name="kayitOl"
        component={Login2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="back"
        component={buttomTabRoutess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="go"
        component={Hamburger}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="back2"
        component={Hamburger}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="goHakkim"
        component={Hakkimizda}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="goBizeUlasin"
        component={BizeUlasin}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="goSSS"
        component={SSSS}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="goKilavuz"
        component={KullanımKilavuzu}
        options={{headerShown: false}}
      />

    </Stack.Navigator>
    
  );
};
export default StackRoutes;
