import { Image, StyleSheet, Platform, Button, View, Text} from 'react-native';
import { ThemedText } from './ThemedText';
import { GestureHandlerRootView, ScrollView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { AntDesign } from '@expo/vector-icons';

export function PatientSignupView({ navigation }:any) {
    const [patientName, onPatientNameChange] = React.useState('');
    const [number, onAgeChange] = React.useState('');
    const [caretakerName, onCaretakerNameChange] = React.useState('');
    const [caretakerEmail, onCaretakerEmailChange] = React.useState('');
    const [caretakerContact, onCaretakerContactChange] = React.useState('');
    const [conditionDesc, onConditonDescChange] = React.useState('');
    const [username, onUsernameChange] = React.useState('');
    const [password, onPasswordChange] = React.useState('');
    const [confirmPassword, onConfirmPasswordChange] = React.useState('');
    const [gender, onGenderChange] = React.useState('');
    const [dementiaType, onDementiaTypeChange] = React.useState('');
    const [dementiaStage, ondementiaStageChange] = React.useState('');

    const [value, setValue] = React.useState();
    const [isFocus, setIsFocus] = React.useState(false);

    const handleLogin = () => {

    }

    const handleReset = () => {

    }

    const genders = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Others', value: 'other' },
      ];
    const dementiaTypes = [
        { label: "Alzheimer's Disease", value: 'Alz' },
        { label: 'Vascular Dementia', value: 'vd' },
        { label: 'Lewy Body Dementia (LBD)', value: 'lbd' },
        { label: 'Frontotemporal Dementia (FTD)', value: 'ftd' },
        { label: 'Mixed Dementia', value: 'md' },
        { label: "Parkinson's Disease Dementia", value: 'pdd' },
        { label: 'Creutzfeldt-Jakob Disease (CJD)', value: 'cjd' },
        { label: "Huntington's Disease", value: 'hd' },
        { label: 'Wernicke-Korsakoff Syndrome', value: 'wsk' },
        { label: 'Normal Pressure Hydrocephalus (NPH)', value: 'nph' },
        { label: 'Posterior Cortical Atrophy (PCA)', value: 'pca' },
      ];
      const stages = [
        { label: 'Mild', value: 'mild' },
        { label: 'Moderate', value: 'moderate' },
        { label: 'Severe', value: 'severe' },
        { label: 'Very Severe', value: 'verysevere' },
      ];

    return (
        <GestureHandlerRootView>
            <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <SafeAreaView>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textStyle}>Patient Name:</Text>
                    <Text style={styles.mandatoryFieldStyle}>*</Text>
                </View>
                <TextInput
                  style={styles.input}
                  onChangeText={onPatientNameChange}
                  value={patientName}
                />
            </SafeAreaView>
            <SafeAreaView>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textStyle}>Patient Age:</Text>
              <Text style={styles.mandatoryFieldStyle}>*</Text>
            </View>
                <TextInput
                  secureTextEntry={true}
                  style={styles.input}
                  onChangeText={onAgeChange}
                  value={number}
                />
            </SafeAreaView>
            <SafeAreaView>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.textStyle}>Patient Gender:</Text>
                <Text style={styles.mandatoryFieldStyle}>*</Text>
            </View>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={genders}
                maxHeight={100}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select gender' : '...'}
                searchPlaceholder="Search..."
                value={gender}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    onGenderChange(item.value);
                    setIsFocus(false);
                }}
                />
            </SafeAreaView>
            <SafeAreaView>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.textStyle}>Caretaker Name:</Text>
                <Text style={styles.mandatoryFieldStyle}>*</Text>
            </View>
                <TextInput
                  style={styles.input}
                  onChangeText={onCaretakerNameChange}
                  value={caretakerName}
                />
            </SafeAreaView>
            <SafeAreaView>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.textStyle}>Caretaker Email:</Text>
                <Text style={styles.mandatoryFieldStyle}>*</Text>
            </View>
                <TextInput
                  style={styles.input}
                  onChangeText={onCaretakerEmailChange}
                  value={caretakerEmail}
                />
            </SafeAreaView>
            <SafeAreaView>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textStyle}>Caretaker Contact:</Text>
                <Text style={styles.mandatoryFieldStyle}>*</Text>
            </View>
                <TextInput
                  style={styles.input}
                  onChangeText={onCaretakerContactChange}
                  value={caretakerContact}
                />
            </SafeAreaView>
            <SafeAreaView>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.heading}>Provide medical condition details</Text>
                <Text style={styles.mandatoryFieldStyle}>*</Text>
            </View>
            </SafeAreaView>
            <SafeAreaView>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.textStyle}>Dementia Type:</Text>
                <Text style={styles.mandatoryFieldStyle}>*</Text>
            </View>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={dementiaTypes}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select type' : '...'}
                    searchPlaceholder="Search..."
                    value={dementiaType}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        onDementiaTypeChange(item.value);
                        setIsFocus(false);
                    }}
                    />
            </SafeAreaView>
            <SafeAreaView>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.textStyle}>Stage:</Text>
                <Text style={styles.mandatoryFieldStyle}>*</Text>
            </View>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={stages}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select type' : '...'}
                    searchPlaceholder="Search..."
                    value={dementiaStage}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        ondementiaStageChange(item.value);
                        setIsFocus(false);
                    }}
                    />
            </SafeAreaView>
            <SafeAreaView>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textStyle}>Condition Description:</Text>
                <Text style={styles.mandatoryFieldStyle}>*</Text>
            </View>
                <TextInput
                  style={styles.input}
                  onChangeText={onConditonDescChange}
                  value={conditionDesc}
                />
            </SafeAreaView>
            <SafeAreaView>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textStyle}>Preferred Username</Text>
                <Text style={styles.mandatoryFieldStyle}>*</Text>
            </View>
                <TextInput
                  style={styles.input}
                  onChangeText={onUsernameChange}
                  value={username}
                />
            </SafeAreaView>
            <SafeAreaView>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textStyle}>Password</Text>
                <Text style={styles.mandatoryFieldStyle}>*</Text>
            </View>
                <TextInput
                  style={styles.input}
                  onChangeText={onPasswordChange}
                  value={password}
                />
            </SafeAreaView>
            <SafeAreaView>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textStyle}>Confirm Password</Text>
                <Text style={styles.mandatoryFieldStyle}>*</Text>
            </View>
                <TextInput
                  style={styles.input}
                  onChangeText={onConfirmPasswordChange}
                  value={confirmPassword}
                />
            </SafeAreaView>
            <View style={{ flexDirection:"row", justifyContent: "center" }} >
              <View style={styles.buttonStyle}>
                <Button title="Register" onPress={handleLogin} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent:'center'
  },
  textStyle: {
    marginLeft: 10,
  },
  heading: {
    margin: 10,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    marginTop: 2,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  buttonStyle: {
    margin:10
  },
  dropdown: {
    height: 40,
    margin: 10,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
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
  icon: {
    marginRight: 5,
  },
  scrollView: {
    marginHorizontal: 10
  },
  mandatoryFieldStyle: {
    color: "red",
  },
});