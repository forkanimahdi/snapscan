import { useLocalSearchParams } from "expo-router";
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
    TouchableOpacity,
} from "react-native";
import QRCode from "react-native-qrcode-svg";



export default function ScanScreen() {
    const [qrData, setQrData] = useState(null)
    const [input, setInput] = useState(null)

    const id = useLocalSearchParams();

    const generate = (data) => {
        setInput(data)
        switch (id.generate.toLowerCase()) {
            case "text":

                return setQrData(data)
                break;
            case "number":
                console.log("number here");

                break;

            default:
                break;
        }

    }

    return (
        <>
            <View className="bg-alpha h-screen flex-col items-center ">

                <View className="pt-[15vh]">
                    <Text className="text-main text-lg">Generate Your {id.generate} Qr Code</Text>
                </View>


                <TextInput
                    className="px-4 py-3 mt-[8vh] bg-transparent border text-white border-[#ffffffa1]  w-[80vw] rounded-lg "
                    placeholder={`Please insert a valid ${id.generate} `}
                    placeholderTextColor={`#ffffff6f`}
                    onChangeText={(text) => { generate(text) }}
                />
                {/* <Pressable onPress={() => { generate(input) }} className="mt-[5vh] bg-main px-[10vw] py-2 rounded-lg">
                    <Text className="text-base">Generate</Text>
                </Pressable> */}

                <View className={`mt-[9vh] p-3 ${qrData ? "bg-white " : "border border-white w-[60vw] h-[30vh] items-center justify-center"}`}>
                    {
                        qrData ?
                            <QRCode
                                backgroundColor="white"
                                size={250}
                                color="black"
                                value={qrData}
                            />
                            :
                            <Text className="text-white">Your Qr Code will appear here</Text>
                    }
                </View>




            </View>

        </>
    );
}



