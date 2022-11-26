import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    titleView:{
        marginVertical:"2%",
        marginTop:"13%"
    },
    logoView:{
        width:"35%",
        height:"20%",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"3%"
    },
    usernameView:{
        marginTop:"30%",
    },
    usernameText:{
        textAlign:"center"
    },
    followView:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:"4%"
    },
    followNumber:{
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold"
    },
    loadingView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    Button:{
        alignItems:"center",
        marginTop:20,
        borderWidth:1,
        borderRadius:20
        ,marginHorizontal:100,
        padding:5
    },
    followButton:{
        backgroundColor:"black"
    },
    unfollowButton:{
        
    },
    followText:{
        color:"white"
    },
    unfollowText:{

    }

});

export default styles;