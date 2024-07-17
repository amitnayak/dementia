import {
  Image,
  StyleSheet,
  Platform,
  Button,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "./ThemedText";

export function DashboardView({ navigation }: any) {
  const handleResister = () => {
    console.log("register");
    navigation.navigate("Register");
  };
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  const handleSignupPatient = () => {};
  const handleSignupVolunteer = () => {
    navigation.navigate("VolunteerRegistration");
  };

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require("@/assets/images/bg-img.jpg")}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
          }}
        >
          <Text style={styles.text}>Dimentia Patient Care</Text>
        </ImageBackground>
      </View>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={styles.gapTop}>
          Dementia Care
        </ThemedText>
        <ThemedText style={styles.gapTop}>
          This application helps Dimentia patient care taker
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <View style={styles.buttonStyle}>
          <Button title="Login" onPress={handleLogin} />
        </View>
        <View style={styles.buttonStyle}>
          <Button title="Sign-Up as a Patient" onPress={handleSignupPatient} />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            title="Sign-Up as a medical Service Provider/Volunteer"
            onPress={handleSignupVolunteer}
          />
        </View>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  stepContainer: {
    // gap: 8,
    // marginBottom: 8,
  },
  dashboardLogo: {
    height: 500,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  buttonStyle: {
    margin: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
  },
  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 40,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  gapTop: {
    marginTop: 10,
    marginLeft: 10,
  },
});
