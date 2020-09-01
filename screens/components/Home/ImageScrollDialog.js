import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';


export default  class ImageScroll  extends React.Component {
  render() {
    return (
      <View style={{height: 200,width: 210,marginLeft: 20,borderWidth: 0.5,borderColor: '#dddddd'}}>
        <View style={{flex: 1}}>
          <Image source={this.props.imageUriScroll}
           style={{flex:1,width:210,height:200,resizeMode:'cover'}}
           />
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
