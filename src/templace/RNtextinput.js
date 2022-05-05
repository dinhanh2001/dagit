import {TextInput ,StyleSheet ,View, Platform} from 'react-native';
import ColorVersion from '../styles/color';
import fontSize from '../styles/fonts';
const RNtextinput=({
    style,
    placeholder,
    width,
    ...restProps
})=>{
    const finalStyle = [
        styles.default,
        styles.bordered,
         styles.widthInput
      ];
    return (
       
         <TextInput 
        placeholderTextColor={ColorVersion.Background}
        placeholder={placeholder}
        keyboardType='email-address'
        
        style={finalStyle}
        {...restProps}
        />
      
    )
}
export default  RNtextinput
const HEIGHT = 40;

const styles = StyleSheet.create({
  default: {
    height: HEIGHT,
    color: 'white',
    fontSize:fontSize.regular,
    backgroundColor:ColorVersion.BackgroundTextInput,
    ...Platform.select({
      ios:{
        paddingLeft:10
      }
    })
  },
  bordered: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 8,
    borderBottomLeftRadius:0,
    borderTopLeftRadius:2
  },
  widthInput:{
    width:300,
    opacity:0.8
  }
});
