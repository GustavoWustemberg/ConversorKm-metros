import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';

export default function App() {
  const [km, setKm] = useState(0);
  let metros;
  function Calcular(){
    metros = km * 1000;
    Alert.alert('Conversor', `${km}km equivalem a ${metros}m`);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de quilometros para metros</Text>
      <TextInput style={styles.inputTemperature} 
      placeholder='Informe a distância em quilometros'
      keyboardType='numeric'
      onChangeText={(km) => setKm(km)}
      />

      <TouchableOpacity onPress={Calcular}>   
      <Text style={styles.buttonCalculed}>Calcular</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6060FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    fontSize: 22,
    color: '#FFF',
  },
  buttonCalculed: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTemperature: {
    backgroundColor: '#fff',
    color: '#000',
    margin: 15,
    padding: 10,
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 1,
  },
});
