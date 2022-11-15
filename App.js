/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './components/WelcomeScreen';
import Login from './components/Auth/LoginScreen';
import Register from './components/Auth/RegisterScreen';
import Home from './components/Home/HomeScreen';
import Account from './components/Account/AccountScreen';
import AddFriends from './components/Friends/AddFriendsScreen';
import MapScreen from './components/Map/MapScreen';
import BasketTeam from './components/Basket/TeamScreen';
import BasketMatch from './components/Basket/Match';
import Profile from './components/Profile/ProfileScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return(
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Register" component={Register}/>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
          <Stack.Screen name="Account" component={Account}/>
          <Stack.Screen name="Ajouter amis" component={AddFriends}/>
          <Stack.Screen name="Carte" component={MapScreen}/>
          <Stack.Screen name='BasketTeam' component={BasketTeam}/>
          <Stack.Screen name='basketMatch' component={BasketMatch} options={{headerBackVisible: true, headerTitle:'Match'}}/>
          <Stack.Screen name='profile' component={Profile}/>



        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default App;
