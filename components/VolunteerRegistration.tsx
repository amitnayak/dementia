import {
  Image,
  StyleSheet,
  Platform,
  Button,
  View,
  Text,
  BackHandler,
  ScrollView,
} from "react-native";
import { ThemedText } from "./ThemedText";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Dropdown } from "react-native-element-dropdown";

const professionDropDownData = [
  { label: "Software Engineer", value: "software engineer" },
  { label: "Data Scientist", value: "data scientist" },
  { label: "Product Manager", value: "product manager" },
  { label: "Graphic Designer", value: "graphic designer" },
  { label: "Civil Engineer", value: "civil engineer" },
  { label: "Mechanical Engineer", value: "mechanical engineer" },
  { label: "Electrical Engineer", value: "electrical engineer" },
  { label: "Marketing Specialist", value: "marketing specialist" },
  { label: "Financial Analyst", value: "financial analyst" },
];

const genderDropDownData = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

const availableDoWDropDownData = [
  { label: "Monday", value: "monday" },
  { label: "Tuesday", value: "tuesday" },
  { label: "Wednesday", value: "wednesday" },
  { label: "Thursday", value: "thursday" },
  { label: "Friday", value: "friday" },
  { label: "Saturday", value: "saturday" },
  { label: "Sunday", value: "sunday" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: "center",
  },
  textStyle: {
    marginLeft: 10,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
  buttonStyle: {
    margin: 10,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  dropdown: {
    backgroundColor: "white",
    borderRadius: 0,
    borderColor: "black",
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  mandatoryFieldStyle: {
    color: "red",
  },
  scrollView: {
    marginHorizontal: 10,
  },
});

export function VolunteerRegistration({ navigation }: any) {
  const [name, onNameChange] = React.useState("");
  const [profession, onProfessionChange] = React.useState("");
  const [gender, onGenderChange] = React.useState("");
  const [availableDoW, onAvailableDoW] = React.useState("");
  const [email, onEmailChange] = React.useState("");
  const [contact, onContactChange] = React.useState("");
  const [yourLocation, onYourLocationChange] = React.useState("");
  const [username, onUserNameChange] = React.useState("");
  const [password, onPasswordChange] = React.useState("");
  const [confirmPassword, onConfirmPasswordChange] = React.useState("");
  const [isFocus, setIsFocus] = React.useState(false);

  const handleRegister = () => {
    navigation.navigate("MSPDashboard");
  };

  const handleReset = () => {};

  return (
    <GestureHandlerRootView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <SafeAreaView>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textStyle}>Name</Text>
              <Text style={styles.mandatoryFieldStyle}>*</Text>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={onNameChange}
              value={name}
            />
          </SafeAreaView>
          <SafeAreaView>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textStyle}>Profession</Text>
              <Text style={styles.mandatoryFieldStyle}>*</Text>
            </View>
            <Dropdown
              data={professionDropDownData}
              placeholder="Select profession"
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              minHeight={50}
              labelField="label"
              value={profession}
              valueField="value"
              onChange={(item) => {
                onProfessionChange(item.value);
                setIsFocus(false);
              }}
            />
          </SafeAreaView>
          <SafeAreaView>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textStyle}>Gender</Text>
              <Text style={styles.mandatoryFieldStyle}>*</Text>
            </View>
            <Dropdown
              data={genderDropDownData}
              style={styles.dropdown}
              placeholder="Select Gender"
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              minHeight={50}
              labelField="label"
              value={gender}
              valueField="value"
              onChange={(item) => {
                onGenderChange(item.value);
                setIsFocus(false);
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textStyle}>Available days of week</Text>
              <Text style={styles.mandatoryFieldStyle}>*</Text>
            </View>
            <Dropdown
              data={availableDoWDropDownData}
              style={styles.dropdown}
              placeholder="Select available days of week"
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              minHeight={50}
              labelField="label"
              value={availableDoW}
              valueField="value"
              onChange={(item) => {
                onAvailableDoW(item.value);
                setIsFocus(false);
              }}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textStyle}>Email</Text>
              <Text style={styles.mandatoryFieldStyle}>*</Text>
            </View>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              onChangeText={onEmailChange}
              value={email}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textStyle}>Contact</Text>
              <Text style={styles.mandatoryFieldStyle}>*</Text>
            </View>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              onChangeText={onContactChange}
              value={contact}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textStyle}>Your location</Text>
              <Text style={styles.mandatoryFieldStyle}>*</Text>
            </View>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              onChangeText={onYourLocationChange}
              value={yourLocation}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textStyle}>Enter preferred username:</Text>
              <Text style={styles.mandatoryFieldStyle}>*</Text>
            </View>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              onChangeText={onUserNameChange}
              value={username}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textStyle}>Password:</Text>
              <Text style={styles.mandatoryFieldStyle}>*</Text>
            </View>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              onChangeText={onPasswordChange}
              value={password}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.textStyle}>Confirm Password:</Text>
              <Text style={styles.mandatoryFieldStyle}>*</Text>
            </View>
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              onChangeText={onConfirmPasswordChange}
              value={confirmPassword}
            />
          </SafeAreaView>
          <View
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <View style={styles.buttonStyle}>
              <Button title="Register" onPress={handleRegister} />
            </View>
            <View style={styles.buttonStyle}>
              <Button title="Reset" onPress={handleReset} />
            </View>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
