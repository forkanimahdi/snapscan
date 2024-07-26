import { useEffect } from "react";
import { useRouter } from "expo-router";
import { Text } from "react-native";

export default function GardScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.navigate("/home");
    }, 1000); 

    return () => clearTimeout(timer);
  }, [router]);

  const signIn = () => {
    router.replace("/login");
  };

  const signUp = () => {
    router.replace("/register");
  };

  return (
    <>

      <Text>Loading...</Text>
    </>
  );
}
