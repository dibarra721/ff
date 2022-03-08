import React from 'react'
import { View, Text, StyleSheet} from 'react-native'


export default function Header(props){

return(
    <View style={styles.header}>
        <Text>{props.title}</Text>
    </View>
)















}

const styles = StyleSheet.create({
header :{
width:'100%',
height:90,
paddingTop: 36,
backgroundColor:'#FED99B',
alignItems:'center',
justifyContent:'center'
},
headerTitle:{
fontSize:15,


}

})