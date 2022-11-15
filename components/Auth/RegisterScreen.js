import { Text, View, TouchableOpacity, TextInput, Image, ScrollView, Button, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React, { useState } from "react";
import { firebase } from "../../firebase/firebase";
import styles from "./AuthStyle";
import RadioButtonRN from "radio-buttons-react-native";
import DatePicker from "react-native-date-picker";

export default function RegisterScreen({ navigation }) {

    const [gender, setGender] = useState('')
    const [username, setUsername] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [birth, setBirth] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const genderData = [
        {
            label: 'Homme'
        },
        {
            label: 'Femme'
        }
    ]


    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }
    /**
        const onRegisterPress = () => {
    
            if(password !== confirmPassword) {
                alert("Password don't match.")
                return
            }
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((response) => {
                    const uid = response.user.uid
                    const data = {
                        id: uid,
                        gender,
                        username,
                        email,
                        firstname,
                        lastname,
                        birth
                    };
                    const usersRef = firebase.firestore().collection('users')
                    usersRef
                        .doc(uid)
                        .set(data)
                        .then(() => {
                            navigation.navigate('Home', {user: data})
                        })
                        .catch((error) => {
                            alert(error)
                        });
                })
                .catch((error)=> {
                    alert(error)
                });
    
        }
        */

    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Password don't match.")
            return
        } else {
            fetch('http://localhost:8080/api/auth/signup', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    gender: "Homme",
                    username: "leocormomo",
                    firstname: "leo",
                    lastname: "cormomo",
                    birth: "2000-03-28",
                    email: "leocormomo@gmail.com",
                    password: "password"
                })
            }).then((res) => res.json())
                .then((json) => {
                    if (("id" in json) == 1) {
                        navigation.navigate('Home', { user: json })
                    } else {
                        alert(json.message);
                    }
                })
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <KeyboardAwareScrollView
                    style={{ flex: 1, width: '100%' }}>
                    <View style={styles.logoView}>

                    </View>
                    <View style={styles.radioButtonView}>
                        <Text style={styles.gender}>Genre</Text>
                        <RadioButtonRN
                            data={genderData}
                            selectedBtn={(e) => setGender(e)}
                            box={false}
                            style={styles.radio}
                        />
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder='User Name'
                        onChangeText={(text) => setUsername(text)}
                        value={username}
                        autoCapitalize="none" />
                    <TextInput
                        style={styles.input}
                        placeholder='First Name'
                        onChangeText={(text) => setFirstname(text)}
                        value={firstname}
                        autoCapitalize="none" />
                    <TextInput
                        style={styles.input}
                        placeholder='Last Name'
                        onChangeText={(text) => setLastname(text)}
                        value={lastname}
                        autoCapitalize="none" />
                    <Button title="Date de naissance" onPress={() => setOpen(true)} />
                    <DatePicker
                        modal
                        mode="date"
                        open={open}
                        date={birth}
                        onConfirm={(birth) => {
                            setOpen(false)
                            Alert.alert(
                                "Date de naissance",
                                "La date de naissance a bien été prise en compte",
                                [
                                    {
                                        text: "Supprimer",
                                        onPress: () => {
                                            setBirth(new Date())
                                        },
                                    },
                                    {
                                        text: "OK",
                                        onPress: () => {
                                            setBirth(birth)
                                        },
                                    }

                                ]
                            )
                        }
                        }
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='E-mail'
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        autoCapitalize="none" />
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        placeholder='Password'
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        autoCapitalize="none" />
                    <TextInput
                        style={styles.input}
                        secureTextEntry
                        placeholder='Confirm Password'
                        onChangeText={(text) => setConfirmPassword(text)}
                        value={confirmPassword}
                        autoCapitalize="none" />
                    <TouchableOpacity
                        onPress={() => onRegisterPress()}>
                        <Text style={styles.buttonTitle}>Create account</Text>
                    </TouchableOpacity>
                    <View style={styles.footerView}>
                        <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </ScrollView>
    );
}