import React from "react";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    team:{
        margin: 20,
    },
    buttonTeam: {
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30,
    },
    containerTeam: {
        width: 120,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    teamView:{
        marginTop:60,
        marginHorizontal:50,
        flexDirection:"row",
        justifyContent:"space-between",  
    },
    vs:{
        marginLeft:"auto",
        marginRight:"auto",
    },
    vsTitle:{
        fontSize:18
    },
    teamTitle:{
        fontSize:22,
        fontWeight:"bold",
    },
    scoreView:{
        marginHorizontal:90,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    scoreText:{
        fontSize:30
    },
    playersList:{
        marginHorizontal:50,
        marginTop:80,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    player:{
        fontSize:18
    },
    number:{
        fontSize:18,
        fontWeight:"bold",
    },
    row:{
        flexDirection:"row",
        marginTop:10,
    },
    scoreButtonView:{
        marginHorizontal:40,
        marginTop:20,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    timer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    }
})

export default style;