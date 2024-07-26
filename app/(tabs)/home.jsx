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


export default function HomeScreen() {
  return (
    <>
    <View className="bg-alpha h-screen items-center justify-center">
      <Text className="text-white text-xl">Hello and welcome  to your project</Text>
    </View>

    </>
  );
}



