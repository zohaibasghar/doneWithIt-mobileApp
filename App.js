import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { TouchableNativeFeedback } from "react-native-web";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World ! 👌</Text>
      <Button
        title="Click me"
        color={"orange"}
        onPress={() =>
          Alert.alert("Get Alert", "I hope you got the message", [
            {
              text: "Yes",
              onPress: () => {
                console.log("You clicked yes.");
              },
            },
            { text: "No", onPress: () => console.log("You clicked no.") },
          ])
        }
      />
      <Text numberOfLines={4}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        tenetur natus assumenda ipsum asperiores repellendus amet deserunt
        voluptate molestias dolores cumque ipsa facere explicabo unde itaque
        consectetur, ratione fugit id. Ab nobis possimus facere, error neque sed
        blanditiis ducimus omnis.
      </Text>
      <TouchableOpacity>
        <View
          style={{
            width: 300,
            height: 200,
            backgroundColor: "dodgerblue",
          }}
        ></View>
      </TouchableOpacity>
      <Image source={require("./assets/books.jpg")} style={styles.localImage} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  localImage: {
    width: 300,
    height: 200,
  },
});
