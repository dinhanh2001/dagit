import {View, Text, SafeAreaView, Image,ImageBackground, ScrollView} from 'react-native';
import { FontAwesome, AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
export default function ProfilePage(){
    return (
        <View>
           <View style={{backgroundColor:'#ffffff'}}>
           <View>
               <Text style={{fontSize:25,textAlign:'center',paddingVertical:20}}>Profile</Text>
           </View>
           <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
               <View style={{width:100,height:80}}>
                    <ImageBackground source={require('../../Image/profile.jpg')} resizeMode='cover'
                        style={{
                            flex:1,
                            justifyContent:'center',
                            alignItems:'center'
                        }}
                    >
                             <Image
                    source={{uri:'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/61270269_431295047658473_1648916225008336896_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_ohc=ZyaqtsLlzBcAX-C0HpA&_nc_ht=scontent.fhan2-4.fna&oh=00_AT9vdTI7IsnhUyJgtMYzuz2dMLupSs3W9TsvoOYvRu_OJg&oe=628AD6D4'}}
                    style={{
                        width:70,
                        height:70,
                        borderRadius:35
                    }}
                />

                    </ImageBackground>
               </View>
               
                <View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',paddingVertical:5}}>
                <Text style={{fontWeight:'700',fontSize:18}}>John</Text>
                <Text style={{opacity:0.7}}>- ID :19012</Text>
                </View>
                <Text style={{fontSize:14,fontWeight:'600',paddingBottom:20}}>Product Designer</Text>

                
           </View>
          
           </View>
           <ScrollView>
           <View style={{paddingTop:20}}>
               <View  style={{display:'flex',justifyContent:'space-between',
               flexDirection:'row',backgroundColor:'#ffffff',
               marginHorizontal:20,
               paddingHorizontal:10,
               paddingVertical:15,
               borderRadius:10,
               marginVertical:15
            }}>
                    <View  style={{display:'flex',justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                        <FontAwesome name="user" size={24} color="#4592f6" />
                        <Text style={{marginLeft:10,fontSize:18}}>Employee Detail</Text>    
                    </View>
                    <AntDesign name="right" size={24} color="#d8d8d8" />
               </View>
               <View  style={{display:'flex',justifyContent:'space-between',
               flexDirection:'row',backgroundColor:'#ffffff',
               marginHorizontal:20,
               paddingHorizontal:10,
               paddingVertical:15,
               borderRadius:10,
               marginVertical:15
            }}>
                    <View  style={{display:'flex',justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                    <MaterialCommunityIcons name="email-outline" size={24} color="#4592f6" />
                        <Text style={{marginLeft:10,fontSize:18}}>Address and Contact</Text>    
                    </View>
                    <AntDesign name="right" size={24} color="#d8d8d8" />
               </View>
               <View  style={{display:'flex',justifyContent:'space-between',
               flexDirection:'row',backgroundColor:'#ffffff',
               marginHorizontal:20,
               paddingHorizontal:10,
               paddingVertical:15,
               borderRadius:10,
               marginVertical:15
            }}>
                    <View  style={{display:'flex',justifyContent:'center',flexDirection:'row',alignItems:'center'}}> 
                    <MaterialCommunityIcons name="cast-education" size={24} color="#4592f6" />
                        <Text style={{marginLeft:10,fontSize:18}}>Education</Text>    
                    </View>
                    <AntDesign name="right" size={24} color="#d8d8d8" />
               </View>
               <View  style={{display:'flex',justifyContent:'space-between',
               flexDirection:'row',backgroundColor:'#ffffff',
               marginHorizontal:20,
               paddingHorizontal:10,
               paddingVertical:15,
               borderRadius:10,
               marginVertical:15
            }}>
                    <View  style={{display:'flex',justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                    <MaterialIcons name="contactless" size={24} color="#4592f6" />
                        <Text style={{marginLeft:10,fontSize:18}}>Contact Us</Text>    
                    </View>
                    <AntDesign name="right" size={24} color="#d8d8d8" />
               </View>
               <View  style={{display:'flex',justifyContent:'space-between',
               flexDirection:'row',backgroundColor:'#ffffff',
               marginHorizontal:20,
               paddingHorizontal:10,
               paddingVertical:15,
               borderRadius:10,
               marginVertical:15
            }}>
                    <View  style={{display:'flex',justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
                    <MaterialIcons name="logout" size={24} color="#4592f6" />
                        <Text style={{marginLeft:10,fontSize:18}}>Log Out</Text>    
                    </View>
                    <AntDesign name="right" size={24} color="#d8d8d8" />
               </View>
               
           </View>
           </ScrollView>
           </View>
    )
}