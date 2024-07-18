import { Image, StyleSheet, Platform, Button } from "react-native";

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RegisterView } from "@/components/RegisterView";
import { DashboardView } from "@/components/DashboardView";
import { LoginView } from "@/components/LoginView";
import { VolunteerRegistration } from "@/components/VolunteerRegistration";
import { PatientSignupView } from "@/components/PatientSignupView";
import { PatientDashboard } from "@/components/PatientDashboard";
import { MSPDashboard } from "@/components/MSPDashboard";

const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();

export default function HomeScreen() {
  const handleResister = () => {
    console.log("register");
  };
  const handleLogin = () => {
    console.log("Log in");
  };

  return (
    <>
      <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Dashboard">
          <Stack.Screen name="Dashboard" component={DashboardView} />
          <Stack.Screen name="Register" component={RegisterView} />
          <Stack.Screen name="Login" component={LoginView} />
          <Stack.Screen
            name="PatientSignupView"
            component={PatientSignupView}
          />
          <Stack.Screen
            name="VolunteerRegistration"
            component={VolunteerRegistration}
          />
          <Stack.Screen name="PatientDashboard" component={PatientDashboard} />
          <Stack.Screen name="MSPDashboard" component={MSPDashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

    //     <NavigationContainer independent={true}>
    //   <Stack.Navigator initialRouteName="Dashboard">
    //   <Stack.Screen name="Dashboard" component={DashboardView} />
    //   <Stack.Screen name="Register" component={RegisterView} />
    //     {/* <Stack.Screen name="Root" component={BottomTab} />
    //     <Drawer.Screen name="Home" component={HomePage} />
    //     <Drawer.Screen name="Profile" component={ProfilePage} />
    //     <Drawer.Screen name="Listing" component={ListingPage} />
    //     <Drawer.Screen name="LogOut" component={LogIn} /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
    //      <ThemedView style={styles.stepContainer}>
    //    {/* <ThemedText type="subtitle">Step 2: Explore</ThemedText> */}
    //    <Button title="Register" onPress={handleResister} />
    //    <Button title="Log in" onPress={handleLogin} />
    //    {/* <ThemedText>
    //      Tap the Explore tab to learn more about what's included in this starter app.
    //    </ThemedText> */}
    //  </ThemedView>
    // <NavigationContainer independent={true}>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Register" component={RegisterView} />
    //     {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
  // return (
  //   <ParallaxScrollView
  //     headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
  //     headerImage={
  //       <Image
  //         source={require('@/assets/images/bg-img.jpg')}
  //         style={styles.reactLogo}
  //       />
  //     }>
  //     <ThemedView style={styles.titleContainer}>
  //       <ThemedText type="title">Welcome To Dimentia App!</ThemedText>
  //       <HelloWave />
  //     </ThemedView>
  //     <ThemedView style={styles.stepContainer}>
  //       <ThemedText type="subtitle">Dementia Care</ThemedText>
  //       <ThemedText>
  //         This application helps Dimentia patient care takes
  //         {/* Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
  //         Press{' '} */}
  //         {/* <ThemedText type="defaultSemiBold">
  //           {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
  //         </ThemedText>{' '}
  //         to open developer tools. */}
  //       </ThemedText>
  //     </ThemedView>
  //     <ThemedView style={styles.stepContainer}>
  //       {/* <ThemedText type="subtitle">Step 2: Explore</ThemedText> */}
  //       <Button title="Register" onPress={handleResister} />
  //       <Button title="Log in" onPress={handleLogin} />
  //       {/* <ThemedText>
  //         Tap the Explore tab to learn more about what's included in this starter app.
  //       </ThemedText> */}
  //     </ThemedView>
  //     <ThemedView style={styles.stepContainer}>
  //       <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
  //       <ThemedText>
  //         When you're ready, run{' '}
  //         <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
  //         <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
  //         <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
  //         <ThemedText type="defaultSemiBold">app-example</ThemedText>.
  //       </ThemedText>
  //     </ThemedView>
  //   </ParallaxScrollView>
  // );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
