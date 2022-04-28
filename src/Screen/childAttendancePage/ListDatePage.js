import { useRef, useState } from 'react';
import {View, Text, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontSize } from '../../Style/Color';
const data =[
    {
        id:0,
        dateMain:'13 August 2020',
        active:'Late',
        datedetail:'13 August 2020',
        checkin:'09:30',
        checkout:'16: 30',
        late:'30 Minutes',
        colorActive:'red'
    },
    {
        id:1,
        dateMain:'25 August 2022',
        active:'Present',
        datedetail:'25 August 2022',
        checkin:'05:30',
        checkoutlate:'12: 30',
        late:'34 Minutes',
        colorActive:'green'
    }
]
export default function ListDatePage(){
    const [mout,unmout] = useState(false)
   
    function DetailsDate({id,dateMain,active,color,datedetail,checkin,checkout,late}){
        return (
            <View  style={{marginHorizontal:20,marginBottom:10}}>
                    <View style={{
                        display:'flex',
                        flexDirection:'row',
                        borderWidth:1,
                        borderColor:'#d7d7d7',backgroundColor:'#ffffff',
                        justifyContent:'space-around',alignItems:'center',
                        borderRadius:10,
                        paddingVertical:15,
                        shadowOffset:{
                            width:3,
                            height:10
                        },
                        shadowColor:'#d8d8d8',
                        shadowOpacity:1,
                        shadowRadius:5,
                        marginBottom:2
                }} >
                        <Text
                        style={{color:'#5fa0e7',fontWeight:'600',fontSize:18}}
                        onPress={()=>unmout(!mout)}>{dateMain}</Text>
                        <View  style={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-around',alignItems:'center',
                      
                }} >
                            <Text style={{marginRight:5,color:'red'}}>{active}</Text>
                            <AntDesign name="down" size={20} color="black" />
                        </View>
                    </View>
                    {!mout ? <View style={{paddingHorizontal:15,
                    display:'flex',
                    flexDirection:'row',
                    backgroundColor:'#ffffff',
                    paddingVertical:5,
                    borderRadius:5    
                }}>
                        <View style={{marginRight:10}}>
                            <Text style={{color:'#5fa0e7',paddingVertical:3,fontSize:FontSize.small}}>Date :</Text>
                            <Text style={{color:'#5fa0e7',paddingVertical:3,fontSize:FontSize.small}}>Check in :</Text>
                            <Text style={{color:'#5fa0e7',paddingVertical:3,fontSize:FontSize.small}}>Check out :</Text>
                            <Text style={{color:'#5fa0e7',paddingVertical:3,fontSize:FontSize.small}}>Late</Text>
                        </View>
                        <View>
                            <Text style={{paddingVertical:3,fontSize:FontSize.small}}>{datedetail}</Text>
                            <Text style={{paddingVertical:3,fontSize:FontSize.small}}>{checkin}</Text>
                            <Text style={{paddingVertical:3,fontSize:FontSize.small}}>{checkout}</Text>
                            <Text style={{paddingVertical:3,fontSize:FontSize.small}}>{late}</Text>
                        </View>
                    </View>
                    :
                    <View></View>}
            </View>
        )
    }
    return (
        <ScrollView>
           <DetailsDate dateMain={data[0].dateMain} color='red' active={data[0].active} datedetail={data[0].datedetail} checkin={data[0].checkin} checkout={data[0].checkout} late={data[0].late}/>
           <View style={{marginHorizontal:20,marginBottom:10}}>
           <View style={{
                        display:'flex',
                        flexDirection:'row',
                        borderWidth:1,
                        borderColor:'#d7d7d7',backgroundColor:'#ffffff',
                        justifyContent:'space-around',alignItems:'center',
                        borderRadius:10,
                        paddingVertical:15,
                        shadowOffset:{
                            width:3,
                            height:5
                        },
                        shadowColor:'#d8d8d8',
                        shadowOpacity:1,
                        shadowRadius:5,
                        marginBottom:2
                }} >
                        <Text
                        style={{color:'#5fa0e7',fontWeight:'600',fontSize:18}}
                        onPress={()=>unmout(!mout)}>12 August 2020</Text>
                        <View  style={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-around',alignItems:'center',
                      
                }} >
                            <Text style={{marginRight:5,color:'green'}}>Present</Text>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </View>
           </View>
           <View style={{marginHorizontal:20,marginBottom:10}}>
           <View style={{
                        display:'flex',
                        flexDirection:'row',
                        borderWidth:1,
                        borderColor:'#d7d7d7',backgroundColor:'#ffffff',
                        justifyContent:'space-around',alignItems:'center',
                        borderRadius:10,
                        paddingVertical:15,
                        shadowOffset:{
                            width:3,
                            height:5
                        },
                        shadowColor:'#d8d8d8',
                        shadowOpacity:1,
                        shadowRadius:5,
                        marginBottom:2
                }} >
                        <Text
                        style={{color:'#5fa0e7',fontWeight:'600',fontSize:18}}
                        onPress={()=>unmout(!mout)}>11 August 2020</Text>
                        <View  style={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-around',alignItems:'center',
                      
                }} >
                            <Text style={{marginRight:5,color:'green'}}>Present</Text>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </View>
           </View>
           <View style={{marginHorizontal:20,marginBottom:10}}>
           <View style={{
                        display:'flex',
                        flexDirection:'row',
                        borderWidth:1,
                        borderColor:'#d7d7d7',backgroundColor:'#ffffff',
                        justifyContent:'space-around',alignItems:'center',
                        borderRadius:10,
                        paddingVertical:15,
                        shadowOffset:{
                            width:3,
                            height:5
                        },
                        shadowColor:'#d8d8d8',
                        shadowOpacity:1,
                        shadowRadius:5,
                        marginBottom:2
                }} >
                        <Text
                        style={{color:'#5fa0e7',fontWeight:'600',fontSize:18}}
                        onPress={()=>unmout(!mout)}>10 August 2020</Text>
                        <View  style={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-around',alignItems:'center',
                      
                }} >
                            <Text style={{marginRight:5,color:'orange'}}>Present</Text>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </View>
           </View>
           <View style={{marginHorizontal:20,marginBottom:10}}>
           <View style={{
                        display:'flex',
                        flexDirection:'row',
                        borderWidth:1,
                        borderColor:'#d7d7d7',backgroundColor:'#ffffff',
                        justifyContent:'space-around',alignItems:'center',
                        borderRadius:10,
                        paddingVertical:15,
                        shadowOffset:{
                            width:3,
                            height:5
                        },
                        shadowColor:'#d8d8d8',
                        shadowOpacity:1,
                        shadowRadius:5,
                        marginBottom:2
                }} >
                        <Text
                        style={{color:'#5fa0e7',fontWeight:'600',fontSize:18}}
                        onPress={()=>unmout(!mout)}>08 August 2020</Text>
                        <View  style={{
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-around',alignItems:'center',
                      
                }} >
                            <Text style={{marginRight:5,color:'red'}}>late</Text>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </View>
           </View>
           
        </ScrollView>
    )
}