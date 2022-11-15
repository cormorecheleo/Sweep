import React from "react";
import { ListItem, Icon } from "react-native-elements";
import { Text, TouchableOpacity, View } from "react-native";

const Events = ({navigation}) => {

    const list = [
        {
            title : "Basketball",
            icon: "sports-basketball",
            ref: "BasketTeam",
        },
        {
            title: "Football",
            icon: "sports-soccer",
            ref: "FootballTeam",
        },
]

    return(
        <View>
        <Text>Event !!!</Text>
        {
            list.map((item, i) => (
                <TouchableOpacity onPress={() => { navigation.navigate(item.ref) }}>
                <ListItem key={i} bottomDivider>
                    <Icon name={item.icon} />
                    <ListItem.Content>
                        <ListItem.Title>{item.title}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                </TouchableOpacity>
    ))
  }
        </View>
    )
}

export default Events;