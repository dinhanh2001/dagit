import {Button ,StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ColorVersion from '../styles/color';
export default function RNbutton({
    title,paddingy,...props
}){
    
    return (
        <LinearGradient 
         colors={[ColorVersion.primaryGradientBtnStart,ColorVersion.primaryGradientBtnEnd]}
         start={{x:0,y:0}}
         end={{x:1,y:0}}
         style={{
             borderRadius:8,
             paddingVertical:paddingy
         }}
         >
            <Button title={title} color={ColorVersion.Background}
            {...props}
            />
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    
})