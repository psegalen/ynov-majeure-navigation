import React from "react";
import { View, Text, Button } from "react-native";

const Item = props => {
    const item = props.navigation.getParam("item");
    return (
        <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
            <Text style={{ marginBottom: 32 }}>Item #{item.id}</Text>
            <Text style={{ marginBottom: 32 }}>Name : {item.name}</Text>
            <Text style={{ marginBottom: 32 }}>Age : {item.age}</Text>
            <Button onPress={() => props.navigation.goBack()} title="Retour" />
        </View>
    );
}

export default Item;
