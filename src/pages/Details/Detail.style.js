import { StyleSheet,Dimensions } from "react-native";
const deviceSize=Dimensions.get('window');

export  default StyleSheet.create({
    container:{
        flex:1,
    },
    bodyContainer:{padding:10},
    image:{
        width:deviceSize.width,
        height: deviceSize.height /3,
        resizeMode:'contain',
        backgroundColor:'white',
    },
    title:{fontWeight:'bold', fontSize:25, color:'black'},
    desc:{fontStyle:'italic',color:'black'},
    price:{fontWeight:'bold',fontSize:20, textAlign:'right'},
});