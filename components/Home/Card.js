import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./HomeStyle";
import { Icon } from "react-native-elements";

export default function Card({ logo, color, size, name, sports }) {
    return (
        <TouchableOpacity onPress={() => { handleButton(sports) }} style={styles.card}>
            <Icon style={{ marginHorizontal: 15 }} name={logo} color={color} size={size} />
            {isSelected(name)}
        </TouchableOpacity>
    );

    function handleButton(sports) {
        sports.setSport(name.toLowerCase());
    }

    function isSelected(name) {
        if (name.toLowerCase() == sports.sport) {
            return (
                <Text style={{ fontWeight: "bold", color:"#888" }}>{name}</Text>
            );
        } else {
            return (
                <Text>{name}</Text>
            );
        }
    }
}