import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    lightView: {
        backgroundColor: "#ffffff"
    },
    darkView: {
        backgroundColor: "#121212"
    },
    container: {
        height: "100%"
    },
    header: {
        backgroundColor: "#523",
        height: "15%",
        alignItems: "center",
        justifyContent: "center"
    },
    cards: {
        margin: "4%",
        flexDirection:"row",
        overflow:"visible"
    },
    card: {
        backgroundColor:"#fff",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.38,
        shadowRadius: 8,
        width:120,
        height:50,
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        marginRight:15,
    },

    dashboardView:{
        margin:"4%"
    }
})

export default styles;