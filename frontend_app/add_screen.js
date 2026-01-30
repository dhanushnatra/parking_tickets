import { View,TextInput,TouchableOpacity,StyleSheet,Text} from "react-native";
import  {useState} from 'react';

export default function AddScreen({ navigation }){

    const [owner_name ,set_owner_name] = useState('')
    const [description,set_description] = useState('')
    const [vehicle_number , set_vehicle_number] = useState('')

    return <View style={styles.container}>

        <Text style={{color:"#9D8AA6",fontSize:30}} >
            Add Vehicle Details
        </Text>

        <TextInput placeholderTextColor={'#9D8AA6'} style={styles.txt_inp} onChangeText={(value)=>{set_vehicle_number(value)}} value={vehicle_number} placeholder="Vehicle Number"></TextInput>

        <TextInput placeholderTextColor={'#9D8AA6'} style={styles.txt_inp} onChangeText={(value)=>{set_owner_name(value)}} value={owner_name} placeholder="vehicle Owner Name"></TextInput>

        <TextInput placeholderTextColor={'#9D8AA6'} style={styles.txt_inp} onChangeText={(value)=>{set_description(value)}}  value={description} placeholder="Vehicle Description" ></TextInput>
    
        <TouchableOpacity style={styles.sub_btn} onPress={()=>{
            console.log('tried adding',{owner_name,description,vehicle_number})
            navigation.navigate('home')
        }}>
            <Text style={{color:"#9D8AA6",fontSize:20}}>Add</Text>
        </TouchableOpacity>
    </View>
} 


const styles = StyleSheet.create({
    container :{
        flex:1,padding:12,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:30,
        paddingHorizontal:30,
        backgroundColor:'#251430'
    },
    txt_inp:{
        paddingHorizontal:20,
        paddingVertical:10,
        fontSize:20,
        borderColor:'#9D8AA6',
        borderWidth:1,
        width:'100%',
        height:50,
        backgroundColor:'#31164A',
        borderRadius:20,
        color:'#9D8AA6',
    },
    sub_btn:{
        backgroundColor:'#31164A',
        width:'26%',
        alignSelf:'flex-end',
        height:50,
        paddingHorizontal:20,
        paddingVertical:10,
        fontSize:20,
        borderColor:'#9D8AA6',
        borderWidth:1,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
    }
})