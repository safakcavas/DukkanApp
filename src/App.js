import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Detail from './pages/Details/Detail';
import Products from './pages/Products/Products';

const Stack= createNativeStackNavigator();

function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='ProductScreen' component={Products}/>
    <Stack.Screen name='DetailScreen' component={Detail}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
};

export default App;