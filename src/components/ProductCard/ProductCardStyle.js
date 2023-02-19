import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{borderWidth:1,
    borderColor: '#bdbdbd',
    backgroundColor:'#e0e0e0',
    margin:10,
    flexDirection:'row',
    padding: 5,
},
    body_container:{
        flex:1,
        padding:4,
        justifyContent:'space-between'

    },
    images:{
    width:100,
    minHeight:100,
    resizeMode:'contain',
    backgroundColor:'white',

},
    title:{
        fontWeight:'bold',
        fontSize:17,
    },
    price:{
        textAlign:'right'
    }
})