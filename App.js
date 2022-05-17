import  React, {useEffect} from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { Button, View } from "react-native";
import { StyleSheet, Text} from "react-native";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    // This URI includes a localhost url
    webClientId:
      "1038262737574-j0un3526ir5mkdo2cno1fl7o0v3jlnla.apps.googleusercontent.com",
    // This URI includes a expo.go uri
    expoClientId:
      "1038262737574-iddu4aellun0nlvpd5auvie2o35p39pu.apps.googleusercontent.com",
    // This URI includes a expo.go uri
    androidClientId:
      "1038262737574-iddu4aellun0nlvpd5auvie2o35p39pu.apps.googleusercontent.com",
     // This URI includes a expo.go uri
    iosClientId:
      "1038262737574-iddu4aellun0nlvpd5auvie2o35p39pu.apps.googleusercontent.com",
  });

  const [loggedIn, setLoggedIn] = React.useState("");

  useEffect(
    () => {
      if (response?.type === "success") {
        const { authentication, type } = response;
        setLoggedIn(type)
      }
    }, [response]);

  return (
    <View style={styles.container}>
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
      }}
    />
    {/* This will deisplay wether u are logged in or not */}
    <Text>
      {loggedIn === "success" ? "Logged In" : "Logged Out"}
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
