import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import { delete_ticket } from './api_calls';


const changer_textMnth={
    1:'jan',
    2:'feb',
    3:'mar',
    4:'apr',
    5:'may',
    6:'jun',
    7:'jul',
    8:'aug',
    9:'sep',
    10:'oct',
    11:'nov',
    12:'dec'
}


function int_to_date(dict){
    return `${dict['day']}st ${changer_textMnth[dict['month']]}, ${dict['year']}`
}



const TicketCard = ({route, navigation}) => {
  const {owner_name, amount, vehicle_number, description, parked_at, onDelete} = route.params;
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#9D8AA6', fontSize: 18}}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.plate}>{vehicle_number}</Text>
          <TouchableOpacity onPress={async () => {
            try {
              await delete_ticket(vehicle_number);
              onDelete();
              navigation.goBack();
            } catch (error) {
              Alert.alert('Delete Failed', `Could not delete ticket for ${vehicle_number}`);
            }
          }}>
            <Image style={{
                        resizeMode: "contain",
                    }} source={require('./assets/trash.png')}
                />
          </TouchableOpacity>
        </View>

        {/* Body */}
        <View style={styles.content}>
          <Text style={styles.text}>belongs to :</Text>
          <Text style={styles.text}>{owner_name}</Text>

          <View style={styles.spacer} />

          <Text style={styles.text}>{description}</Text>
          

          <View style={styles.spacer} />

          <Text style={styles.text}>parked on : {int_to_date(parked_at)}</Text>
          <Text style={styles.text}>time : {parked_at['hour']}:{parked_at['minutes']}</Text>

          <View style={styles.spacer} />

          <Text style={styles.text}>amount : {amount}</Text>
        </View>
      </View>
    </View>
  );
};

export default TicketCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#251430",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "85%",
    backgroundColor: "#31164A",
    borderRadius: 24,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  plate: {
    color: "#9D8AA6",
    fontSize: 18,
    letterSpacing: 1,
  },
  content: {
    gap: 6,
  },
  text: {
    color: "#9D8AA6",
    fontSize: 14,
    letterSpacing: 0.5,
  },
  spacer: {
    height: 12,
  },
});