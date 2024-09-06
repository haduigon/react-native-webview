import { WebView } from "react-native-webview";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const onLoadRootView = useCallback(async () => {
    try {
      await SplashScreen.hideAsync();
    } catch (e) {
      console.warn(e);
    }
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
        <WebView
          useWebKit={true}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          sharedCookiesEnabled={true}
          thirdPartyCookiesEnabled={true}
          source={{ uri: "https://my.pautina.ua/" }}
          mixedContentMode="always"
          onLoad={onLoadRootView}
          originWhitelist={[
            "https://my.pautina.ua",
            "https://pautina.ua",
            "https://stat.pautina.ua",
          ]}
          // injectedJavaScript={`
          //   var meta = document.createElement('meta'); 
          //   meta.name = "viewport"; 
          //   meta.content = "width=device-width, initial-scale=1.0"; 
          //   document.getElementsByTagName('head')[0].appendChild(meta);
          // `}
          // scalesPageToFit={false}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
