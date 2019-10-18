import React, {useState} from "react";
import { View, Text, Button, TouchableOpacity, TextInput, AsyncStorage } from "react-native";
import { connect } from 'react-redux';
import { storeToken } from "../data/auth/actions";

const Authentication = props => {
    const [ isSignup, setIsSignup ] = useState(false);
    const loginOrSignup = () => {
        const token = "ok";
        AsyncStorage.setItem("token", token);
        props.storeToken(token);
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

const mapDispatchToProps = dispatch => {
    return {
        storeToken: token => {
            dispatch(storeToken(token))
        }
    }
}  

export default connect(null, mapDispatchToProps)(Authentication);
