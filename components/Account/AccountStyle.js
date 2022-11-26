import {StyleSheet} from "react-native";


const styles = StyleSheet.create({

    container:{
        width:"100%",
        height:"100%",
        alignItems:"center",
        //backgroundColor:"red",
    },
    logoView:{
        width:"75%",
        height:"20%",
        marginTop:"3%"
    },
    usernameView:{
        alignItems:"center",
        marginTop:10
    },
    borderTop:{
        borderTopWidth:1,
        width:"100%",
        borderTopColor:"grey",
        paddingTop:"3%",
    },
    borderBottom:{
        borderBottomWidth:1,
        width:"100%",
        borderBottomColor:"grey",
    },
    avatar:{
        alignItems:"center",
        width:"100%",
    },
    test:{
        width:"100%",
        height:"20%",
        backgroundColor:"red"
    },
    logoutView:{
        position:"absolute",
        right:0,
        padding:5
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
    }

})

export default styles;