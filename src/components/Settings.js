import React from "react";
import { View, Text } from "react-native";
import { connect } from 'react-redux';

const Settings = props => {
    return (
        <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
            <Text style={{ marginBottom: 32 }}>Settings...</Text>
            <Text style={{ marginBottom: 32 }}>Token : {props.token}</Text>
        </View>
    );
}

const mapStateToProps = state => {
    return {
      token: state.auth.token
    }
  }

export default connect(mapStateToProps)(Settings);
