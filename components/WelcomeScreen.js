import React from "react";
import {Text, Image, View, StyleSheet, Button} from 'react-native';
import logoUrl from '../assets/logo.png';


export default function Welcome({navigation}){
    return(
        <>
        <View style={styles.logoView}>
            <Image source={logoUrl} style={styles.logo} />
            <Text style={{marginLeft:"auto", marginRight:"auto"}}>Sweep</Text>
        </View>
        <Text>Connexion a sweep <Button onPress={() => navigation.navigate('Login')} title="Ici"/></Text>
        </>
    );

}

const styles = StyleSheet.create({
    logoView:{
        height:"17%",
        marginTop:50,
        marginLeft:"auto",
        marginRight:"auto",
    },
    logo:{
        height:100,
        width:100,
    }
})