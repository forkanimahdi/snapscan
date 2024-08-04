import { useEffect, useRef, useState } from "react";
import {
  Image,
  View,
  Text,
  Platform,
  ScrollView,
  Pressable,
  ImageBackground,
  Dimensions,
  TextInput,
  BackHandler,

} from "react-native";
import QRCode from "react-native-qrcode-svg";


export default function HomeScreen() {


  const [qrCodeUrl, setQRCodeUrl] = useState(null);

  return (
    <View className="bg-alpha h-screen items-center justify-center">
      <Text>jhdc</Text>

    </View>
  );
}



