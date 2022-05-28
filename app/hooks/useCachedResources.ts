import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'montserrat-bold': require('../assets/fonts/Montserrat-Bold.ttf'),
          'montserrat-extrabold': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
          'montserrat-light': require('../assets/fonts/Montserrat-Light.ttf'),
          'montserrat-medium': require('../assets/fonts/Montserrat-Medium.ttf'),
          'montserrat': require('../assets/fonts/Montserrat-Regular.ttf'),
          'montserrat-semi': require('../assets/fonts/Montserrat-SemiBold.ttf'),
          'montserrat-var': require('../assets/fonts/Montserrat-Variable.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
