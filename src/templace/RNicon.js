import {View ,Text} from 'react-native';
const RNicon =({
    icon,paddingx,paddingy,background,border,left,top,right,zIndex
})=>{
    return (
        <View style={{paddingVertical:paddingy
        ,paddingHorizontal:paddingx,backgroundColor:background,
         borderRadius:border,right:right,zIndex:zIndex
         ,left:left,top:top}}>
            {icon}
        </View>
    )
}
export default RNicon