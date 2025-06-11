import React from 'react'
import {View, Text, ScrollView, Image, TouchableOpacity} from "react-native"
import { SafeAreaView} from "react-native-safe-area-context"
import images from "@/constants/images";
import icons from "@/constants/icons";

const SignIn = () => {
    const handleLogin = () => {}
    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerClassName="h-full">
                <Image className="w-full h-4/6" resizeMode="contain" source={images.onboarding}/>
                <View className="px-10">
                    <Text className="text-base text-center uppercase font-Rubik text-black-200">Welcome to Restate</Text>
                    <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
                        Let's Get You Closer to {"\n"}
                        <Text className="text-primary-300">Your Ideal Home</Text>
                    </Text>

                    <Text className="text-lg font-Rubik mt-12 text-black-200 text-center">
                        Login to Restate with Google
                    </Text>

                    <TouchableOpacity onPress={handleLogin} className="bg-white shadow-md shadow-zinc-300 rounded-full mt-5 w-full py-4">
                        <View className="flex-1 flex-row items-center">
                            <Image source={icons.google} className="w-5 h-5" resizeMode="contain"/>
                            <Text className="text-black-200 text-lg font-rubik-medium ml-2">Continue with Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SignIn
