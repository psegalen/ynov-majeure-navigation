import React from "react";
import { View, AsyncStorage, ActivityIndicator } from "react-native";
import { connect } from 'react-redux';
import { storeToken } from "../data/auth/actions";

const Loading = props => {
    AsyncStorage.getItem("token").then(token => {
        props.storeToken(token);
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

const mapDispatchToProps = dispatch => {
    return {
        storeToken: token => {
            dispatch(storeToken(token))
        }
    }
}  

export default connect(null, mapDispatchToProps)(Loading);
