import { Image, StyleSheet, Platform, Button, View, Text } from "react-native";
import { ThemedText } from "./ThemedText";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";
import React, { useState } from "react";
//import { Avatar } from 'react-native-elements';

export function MSPDashboard({ navigation }: any) {
  const [userName, onUserNameChange] = React.useState("");
  const [password, onPasswordChange] = React.useState("");
  const [confirmPassword, onConfirmPasswordChange] = useState("");

  const patientName = "test";
  const patientAge = "50";
  const careTakerContact = "0000000000";

  const patientList = [
    { name: "Patient Name 1", loc: "Loc1" },
    { name: "Patient Name 2", loc: "Loc2" },
    { name: "Patient Name 3", loc: "Loc3" },
  ];
  const mspList = [
    { name: "Doctor/Nurse Name", loc: "Loc1" },
    { name: "Doctor/Nurse Name", loc: "Loc2" },
    { name: "Doctor/Nurse Name", loc: "Loc3" },
  ];
  const discussionList = [
    { name: "Discussion 1", loc: "Loc1" },
    { name: "Discussion 2", loc: "Loc2" },
    { name: "Discussion 3", loc: "Loc3" },
  ];
  let patientsRenderList = [];
  let mspRenderList = [];
  let discussionRenderList = [];

  for (let i = 0; i < patientList.length; i++) {
    patientsRenderList.push(
      <View key={i}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.item}> {patientList[i].name}</Text>
          <Text style={styles.item}> {patientList[i].loc}</Text>
        </View>
      </View>
    );
  }

  for (let i = 0; i < mspList.length; i++) {
    mspRenderList.push(
      <View key={i}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.item}> {mspList[i].name}</Text>
          <Text style={styles.item}> {mspList[i].loc}</Text>
        </View>
      </View>
    );
  }

  for (let i = 0; i < discussionList.length; i++) {
    discussionRenderList.push(
      <View key={i}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.item}> {discussionList[i].name}</Text>
          <Text style={styles.item}> {discussionList[i].loc}</Text>
        </View>
      </View>
    );
  }

  const handleChangeLoc = () => {};

  const handleReset = () => {};

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <View>
            {/* <Avatar icon={{name: 'user', type: 'font-awesome'}}
              size="large"
              showEditButton="true"
              onPress={() => console.log("Works!")}
              // activeOpacity={0.7}
              
              /> */}
            <Image
              source={require("@/assets/images/patient-profile.jpg")}
              style={styles.profileImg}
            />
          </View>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textStyle}>MSP Name:</Text>
              <Text>{patientName}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textStyle}>MSP Age:</Text>
              <Text>{patientAge}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textStyle}>MSP Contact:</Text>
              <Text>{careTakerContact}</Text>
            </View>
            <View>
              <View style={styles.buttonStyle}>
                <Button title="Change My Location" onPress={handleChangeLoc} />
              </View>
              <View style={styles.buttonStyle}>
                <Button
                  title="Increase My Circle of Influence"
                  onPress={handleReset}
                />
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
            <Text style={styles.subHeading}>
              Patient around me (10 km radius)
            </Text>
            {patientsRenderList}
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.subHeading}>Medical Help around me</Text>
            {mspRenderList}
          </View>
        </View>
        <View>
          <View>
            <Text style={styles.subHeading}>Discussion Forum</Text>
            {discussionRenderList}
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    padding: 10,
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
    margin: 5,
    //width:130
  },
  profileImg: {
    width: 90,
    height: 90,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: "500",
  },
  item: {
    fontSize: 16,
    padding: 5,
  },
});
