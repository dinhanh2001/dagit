import {View ,Text ,SafeAreaView ,StyleSheet,
Image,useWindowDimensions 
} from 'react-native';
import {RNtextinput, RNbutton,RNicon} from '../templace/index';
import { LinearGradient } from 'expo-linear-gradient';
import ColorVersion from '../styles/color';
import fontSize from '../styles/fonts';
import { FontAwesome,Ionicons ,Feather } from '@expo/vector-icons';
export default function LoginPage({navigation}){
    const window = useWindowDimensions();
    const styles = StyleSheet.create({
        container:{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            padding:40,
            height:window.height
        }
    })
    return (
        <View>
        <LinearGradient colors={['#267ff9','#4967e1']}
            start={{x:0.5,y:0.5}}
            end={{x:0.5,y:1}}
        >
           <View style={styles.container} >
                    <Text style={{paddingBottom:20,color:ColorVersion.Background,fontSize:fontSize.xl}}>Employee Seft Service</Text>
                    <Text style={{paddingBottom:30,color:ColorVersion.Background, fontSize:fontSize.xsmall}}>by USAHA GUNABHAKTI MANDIRI</Text>
                    <View>
                        <View>
                            <Text style={{paddingBottom:5,color:ColorVersion.Background}}>
                                Id number
                            </Text>
                            <View style={{display:'flex',flexDirection:'row',paddingBottom:10}}>
                                <RNicon paddingx={13} paddingy={8} background={ColorVersion.Background} border={5}
                                 icon={<FontAwesome name="user" 
                                 size={fontSize.sm} color={ColorVersion.Primary} />}/>
                                <RNtextinput placeholder={'Id number'}/> 
                            </View>
                        </View>
                        <View>
                            <Text style={{paddingBottom:5,color:ColorVersion.Background}}>
                                Password
                            </Text>
                            <View style={{display:'flex',flexDirection:'row',paddingBottom:10}}>
                                <RNicon paddingx={10} paddingy={8} background={ColorVersion.Background} border={5}
                                 icon={<Ionicons name="ios-lock-closed" size={fontSize.sm} color={ColorVersion.Primary} />}/>
                                <RNtextinput placeholder={'********'}/> 
                                <RNicon icon={<Feather name="eye" size={fontSize.sm} color={ColorVersion.Background} 
                                />
                            }  left={-30} top={8} right={-2} zIndex={5}
                                 />
                            </View>
                        </View>
                        <Text style={{textAlign:'right',paddingVertical:10,color:ColorVersion.primaryGradientBtnEnd}}>Forgot your password</Text>
                        <RNbutton paddingy={5} title={'Sign in'} onPress={()=>navigation.navigate('BottomTabs')} />
                        <View style={{justifyContent:'center',alignItems:'center',paddingTop:20}}>
                            <Text style={{color:ColorVersion.Background,marginVertical:15,}}>Don't have account ?</Text>
                            <Text style={{color:ColorVersion.primaryGradientBtnEnd,borderWidth:1,borderColor:ColorVersion.primaryGradientBtnEnd,paddingHorizontal:80
                            ,paddingVertical:15,borderRadius:5
                            }}>Contact Administrator</Text>
                        </View>
                    </View>
           </View>
        </LinearGradient>
   </View>
    )
}
