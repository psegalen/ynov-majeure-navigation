import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';

export default class App extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
    accelerometerData: ""
  }
 }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button onPress={() => console.log(styles)} title="Press" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
