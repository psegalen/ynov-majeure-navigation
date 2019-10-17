import React, {useState} from "react";
import { View, Text, Button, Alert, TouchableOpacity, TextInput, AsyncStorage } from "react-native";

const Authentication = props => {
    const [ isSignup, setIsSignup ] = useState(false);
    const loginOrSignup = () => {
        AsyncStorage.setItem("token", "ok");
        props.navigation.navigate("Home");
    }
    return (
        <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
            <Text style={{ marginBottom: 32 }}>
                Please {isSignup ? "sign up" : "login"}
            </Text>
            <TextInput />
            <View style={{marginBottom:32}} >
                <Button onPress={loginOrSignup} title={isSignup ? "Sign up" : "Login"} />
            </View>
            <TouchableOpacity  onPress={() => setIsSignup(!isSignup)}>
                <Text style={{ color: "blue"}}>{isSignup ? "Login" : "Sign up"}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Authentication;
