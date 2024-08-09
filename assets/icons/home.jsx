import { Icon } from "@/constants";
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
  let myOptions = [
    { name: "Text", icon: <Icon.Text />, id: 0 },
    { name: "Url", icon: <Icon.Text />, id: 0 },
    { name: "Text", icon: <Icon.Text />, id: 0 },
    { name: "Text", icon: <Icon.Text />, id: 0 },
    { name: "Text", icon: <Icon.Text />, id: 0 },
    { name: "Text", icon: <Icon.Text />, id: 0 },
    { name: "Text", icon: <Icon.Text />, id: 0 },
  ]
  console.log(myOptions[0].icon);
  

  return (
    <View className="bg-alpha h-screen ">
      <View className=" ">
        <Text className="text-white text-xl pt-16 pb-8 text-center">Generate QR Code</Text>
      </View>

      <ScrollView className="mb-[6vh] px-8 ">
        <View className="flex-row flex-wrap items-center justify-between">
          {
            myOptions.map((element, index) =>

              <Pressable key={index} className="w-[38vw] mt-5 h-[16vh] border border-white rounded-lg flex-col items-center justify-center">
                {element.icon}
                <Text className="mt-3 text-white text-lg">{element.name}</Text>
              </Pressable>
            )
          }

        </View>




      </ScrollView>

    </View>
  );
}



