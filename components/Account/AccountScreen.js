import React, { useEffect, useState } from "react";
import { Text, View, Image, Button, Switch } from "react-native";
import firebase from "firebase/compat";
import styles from "./AccountStyle";
import logoUrl from "../../assets/user.png";
import { Avatar, Badge } from "react-native-elements";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Account({navigation, route}) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [color, setColor] = useState('');
    const value = AsyncStorage.getItem("theme");
    value.then((res) => isDark(res));

    const isDark = (theme) => {
        if(theme== "light"){
            setIsDarkMode(false)
        }else{
            setIsDarkMode(true);
        }
        setColor(theme);
    }

    const toggleSwitch = () => {
        if(isDarkMode == false){
            AsyncStorage.setItem("theme", "dark")
        }else{
            AsyncStorage.setItem("theme", "light")
        }
        setIsDarkMode(previousState => !previousState)
    };

    //const user = firebase.auth().currentUser;
    const {user} = route.params
    //console.log("ACCOUNT", user);

    function Capitalize(str){
        return str.charAt(0).toUpperCase()+str.slice(1);
    }

    function Initiales(lastname, firstname){
        return firstname.charAt(0).toUpperCase()+lastname.charAt(0).toUpperCase();
    }

    return(
        <View style={[color === 'dark' ? styles.darkView : styles.lightView , styles.container]}>
            <View style={styles.titleView}>
                <Text style={[color === 'dark' ? styles.darkText : styles.lightText, styles.titleText ]}>Mon compte</Text>
            </View>
            <View style={styles.logoView}>
                <Avatar
                size="xlarge"
                rounded
                title={Initiales(user.lastname, user.firstname)}
                onPress={() => console.log("Works!")}
                containerStyle={{backgroundColor:'grey'}}
                />
            </View>
           
            <View style={styles.picButton}>
                <Button title="Changer photo de profile"/>
            </View>

            <View style={[color === 'dark' ? styles.darkAccount : styles.account]}>
                <View style={styles.row}>
                    <Text style={[color === 'dark' ? styles.darkText : styles.lightText, styles.col]}>Username</Text>
                    <Text style={[color === 'dark' ? styles.greyText : styles.scope, styles.scope]}>{user.email}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={[color === 'dark' ? styles.darkText : styles.col, styles.col]}>Name</Text>
                    <Text style={[color === 'dark' ? styles.greyText : styles.scope, styles.scope]}>{Capitalize(user.lastname)} {user.firstname}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={[color === 'dark' ? styles.darkText : styles.col, styles.col]}>Username</Text>
                    <Text style={[color === 'dark' ? styles.greyText : styles.scope, styles.scope]}>{user.username}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={[color === 'dark' ? styles.darkText : styles.col, styles.col]}>Dark mode</Text>
                    <Switch style={styles.scope} onValueChange={toggleSwitch} value={isDarkMode}/>
                </View>
            </View>
            <View style={styles.logout}>
                <Button style={styles.logoutButton} color="red" onPress={() => { firebase.auth().signOut().then(() => navigation.navigate("Login"))}} title="Deconnexion"/>
            </View>
        </View>
    )
}