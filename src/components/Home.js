import React from "react";
import { View, Text, Button, Alert, AsyncStorage } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = props => {
    const logout = () => {
        AsyncStorage.removeItem("token");
        props.navigation.navigate("Authentication");
    }
    const data = [
        { id: 1, name: "Toto", age: 32 },
        { id: 2, name: "Tata", age: 24 },
        { id: 3, name: "Titi", age: 26 },
    ]
    return (
        <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
            <Text style={{ marginBottom: 32 }}>Home !</Text>
            {
                data.map(item => (
                <TouchableOpacity key={item.id} onPress={() => props.navigation.navigate("Item", {item})}>
                    <Text>{item.name}</Text>
                </TouchableOpacity>
                ))
            }
            <Button onPress={logout} title="Se déconnecter" />
        </View>
    );
}

export default Home;
