import React from "react";
import { View, Text, Button, Alert, TouchableOpacity, ActivityIndicator } from "react-native";
import { Avatar } from "react-native-elements";
import styles from "./Style";

export default function Profile({ route }) {
    const { ...params } = route.params;
    const [profile, setProfile] = React.useState();
    const [isFollowing, setIsFollowing] = React.useState();
    const [followButton, setFollowButton] = React.useState("");
    console.log(params);

    function Initiales(lastname, firstname) {
        return firstname.charAt(0).toUpperCase() + lastname.charAt(0).toUpperCase();
    }

    const displayProfile = () => {

        if (!profile) {
            return (
                <View style={styles.loadingView}>
                    <ActivityIndicator size="large" />
                    <Text >Loading</Text>
                </View>
            );
        } else {
            return (
                <View>
                    <View style={styles.logoView}>
                        <Avatar
                            size="xlarge"
                            rounded
                            title={Initiales(profile.user.lastname, profile.user.firstname)}
                            onPress={() => console.log("Works!")}
                            containerStyle={{ backgroundColor: 'grey' }}
                        />
                    </View>
                    <View style={styles.usernameView}>
                        <Text style={styles.usernameText}>{profile.user.username}</Text>
                    </View>
                    <View style={styles.followView}>
                        <View>
                            <Text style={styles.followNumber}>{profile.nbFollowers}</Text>
                            <Text>Followers</Text>
                        </View>
                        <View>
                            <Text style={styles.followNumber}>{profile.nbFollowing}</Text>
                            <Text>Following</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={[followButton === "Follow" ? styles.followButton : styles.unfollowButton, styles.Button]} onPress={() => handleFollowButton()}>
                            <Text style={followButton === "Follow" ? styles.followText : styles.unfollowText}>{followButton}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }

    const unfollowAlert = () => {
        Alert.alert(
            "Unfollow " + params.follower,
            "Are u sure to unfollow " + params.follower,
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "Unfollow",
                    style: "destructive",
                    onPress: () => unfollowHandle()
                }
            ]
        );
    }

    const handleFollowButton = () => {
        if (isFollowing) {
            unfollowAlert();
        } else {
            followHandle();
        }
    }

    const unfollowHandle = () => {
        fetch('http://localhost:8080/api/user/unfollow', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idFollowing: params.user.id,
                idFollower: params.followerId
            })
        })
            .then(() => getData());
    }

    const followHandle = () => {
        fetch('http://localhost:8080/api/user/follow', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idFollowing: params.user.id,
                idFollower: params.followerId
            })
        })
            .then(() => getData());
    }

    const getData = () => {
        fetch('http://localhost:8080/api/user/find', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: params.follower
            })
        }).then((res) => res.json())
            .then((json) => setProfile(json));

        fetch('http://localhost:8080/api/user/isFollowing', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idFollowing: params.user.id,
                idFollower: params.followerId
            })
        }).then((res) => res.json())
            .then((json) => {
                if (json.isFollowing) {
                    setFollowButton("Unfollow");
                } else {
                    setFollowButton("Follow");
                }
                setIsFollowing(json.isFollowing)
            });
    }

    React.useEffect(() => {
        getData();
    }, []);

    return (
        <View>
            {displayProfile()}
        </View>
    )



}