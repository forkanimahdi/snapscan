import { Icon } from "@/constants";
import { router } from "expo-router";
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
    { name: "Link", icon: <Icon.Links />, id: 0 },
    { name: "Whatsapp", icon: <Icon.Whatsapp />, id: 0 },
    { name: "E-mail", icon: <Icon.Email />, id: 0 },
    { name: "Virtual Card (coming soon)", icon: <Icon.Vcard />, id: 0 },
  ]


  return (
    <View className="bg-alpha h-screen items-center justify-center  ">

      <View>
        <Text className="text-3xl text-white">Logo</Text>
      </View>
      <View className=" ">
        <Text className="text-white text-xl pt-[8vh] pb-[5vh] text-center">Generate QR Code</Text>
      </View>

      <View className=" px-4 ">
        <View className="flex-row flex-wrap items-center justify-between">
          {
            myOptions.map((element, index) =>

              <Pressable onPress={()=>{router.navigate(element.name)}} key={index} className={`${index != myOptions.length - 1 ? "w-[45vw]" : "w-full"} mt-3 h-[16vh] border border- bg-beta rounded-lg flex-col items-center justify-center`}>
                {element.icon}
                <Text className="mt-3 text-white text-lg">{element.name}</Text>
              </Pressable>
            )
          }

        </View>





      </View>

    </View>
  );
}



