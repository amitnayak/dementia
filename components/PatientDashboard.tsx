import { Image, StyleSheet, Platform, Button, View, Text } from 'react-native';
import { ThemedText } from './ThemedText';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import React, { useState } from 'react';

export function PatientDashboard({ navigation }:any) {
  const [userName, onUserNameChange] = React.useState('');
  const [password, onPasswordChange] = React.useState('');
  const [confirmPassword, onConfirmPasswordChange] = useState('');

  const patientName ="test";
  const patientAge ="50";
  const careTakerContact ="0000000000";

  const patientList  = [{name: 'Name1', loc: 'Loc1'}, {name: 'Name2', loc: 'Loc2'}, {name: 'Name3', loc: 'Loc3'}]
  let patientsRenderList = [];
  

  const handleChangeLoc = () => {

  }

  const handleReset = () => {

  }

  return (
      <GestureHandlerRootView>
        <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
              <View>
                <Image source={require("@/assets/images/patient-profile.jpg")} style={styles.profileImg} />
              </View>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textStyle}>Patient Name:</Text>
                  <Text>{patientName}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textStyle}>Patient Age:</Text>
                  <Text>{patientAge}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textStyle}>Care Taker Contact:</Text>
                  <Text>{careTakerContact}</Text>
                 </View>
                 <View>
                    <View style={styles.buttonStyle}>
                      <Button title="Change My Location" onPress={handleChangeLoc} />
                    </View>
                    <View style={styles.buttonStyle} >
                      <Button title="Increase My Circle of Influence" onPress={handleReset} />
                    </View>
                  </View>
                  {/* <TextInput
                    style={styles.input}
                    onChangeText={onUserNameChange}
                    value={userName}
                  /> */}
              </View>
            </View>
            <View>
              <View>
                <Text style={styles.subHeading}>Patient around me (10 km radius)</Text>
              </View>
            </View>
          {/* <View>
            <Text style={styles.textStyle}>Password:</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                onChangeText={onPasswordChange}
                value={password}
              />
          </View>
          <View>
            <Text style={styles.textStyle}>Confrim Password:</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                onChangeText={onConfirmPasswordChange}
                value={confirmPassword}
              />
          </View>
          <View style={{ flexDirection:"row" }} >
            <View style={styles.buttonStyle}>
              <Button title="Login" onPress={handleLogin} />
            </View>
            <View style={styles.buttonStyle} >
              <Button title="Reset" onPress={handleReset} />
            </View>
          </View> */}
        </View> 
      </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:60
    // alignItems: 'center',
    //justifyContent:'center'
  },
  textStyle: {
    marginLeft: 10,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  buttonStyle: {
    margin:5,
    //width:130
  },
  profileImg :{
    width:90,
    height:90
  },
  subHeading: {
    fontSize: 20,
    fontWeight:'500'
  }
});