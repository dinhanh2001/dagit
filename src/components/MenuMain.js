import { View,Text, StyleSheet, Pressable} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ColorVersion from '../styles/color';
const MenuMain=({
   icon,
    textContent,
   ...props
})=>{
    return(
        <Pressable style={styles.shadow} {...props}>
            {icon}
            <Text style={styles.textContent}>{textContent}</Text>
        </Pressable>
    )
}
export default MenuMain
const styles= StyleSheet.create({
    shadow:{
        borderWidth:1,
        width:'20%',
        shadowColor:'gray',
        shadowOffset:{
            width:2,
            height:5
        },
        shadowOpacity:0.8,
        shadowRadius:5,
        display:'flex',
        justifyContent:'center',alignItems:'center',
        backgroundColor:ColorVersion.Background,
        padding:5,
        borderRadius:10
    },
    textContent:{
        fontWeight:'600',
        fontSize:16
    }
})