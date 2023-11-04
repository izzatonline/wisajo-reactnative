import React from "react";
import { Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

import AppText from "./app/components/AppText";

export default function App() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <AppText
                style={{
                    fontFamily: "Courier New",
                    fontSize: 30,
                }}
            >
                I love React Native
            </AppText>
        </View>
    );
}
