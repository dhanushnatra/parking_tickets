import {useEffect, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput,FlatList } from 'react-native';
import { base_ip,get_all_tickets } from './api_calls';
import TicketTile from './ticket_tile'

export default function Home({ navigation }) {
  const [ip, setIp] = useState('')
  const [tickets,setTickets]=useState(
    [
      {owner_name:"raju",amount:200,vehicle_number:"apadwadada"},
      {owner_name:"raju",amount:200,vehicle_number:"apadwadada"},
      {owner_name:"raju",amount:200,vehicle_number:"apadwadada"},
      {owner_name:"raju",amount:200,vehicle_number:"apadwadada"},
      {owner_name:"raju",amount:200,vehicle_number:"apadwadada"},
      {owner_name:"raju",amount:200,vehicle_number:"apadwadada"},
      {owner_name:"raju",amount:200,vehicle_number:"apadwadada"},
    ]
  );

  useEffect(()=>{
    (async()=>{
      try{
        const data = await get_all_tickets();
        setTickets(data);
      }
      catch (error){
        console.log(error);
      }
    })();
  },[])



  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.NavText}>Parking Tickets</Text>
        <TouchableOpacity onPress={() => navigation.navigate('addScreen')}  style={styles.plusBtn}>
          <Text style={styles.NavText}>+</Text>
        </TouchableOpacity>
      </View>
        <TextInput 
        value={ip} 
        onChange={(val) => {setIp(val)}} 
        placeholder='Enter Backend ip'
        style={styles.textInp}
        placeholderTextColor={"#9D8AA6"}
      />
      <View >
      <FlatList
        data={tickets}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TicketTile owner_name={item['owner_name']} vehicle_number={item['vehicle_number']} amount={item['amount']}/>
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
  textInp:{
    backgroundColor:'#251430',
    paddingHorizontal:10,
    paddingVertical:8,
    color: "#9D8AA6",
    fontSize:25,
    borderColor:"#9D8AA6",
    borderWidth:1,
    borderRadius:10,
  }
});
