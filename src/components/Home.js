import React from "react";
import { View, Text, Button, Alert, AsyncStorage } from "react-native";

const Home = props => {
    const logout = () => {
        AsyncStorage.removeItem("token");
        props.navigation.navigate("Authentication");
    }
    return (
        <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
            <Text style={{ marginBottom: 32 }}>Home !</Text>
            <Button onPress={() => Alert.alert("Todo!")} title="Naviguer" />
            <Button onPress={logout} title="Se déconnecter" />
        </View>
    );
}

export default Home;
