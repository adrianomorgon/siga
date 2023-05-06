import * as React from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons, Fontisto } from "@expo/vector-icons";

function Header(props) {
    return (
        <View>
            <TouchableOpacity onPress={() => console.log("Bell pressed")}>
                <Fontisto name="bell" size={24} color="white" />
            </TouchableOpacity>

            <Image
                style={{ height: 40 }}
                resizeMode="contain"
                source={require("./assets/icons/siga.png")}
            />

            <TouchableOpacity onPress={() => console.log("Bell pressed")}>
                <Ionicons name="menu" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}