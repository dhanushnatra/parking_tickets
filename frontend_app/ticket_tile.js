import {View,Text,TouchableOpacity} from 'react-native';
import { delete_ticket } from './api_calls';

export default function TicketTile ({owner_name ,amount, vehicle_number}) {
    return  <View style={{
        paddingHorizontal:17,
        paddingVertical:12,
        backgroundColor: '#31164A',
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        marginTop:10,
        marginHorizontal:15,
    }}>
            <View style={{display:"flex",flexDirection:"column"}}>
                <Text style={{fontSize:20,...textStyle}} >{vehicle_number}</Text>
                <View  style={{display:"flex",flexDirection:"row",justifyContent:'space-around'}}>
                    <Text style={{fontSize:15,...textStyle}}>{owner_name}</Text>
                <Text style={{fontSize:15,...textStyle}}>${amount}</Text>
                </View>
            </View>
            
                <TouchableOpacity onPress={()=>console.log('remove'+{vehicle_number})}
                style={
                    {
                        backgroundColor:"#3C2650",
                        borderRadius:10,
                        paddingHorizontal:10,
                        paddingVertical:10,
                    }
                }
                
                >
                <Text style={{fontSize:15,...textStyle}}>Delete</Text>
                </TouchableOpacity>
            </View>
}

const textStyle = {
    color: "#9D8AA6"
  }