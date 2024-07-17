import { Image, StyleSheet, Platform, Button, View, Text} from 'react-native';
import { ThemedText } from './ThemedText';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

export function LoginView({ navigation }:any) {
    const [userName, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const loginApi = "http://192.168.1.7:8080";
    const handleLogin = () => {
      fetch(loginApi)
      //.then(response => response.json())
      .then(data => {
        if(data.status ===200){
          console.log("success");
          navigation.navigate("PatientDashboard");
        }
        console.log(data);
        //navigation.navigate("Register");
      })
      .catch(error => console.error(error));
      console.log("usernem"+ userName);
    }

    const handleReset = () => {
      setUsername('');
      setPassword('');
    }

    return (
        <GestureHandlerRootView>
          <SafeAreaView style={styles.container}>
              <View style={styles.textContainer}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textStyle}>User Name:</Text>
                  <Text style={styles.mandatoryFieldStyle}>*</Text>
                </View>
                <TextInput
                  style={styles.input}
                  onChangeText={setUsername}
                  value={userName}
                />
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textStyle}>Password:</Text>
                  <Text style={styles.mandatoryFieldStyle}>*</Text>
                </View>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  onChangeText={setPassword}
                  value={password}
                />
              </View>
              <View style={{ flexDirection:"row", justifyContent:'center' }} >
                <View style={styles.buttonStyle}>
                  <Button title="Login" onPress={handleLogin} />
                </View>
                <View style={styles.buttonStyle} >
                  <Button title="Reset" onPress={handleReset} />
                </View>
              </View>
          </SafeAreaView> 
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent:'center'
    //alignItems : "center",
    paddingTop: 100,
    backgroundColor: "white"
  },
  textContainer : {
    margin:10
  },
  textStyle: {
    marginLeft: 10,
    alignItems: "flex-start"
  },
  input: {
    height: 40,
    marginTop: 10,
    marginBottom:20,
    borderWidth: 1,
    padding: 10,
    width:'100%',
  },
  buttonStyle: {
    margin:10
  },
  mandatoryFieldStyle: {
    color: "red",
  },
});