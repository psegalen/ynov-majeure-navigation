import React from "react";
import { View, Text } from "react-native";

const Loading = props => {
    return (
        <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
            <Text style={{ marginBottom: 32 }}>Settings...</Text>
        </View>
    );
}

export default Loading;
