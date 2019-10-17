import React from "react";
import { View, AsyncStorage, ActivityIndicator } from "react-native";

const Loading = props => {
    AsyncStorage.getItem("token").then(token => {
        if (token) {
            props.navigation.navigate("Home");
        } else {
            props.navigation.navigate("Authentication");
        }
    })
    return (
        <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
            <ActivityIndicator size="large" />
        </View>
    );
}

export default Loading;
