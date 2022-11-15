import React from "react";
import { View, Text, TextInput } from "react-native";
import { Button } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import styles from "../Basket/Style";

const ModalView = ({name, setName, position, setPosition, number, setNumber, modal}) => {
    return(
        <View>
                <View style={{marginLeft:"auto"}}>
                    <Button buttonStyle={styles.buttonTeam} containerStyle={{width:"10%"}} onPress={() => modal.current?.close()} title="X"/>
                </View>
                <View style={{marginLeft:"auto", marginRight:"auto", width:"80%"}}>
                    <Text>NUMERO</Text>
                    <TextInput keyboardType="numeric" style={{borderWidth:1, borderColor:"black", padding:10}} value={number} onChangeText={(value) => setNumber(value)}/>
                <Text>NOM DU JOUEUR :</Text>
                <TextInput style={{borderWidth:1, borderColor:"black", padding:10}} value={name} onChangeText={(value) => setName(value)}/>
                <Text>POSTE</Text>
                <Picker
                selectedValue={position}
                onValueChange={(itemValue, itemIndex) => setPosition(itemValue)}>
                    <Picker.Item label="Choisir un poste" value=""/>
                    <Picker.Item label="Meneur" value="Meneur"/>
                    <Picker.Item label="Ailier" value="Ailier"/>
                    <Picker.Item label="Ailier fort" value="Ailier fort"/>
                    <Picker.Item label="Arriere" value="Arriere"/>
                    <Picker.Item label="Pivot" value="Pivot"/>
                </Picker>
                </View>
            </View>
    )
}

export default ModalView;