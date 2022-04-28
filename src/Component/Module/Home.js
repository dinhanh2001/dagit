import {View ,Text, SafeAreaView,StyleSheet, Image, Button, Pressable} from 'react-native';
import { Entypo, AntDesign, Ionicons, FontAwesome5,FontAwesome  } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import { 
    ContainerFlexStart,
    ContainerFlexCenter,
    ContainerColumn,
    Colors,
    NavigationColors,
    FontSize,
    MetricsSizes,
    FontWeight} from '../../Style/Color';
import LeavePage from '../../Screen/NavHomePage/LeavePage';
import AttendancePage from '../../Screen/NavHomePage/AttendancePage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack =createNativeStackNavigator();
function HomeScreen({navigation}){
    return (
        <View>
            <View style={styles.Container}>
               <View style={styles.box}>
                    <View style={styles.grid}>
                        <View style={styles.Tabar}>
                            <Text style={{
                                color:Colors.white,
                                fontSize:FontSize.regular
                                }}>UGBM</Text>
                            <Entypo name="menu" size={FontSize.sm} color={Colors.white} onPress={()=>navigation.toggleDrawer()}/>
                        </View>
                        <View style={styles.contentBaner}>
                            <View style={styles.boxContent}>
                                <View>
                                    <Text style={{
                                        fontSize:FontSize.regular
                                    }}>Welcome back</Text>
                                    <View style={ContainerFlexStart}>
                                        <Text style={{fontWeight:FontWeight.sm,fontSize:FontSize.sm,marginVertical:MetricsSizes.tiny}}>John</Text>
                                        <Text style={{fontSize:FontSize.small,opacity:0.7}}>- ID : 19012</Text>
                                    </View>
                                    <View style={ContainerFlexStart} >
                                        <AntDesign name="clockcircleo" size={FontSize.regular} color="black" />
                                        <Text style={{
                                            color:Colors.clock,
                                            fontSize:FontSize.regular,
                                            marginLeft:MetricsSizes.tiny,
                                            marginVertical:MetricsSizes.small
                                            }}>09 : 15 : 34</Text>
                                    </View>
                                    <Text>You're not check in yet today</Text>
                                </View>
                                <View>
                                    <Image 
                                    style={{
                                        width:50,
                                        height:50,
                                        borderRadius:25
                                    }}
                                        source={{uri:'https://cdn.pixabay.com/photo/2022/04/16/14/51/woman-7136446__340.jpg'}}
                                    />
                                </View>
                            </View>
                           {/* ?dghdgd */}
                            <View style={ContainerFlexCenter}>
                                <View style={{
                                        backgroundColor:Colors.btnSuccess,
                                        paddingHorizontal:MetricsSizes.xl,
                                        paddingVertical:MetricsSizes.regular,
                                        borderRadius:MetricsSizes.small
                                        }}>
                                        <Text style={{color:Colors.white ,fontWeight:FontWeight.sm}} >CHECK IN</Text> 
                                    </View>
                                <View style={{
                                    backgroundColor:Colors.unfocus,
                                    paddingHorizontal:MetricsSizes.xl,
                                    paddingVertical:MetricsSizes.regular,
                                    borderRadius:MetricsSizes.small
                                    }}>
                                    <Text style={{color:Colors.white,fontWeight:FontWeight.sm}} onPress={()=>navigation.navigate('Attendance')}>CHECK OUT</Text>
                                </View>
                            </View>   
        
                        </View>
                        </View>
                       
               </View>
            </View>
                        <View style={ContainerColumn}>
                            <View>
                                <Pressable style={styles.ListBox}  onPress={()=>navigation.navigate('Attendance')}>
                                    
                                        <Ionicons name="logo-buffer" size={24} color={Colors.iconsColor} />
                                        <Text onPress={()=>navigation.navigate('Attendance')} style={{fontSize:FontSize.small,fontWeight:FontWeight.sm}}>Attendance</Text> 
                                       
                                </Pressable>
                                <Pressable  style={styles.ListBox} onPress={()=>navigation.navigate('Attendance')}>
                                    <AntDesign name="filetext1" size={24} color={Colors.iconsColor} />
                                    <Text style={{fontSize:FontSize.small,fontWeight:FontWeight.sm}}>Payslip</Text>
                                </Pressable>
                                <Pressable style={styles.ListBox} onPress={()=>navigation.navigate('Attendance')}>
                                    <AntDesign name="team" size={24} color={Colors.iconsColor} />
                                    <Text style={{fontSize:FontSize.small,fontWeight:FontWeight.sm}}>Team</Text>
                                </Pressable>
                            </View>
                            <View>
                                <Pressable style={styles.ListBox} onPress={()=>navigation.navigate('Attendance')}>
                                    <FontAwesome5 name="stack-overflow" size={24} color={Colors.iconsColor} />
                                    <Text style={{fontSize:FontSize.small,fontWeight:FontWeight.sm}}>Overtime</Text>
                                </Pressable>
                                <Pressable style={styles.ListBox} onPress={()=>navigation.navigate('LeavePage')}>
                                    <FontAwesome name="calendar" size={24} color={Colors.iconsColor} />
                                    <Text style={{fontSize:FontSize.small,fontWeight:FontWeight.sm}}>Leave</Text>
                                </Pressable>
                                <Pressable style={styles.ListBox} onPress={()=>navigation.navigate('Attendance')}>
                                    <Ionicons name="newspaper-outline" size={24} color={Colors.iconsColor} />
                                    <Text style={{fontSize:FontSize.small,fontWeight:FontWeight.sm}}>News</Text>
                                </Pressable>
                            </View>
                        </View>
            </View>
    )
}
export default  function Home(){
    return (
        <Stack.Navigator >
            <Stack.Screen name='HomeScreen' component={HomeScreen}  options={{
                headerShown:false
            }}/>
              <Stack.Screen name='Attendance' component={AttendancePage}  options={{
               headerShown:false
            }}/>
              <Stack.Screen name='LeavePage' component={LeavePage}  options={{
                headerShown:false
            }}/>
        </Stack.Navigator>
    )
}
const styles = StyleSheet.create({
    Container:{
        backgroundColor:'#308AF3',
        paddingTop:20
    },
    Tabar:{
        paddingHorizontal:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    contentBaner:{
        marginHorizontal:30,
        backgroundColor:'#ffffff',
        padding:15,
        borderRadius:10,
        zIndex:50,
        top:'10%'
    },
    boxContent:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    ListBox:{
        backgroundColor:"#ffffff",
        paddingVertical:MetricsSizes.large,
        paddingHorizontal:MetricsSizes.xl,
        borderRadius:MetricsSizes.regular,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:MetricsSizes.regular,
        borderColor:'#d8d8d8',
        zIndex:10,borderWidth:0.8,
        shadowOffset:{
            width:5,
            height:5
        },
        shadowColor:'#d8d8d8',
        shadowOpacity:1,
        shadowRadius:5,
    }
    
})