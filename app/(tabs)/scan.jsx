import { CameraView, useCameraPermissions } from "expo-camera";
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


export default function ScanScreen() {

  const [permission, requestPermission] = useCameraPermissions();
  const [scanner, setScanner] = useState(false);


  return (
    <>
      <View onlo onTouchStart={()=>{setScanner(false)}} className="bg-alpha h-screen flex-col items-center justify-center">

        <Pressable
          onLongPress={() => {
            permission.granted ? setScanner(true) : requestPermission()
          }}
          onLayout={()=>{(console.log("n"))}}
          className="w-4/5 h-[40%] items-center justify-center border border-dashed border-white">

          {
            scanner ?
              <CameraView onBarcodeScanned={(response) => { console.log(response.data); setScanner(false) }} className="w-full h-full">

              </CameraView>

              :
              <Text className="text-white text-lg">Press and Hold Here To Open Camera</Text>
          }

        </Pressable>

      </View>

    </>
  );
}



