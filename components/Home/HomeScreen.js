import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, Button, SafeAreaView, ScrollView } from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import LoginScreen from "../Auth/LoginScreen";
import Account from '../Account/AccountScreen';
import Friends from "../Friends/FriendsScreen";
import Map from "../Map/MapScreen";
import Events from "../Event/EventsScreen";
import styles from "../Home/HomeStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { color } from "react-native-elements/dist/helpers";
import Card from "./Card";
import Dashboard from "./Dashboard";



export default function HomeScreen({route, navigation}){
    const {user} = route.params;
    console.log("HOME SCREEN ----> ", user);
    const Tab= createBottomTabNavigator();
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                headerShown:false,
                tabBarIcon: ({ color }) => (
                    <Text>Home</Text>
                    //<MaterialCommunityIcons name="home" color={color} size={26} />
                )
            }}/>
            <Tab.Screen name="Amis" component={Friends} initialParams={{ user: user}} options={{
                tabBarIcon: ({ color }) => (
                    <Text>Amis</Text>
                    //<MaterialCommunityIcons name="car" color={color} size={26} />
                ),
                headerRight: () => (
                    <Button
                      onPress={() => navigation.navigate('Ajouter amis', {user:user})}
                      title="+"
                      color="#000"
                    />
                  ),
            }}/>
             <Tab.Screen name="Nouveau" component={Events} options={{
                tabBarIcon: ({ color }) => (
                    <Text>+</Text>
                    //<MaterialCommunityIcons name="car" color={color} size={26} />
                )
            }}/>
            <Tab.Screen name="Map" component={Map} options={{
                tabBarIcon: ({ color }) => (
                    <Text>Map</Text>
                    //<MaterialCommunityIcons name="car" color={color} size={26} />
                )
            }}/>
            <Tab.Screen name="Account" component={Account} initialParams={{ user: user}} options={{
                unmountOnBlur:true,
                tabBarIcon: ({ color }) => (
                    <Text>Account icon</Text>
                    //<MaterialCommunityIcons name="car" color={color} size={26} />
                ),
                headerShown:false
            }}/>
            
        </Tab.Navigator>
    );
}

function Home({navigation}){
    const [sport, setSport] = React.useState("basket");
    const [color, setColor] = useState('');
    useEffect(() =>{
        navigation.addListener('focus', ()=>{
            const value = AsyncStorage.getItem("theme");
            value.then((res) => isDark(res));
        })
    })
    const isDark = (theme) => {
        setColor(theme);
    }
    return(
        <View style={[color === "dark" ? styles.darkView : styles.lightView, styles.container]}>
            <View style={styles.header}>
                <Text>HOME</Text>
            </View>
            <SafeAreaView>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  style={styles.cards}>
                <Card logo="sports-basketball" color="#ee6730" size={30} name="Basket" sports={{sport, setSport}}/>
                <Card logo="sports-soccer" color="#825736" size={30} name="Foot" sports={{sport, setSport}}/>
                <Card logo="sports-tennis" color="#e8ea72" size={30} name="Tennis" sports={{sport, setSport}}/>
                <Card logo="directions-bike" color="#000000" size={30} name="Velo" sports={{sport, setSport}}/>
            </ScrollView>
            </SafeAreaView>
            <Dashboard sport={sport}/>
        </View>
    )
}

