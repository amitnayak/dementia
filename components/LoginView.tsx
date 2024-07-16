import { Image, StyleSheet, Platform, Button, View, Text} from 'react-native';
import { ThemedText } from './ThemedText';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';

export function LoginView({ navigation }:any) {
    const [userName, onUserNameChange] = React.useState('');
    const [password, onPasswordChange] = React.useState('');

    const handleLogin = () => {

    }

    const handleReset = () => {

    }

    return (
        <GestureHandlerRootView>
          <View style={styles.container}>
            <SafeAreaView>
              <Text style={styles.textStyle}>User Name:</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={onUserNameChange}
                  value={userName}
                />
            </SafeAreaView>
            <SafeAreaView>
              <Text style={styles.textStyle}>Password:</Text>
                <TextInput
                  secureTextEntry={true}
                  style={styles.input}
                  onChangeText={onPasswordChange}
                  value={password}
                />
            </SafeAreaView>
            <View style={{ flexDirection:"row" }} >
              <View style={styles.buttonStyle}>
                <Button title="Login" onPress={handleLogin} />
              </View>
              <View style={styles.buttonStyle} >
                <Button title="Reset" onPress={handleReset} />
              </View>
            </View>
          </View> 
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
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  buttonStyle: {
    margin:10
  }
});