import {useEffect, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput,FlatList,Image, Alert} from 'react-native';
import { base_ip,get_all_tickets, set_ip } from './api_calls';
import TicketTile from './ticket_tile'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export default function Home({ navigation }) {
  const [ip, setIp] = useState(base_ip)
  const [tickets,setTickets]=useState([]);

  useEffect(()=>{
    (async()=>{
      try{
        await set_ip(ip);
        const data = await get_all_tickets();
        setTickets(data);
      }
      catch (error){
        Alert.alert('failed get all',
                    'fetch all tickets failed',
                    )
                [{text: 'OK', onPress: () => {}}]
        console.log(error);
      }
    })();
  },[ip])

  const fetch_new_ip = async()=>{
      try{
        await set_ip(ip);
        const data = await get_all_tickets();
        setTickets(data);
      }
      catch (error){
        Alert.alert('failed get all',
                    'fetch all tickets failed',
                    )
                [{text: 'OK', onPress: () => {}}]
        console.log(error);
      }
    }

  async function fetch_all(){
    try{
        await set_ip(ip);
        const data = await get_all_tickets();
        setTickets(data);
      }
      catch (error){
        Alert.alert('failed get all',
                    'fetch all tickets failed',
                    )
                [{text: 'OK', onPress: () => {}}]
        console.log(error);
      }
  }

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.NavText}>Parking Tickets</Text>
        <TouchableOpacity onPress={() => navigation.navigate('addScreen')}>
          <Image source={require('./assets/add.png')} style={{}}/>
        </TouchableOpacity>
      </View>
        <TextInput 
        value={ip} 
        onChange={setIp} 
        onSubmitEditing={fetch_new_ip}
        placeholder='Enter Backend ip'
        style={styles.textInp}
        placeholderTextColor={"#9D8AA6"}
      />
      <View style={styles.flatlist}>
        <Text style={{fontSize:20,color:'#9D8AA6',marginBottom:10}}>All Tickets</Text>
      <FlatList
        data={tickets}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TicketTile 
            owner_name={item['owner_name']} 
            vehicle_number={item['vehicle_number']} 
            amount={item['amount']}
            description={item['description']}
            parked_at={item['parked_at']}
            onDelete={fetch_all} 
          />
                )}
      />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  plusBtn:{
    backgroundColor:'#31164A',
    paddingHorizontal:18,
    paddingVertical:10,
    borderRadius:'30%'
  },
  container: {
    flex: 1,
    backgroundColor: '#251430',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent:'space-between',
    paddingBottom:10,
  },
  NavText: {
    fontSize:30,
    color: "#9D8AA6"
  },
  text: {
    color: "#9D8AA6"
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  textInp:{
    backgroundColor:'#251430',
    paddingHorizontal:10,
    paddingVertical:8,
    color: "#9D8AA6",
    fontSize:25,
    borderColor:"#9D8AA6",
    borderWidth:1,
    borderRadius:10,
  },
  flatlist:{
    marginVertical:10,
  }
});
