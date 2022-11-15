import {StyleSheet} from "react-native";


const styles = StyleSheet.create({

    container:{
        width:"100%",
        height:"100%",
        //backgroundColor:"red",
    },
    logoView:{
        width:"35%",
        height:"20%",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"3%"
    },
    logoBorder:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",

    },
    userLogo:{
        maxHeight:"80%",
        maxWidth:"80%",
        backgroundColor:"gray",
        borderRadius:100
    },
    picButton:{
        marginVertical:"3%"
    },

    label: {
        fontSize:17,
        color:'grey',
        marginVertical:10,
        marginHorizontal:15,
    },
    account: {
        width:'100%',
        height:'auto',
        backgroundColor:'white',
        borderTopColor: 'grey',
        borderTopWidth:0.5,
    },
    row:{
        flexDirection:"row",
        width:'100%',
        borderBottomColor: 'grey',
        borderBottomWidth:0.5,

    },
    scope:{
        margin:15,
        marginLeft:'auto',
        marginRight:'5%',
    },
    col: {
        fontSize:16,
        fontWeight:"bold",
        margin:15,
    },
    logout: {
        margin:15,
    },
    logoutButton: {
        margin:20,
    },
    lightView:{
        backgroundColor:"white"
    },
    darkView:{
        backgroundColor:"#121212"
    },
    darkAccount:{
        width:'100%',
        height:'auto',
        backgroundColor:'#1e1e1e',
        borderTopColor: 'grey',
        borderTopWidth:0.5,
    },
    darkText: {
        color:'white'
    },
    greyText: {
        color:'#7b7b7b'
    },
    titleView:{
        marginVertical:"2%",
        marginTop:"13%"
    },
    titleText:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center"
    }

})

export default styles;