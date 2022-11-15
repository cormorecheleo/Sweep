import React from "react";
import { Text, View } from "react-native";
import styles from "./HomeStyle";

export default function Dashboard({sport}) {
    return (
        <View style={styles.dashboardView}>
            <Text>{sport}</Text>
        </View>
    );
}