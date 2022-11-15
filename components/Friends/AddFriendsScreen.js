import React from "react";
import { FlatList, Text, View, Button, TouchableOpacity } from "react-native";
import { SearchBar } from "react-native-elements";
import { firebase } from "../../firebase/firebase";
import styles from "./Style";
import { Avatar } from "react-native-elements";


export default function AddFriends({route, navigation}) {
    const [search, setSearch] = React.useState('');
    const [data, setData] = React.useState([]);
    const [friends, setFriends] = React.useState([]);
    const {user} = route.params;

    React.useEffect(() => {
        fetch('http://localhost:8080/api/user/all', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
            .then((json) => {
                setFriends(json.user);
                for( var i = 0; i < json.user.length; i++){
                    if ( json.user[i].username === user.username) { 
                        json.user.splice(i, 1); 
                    }
                }
            })
            
    }, []);

    const updateSearch = (input) => {
        setSearch(input);
    }

    function Initiales(lastname, firstname) {
        return firstname.charAt(0).toUpperCase() + lastname.charAt(0).toUpperCase();
    }


    const filterFriends = (item) => {
        if (search.length > 0) {
            if (item.username.startsWith(search.toLocaleLowerCase())) {
                return (
                    <TouchableOpacity style={styles.friendView} onPress={() => navigation.navigate('profile', {user:user, follower:item.username, followerId: item.id})}>
                        <View style={styles.logoView}>
                            <Avatar
                                size="medium"
                                rounded
                                title={Initiales(item.lastname, item.firstname)}
                                onPress={() => console.log("Works!")}
                                containerStyle={{ backgroundColor: 'grey' }}
                            />
                        </View>
                        <View style={styles.usernameView}>
                            <Text style={{ fontWeight: "bold" }}>{item.username}</Text>
                            <Text>{item.firstname} {item.lastname}</Text>
                        </View>
                    </TouchableOpacity>
                );
            }
        }
    }

    return (
        <View>
            <SearchBar placeholder="Recherchez ici" onChangeText={updateSearch} value={search} />
            <FlatList data={friends} keyExtractor={(string) => string.toString()} renderItem={({ item }) => filterFriends(item)} extraData={search} />
        </View>
    )
}