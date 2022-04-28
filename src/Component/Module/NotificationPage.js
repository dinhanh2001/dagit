import {View, Text} from 'react-native';
export default function NotificationPage(){
    return (
        <View style={{position:'absolute',top:0,bottom:0,left:0,right:0}}>
            <Text style={{textAlign:'center',paddingVertical:20,fontSize:20,backgroundColor:"#ffffff"}}>Notification</Text>
            <View >
                <View style={{paddingHorizontal:20,paddingTop:20}}>
                    <Text style={{fontSize:20,fontWeight:'600'}}>Today</Text>
                    <View style={{
                        backgroundColor:'#ffffff',
                        paddingVertical:10,
                        paddingHorizontal:30,
                        height:80,
                        borderRadius:10,
                        shadowOffset:{
                            width:5,
                            height:5
                        },
                        shadowColor:'#d8d8d8',
                        shadowOpacity:1,
                        shadowRadius:10,
                        marginVertical:5
                    }}>
                        <Text style={{fontSize:18,fontWeight:"600"}}>
                            There'll be a meeting at 1 p.m ,so be prepared
                        </Text>
                        <Text style={{color:'#4592f6',fontWeight:'600',marginTop:10}}>11:36</Text>
                    </View>
                    <Text style={{fontSize:20,fontWeight:'600',marginTop:10}}>
                        Yesterday
                    </Text>
                    <View style={{
                        backgroundColor:'#ffffff',
                        paddingVertical:10,
                        height:80,
                        paddingHorizontal:30,
                        borderRadius:10,
                        shadowOffset:{
                            width:5,
                            height:5
                        },
                        shadowColor:'#d8d8d8',
                        shadowOpacity:1,
                        shadowRadius:10,
                        marginVertical:5
                    }}>
                        <Text style={{fontSize:18,fontWeight:"600"}}>
                            Your overtime request has been approved
                        </Text>
                        <Text style={{color:'#4592f6',fontWeight:'600',marginTop:10}}>14:20</Text>
                    </View>
                    <View style={{
                        backgroundColor:'#ffffff',
                        paddingVertical:10,
                        height:80,
                        paddingHorizontal:30,
                        borderRadius:10,
                        shadowOffset:{
                            width:5,
                            height:5
                        },
                        shadowColor:'#d8d8d8',
                        shadowOpacity:1,
                        shadowRadius:10,
                        marginVertical:5
                    }}>
                        <Text style={{fontSize:18,fontWeight:"600"}}>
                            Your vacationleaves has been rejected
                        </Text>
                        <Text style={{color:'#4592f6',fontWeight:'600',marginTop:10}}>10:44</Text>
                    </View>
                    
                </View>
            </View>
            <Text style={{color:'#4592f6', position:'absolute',bottom:20,left:'45%',fontSize:18}}>
                        Clear All
                    </Text>
        </View>
    )
}