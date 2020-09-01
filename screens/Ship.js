import React from 'react';
import { StyleSheet, Text, View ,WebView,TouchableOpacity} from 'react-native';
import {Button,Icon} from 'native-base';

export default  class Ship extends React.Component {
  render() {
    return (
    <View style={styles}>
      <WebView
         source={{uri: 'https://travelandsaveandaman.000webhostapp.com/home.php'}}
         style={{marginTop: 20}}
       />
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
