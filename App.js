import { WebView } from 'react-native-webview';
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const onLoadRootView = useCallback(async () => {   
    try {
      await SplashScreen.hideAsync();
    } catch (e) {
      console.warn(e);
    }
  })

  return (
    <WebView
      source={{ uri: 'https://my.pautina.ua/' }}
      mixedContentMode="always"
      onLoad={onLoadRootView}
    />
  );
}
