import {View,Text,TouchableOpacity,Alert,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { delete_ticket } from './api_calls';

export default function TicketTile ({owner_name ,amount, vehicle_number,description,parked_at,onDelete}) {
    const navigation = useNavigation();
    
    return  <TouchableOpacity onPress={()=>{navigation.navigate('fullDetails',{owner_name,amount,vehicle_number,description,parked_at,onDelete})}}>
        <View style={{
        paddingHorizontal:17,
        paddingVertical:12,
        backgroundColor: '#31164A',
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        marginTop:10,
        borderRadius:'10%',
        marginHorizontal:15,
    }}
    
    >
            <View style={{display:"flex",flexDirection:"column"}}>
                
                <Text style={{fontSize:23,...textStyle}}>{vehicle_number}</Text>
                <Text style={{fontSize:17,...textStyle}}>Cost ${amount}</Text>
                <Text style={{fontSize:15,...textStyle}}>Owner {owner_name}</Text>
            </View>
            
                <TouchableOpacity onPress={async()=>
                {
                    try{
                        await delete_ticket(vehicle_number);
                        onDelete()
                    }
                    catch{
                        Alert.alert('failed remove',
                            'vehicle Number'+{vehicle_number},
                            )
                        [{text: 'OK', onPress: () => {}}]
                        console.log('remove failed')
                    }
                    
                }}
                style={
                    {
                        backgroundColor:"#3C2650",
                        borderRadius:10,
                        paddingHorizontal:10,
                        paddingVertical:10,
                        height:'75%',
                        alignSelf:'center',
                    }
                }
                >
               <Image style={{
                        resizeMode: "contain",
                    }} source={require('./assets/trash.png')}
                />
                </TouchableOpacity>
            </View>
    </TouchableOpacity>
}

const textStyle = {
    color: "#9D8AA6"
  }