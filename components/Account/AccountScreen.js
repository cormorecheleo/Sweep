import React, { useEffect, useState } from "react";
import { Text, View, Image, Button, Switch, StatusBar } from "react-native";
import firebase from "firebase/compat";
import styles from "./AccountStyle";
import logoUrl from "../../assets/user.png";
import { Avatar, Badge, Icon } from "react-native-elements";
import Animated, { FadeIn, FadeInDown, FadeOutDown, Layout } from "react-native-reanimated";
import { ActivityIndicator } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Account({ navigation, route }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [color, setColor] = useState('');
    const value = AsyncStorage.getItem("theme");
    const [user, setUser] = React.useState(route.params.user);
    const [follow, setFollow] = React.useState();
    value.then((res) => isDark(res));

    const isDark = (theme) => {
        if (theme == "light") {
            setIsDarkMode(false)
        } else {
            setIsDarkMode(true);
        }
        setColor(theme);
    }

    const toggleSwitch = () => {
        if (isDarkMode == false) {
            AsyncStorage.setItem("theme", "dark")
        } else {
            AsyncStorage.setItem("theme", "light")
        }
        setIsDarkMode(previousState => !previousState)
    };

    //const user = firebase.auth().currentUser;
    //console.log("ACCOUNT", user);

    function Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function Initiales(lastname, firstname) {
        return firstname.charAt(0).toUpperCase() + lastname.charAt(0).toUpperCase();
    }

    const signOut = () => {
        fetch('http://localhost:8080/api/auth/signout', {
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(() => navigation.navigate('Login'));
    }

    const getData = () => {
        fetch('http://localhost:8080/api/user/find', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user.username
            })
        }).then((res) => res.json())
            .then((json) => { setFollow({ nbFollowers: json.nbFollowers, nbFollowing: json.nbFollowing }) });
    }

    React.useEffect(() => {
        getData();
    }, []);

    if (!follow) {
        return (
            <View style={styles.loadingView}>
                <ActivityIndicator size="large"/>
                <Text >Loading</Text>
            </View>
        );
    } else {
        return (
            <View style={[color === 'dark' ? styles.darkView : styles.lightView, styles.container]}>
                <StatusBar backgroundColor={color === 'dark' ? "#3b5998" : "#fffffff"} barStyle={color === "dark" ? "light-content" : "dark-content"} />
                <View style={styles.titleView}>
                    <Text style={[color === 'dark' ? styles.darkText : styles.lightText, styles.titleText]}>Mon compte</Text>
                </View>
                <View style={styles.logoView}>

                    <View style={styles.borderTop} />
                    <Animated.View
                        key={1}
                        entering={FadeInDown.duration(300)}
                        style={styles.avatar}>
                        <Avatar
                            size="large"
                            rounded
                            title={Initiales(user.lastname, user.firstname)}
                            onPress={() => console.log("Works!")}
                            containerStyle={{ backgroundColor: 'grey' }}
                        />
                        <Badge onPress={() => console.log("works!")} value={<Icon name="edit" size={15} />} size="large" containerStyle={{ position: 'absolute', margin: 0, right: 0, left: 52, top: 52 }} />
                        <View style={styles.logoutView}>
                            <Icon name="logout" onPress={() => signOut()} color="red" />
                        </View>

                    </Animated.View>
                    <Animated.View
                        entering={FadeInDown.duration(330)}
                        style={styles.usernameView}
                    >
                        <Text>{user.username}</Text>
                    </Animated.View>
                    <Animated.View
                        entering={FadeInDown.duration(360)}
                        style={styles.followView}
                    >
                        <View>
                            <Text style={styles.followNumber}>{follow.nbFollowers}</Text>
                            <Text>Followers</Text>
                        </View>
                        <View>
                            <Text style={styles.followNumber}>{follow.nbFollowing}</Text>
                            <Text>Following</Text>
                        </View>
                    </Animated.View>
                </View>
                <Animated.View
                    style={{ width: "75%", marginTop: "5%" }}
                    entering={FadeInDown.duration(360)}
                >
                    <View style={styles.borderBottom} />
                </Animated.View>

                {/**
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
                    <Switch style={styles.scope} onValueChange={toggleSwitch} value={isDarkMode} />
                </View>
            </View>
    */}
            </View>
        )
    }
}