import React, { useState } from "react";
import {StatusBar, Text, TextInput, TouchableOpacity, View, Image} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {firebase} from "../../firebase/firebase";
import styles from "./AuthStyle";

export default function LoginScreen({navigation}) {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Register')
    }

    /*
    const onTestPress = () => {
        firebase
        .auth()
        .signInWithEmailAndPassword("leocormo@gmail.com", "password")
        .then((response) => {
            const uid = response.user.uid
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .get()
                .then(firestoreDocument => {
                    if(!firestoreDocument.exists){
                        alert("User does not exist anymore")
                        return;
                    }
                    setUser(firestoreDocument.data())
                    const data = {
                        id: uid,
                        gender: firestoreDocument.data().gender.label,
                        username: firestoreDocument.data().username,
                        email: firestoreDocument.data().email,
                        firstname: firestoreDocument.data().firstname,
                        lastname: firestoreDocument.data().lastname,
                        birth: firestoreDocument.data().birth
                    };
                    navigation.navigate('Home', {user: data})
                })
                .catch(error =>{
                    alert(error)
                });
        })
        .catch(error => {
            alert(error)
        })
    }
    */
   const onTestPress = () =>{
       fetch('http://localhost:8080/api/auth/signin',{
           method:'POST',
           headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: "leocormo@gmail.com",
            password: "password"
          })
       }).then((res) => res.json())
       .then((json) => {
           if(("id" in json)==1){
               navigation.navigate('Home', {user: json})
           }else{
               alert(json.message);
           }
       })
   }

   const onLoginPress = () =>{
    return fetch('http://localhost:8080/api/auth/signin',{
        method:'POST',
        headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         email: email,
         password: password
       })
    }).then((res) => res.json())
    .then((json) => {
        if(("id" in json)==1){
            navigation.navigate('Home', {user: json})
        }else{
            alert(json.message);
        }
    })
}

   /** 
    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if(!firestoreDocument.exists){
                            alert("User does not exist anymore")
                            return;
                        }
                        setUser(firestoreDocument.data())
                        navigation.navigate('Home', {user})
                    })
                    .catch(error =>{
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })

    }
    */

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <KeyboardAwareScrollView
            style={{ flex:1, width: '100%'}}
            keyboardShoulPersistTaps="always">
                <View style={styles.logoView}>
                    
                </View>
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                onChangeText={(text) => setEmail(text)}
                value={email}
                autoCapitalize="none"/>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    autoCapitalize="none"/>
                <TouchableOpacity
                    onPress={()=> onLoginPress()}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> onTestPress()}>
                    <Text style={styles.buttonTitle}>TEST</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account ? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text> </Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}