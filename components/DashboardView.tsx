import { Image, StyleSheet, Platform, Button, View,Text } from 'react-native'
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from './ThemedText';

export function DashboardView({ navigation }:any) {
    const handleResister =() => {
        console.log("register");
        navigation.navigate('Register');
    }
    const handleLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <>
     <ParallaxScrollView
       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
       headerImage={
         <Image
           source={require('@/assets/images/bg-img.jpg')}
           style={styles.dashboardLogo}
         />
       }>
  </ParallaxScrollView>
       <ThemedView style={styles.stepContainer}>
         <ThemedText type="subtitle">Dementia Care</ThemedText>
         <ThemedText>
           This application helps Dimentia patient care takes
           {/* Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
           Press{' '} */}
           {/* <ThemedText type="defaultSemiBold">
             {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
           </ThemedText>{' '}
           to open developer tools. */}
         </ThemedText>
       </ThemedView>
        <ThemedView style={styles.stepContainer}>
         {/* <ThemedText type="subtitle">Step 2: Explore</ThemedText> */}
         <Button title="Register" onPress={handleResister} />
         <Button title="Log in" onPress={handleLogin} />
         {/* <ThemedText>
           Tap the Explore tab to learn more about what's included in this starter app.
         </ThemedText> */}
       </ThemedView>
       </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  dashboardLogo: {
    height: 500,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});