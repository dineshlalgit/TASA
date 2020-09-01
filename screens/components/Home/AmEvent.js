import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';


export default  class AmEvent extends React.Component {
  render() {
    return (

        <View style={{height: this.props.width / 2 - 30,width:this.props.width / 2 - 30,borderWidth: 0.5,borderColor: "#dddddd"}}>
          <View style={{flex: 1}}><Image source={this.props.amimage} style={{height: null,width: null,resizeMode: 'cover' ,flex: 1}} /></View>
          <View style={{flex: 1,alignItems: 'flex-start',justifyContent: 'space-evenly',paddingLeft: 10}}>
          <Text style={{fontSize: 14,color:"#b63838"}}>{this.props.nameevnt}</Text>
          </View>
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
