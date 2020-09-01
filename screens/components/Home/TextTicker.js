import React, { PureComponent } from 'react'
import { StyleSheet, View } from 'react-native'
import TextTicker from 'react-native-text-ticker'

export default class Example extends PureComponent {
  render(){
    return(
      <View style={styles.container}>
        <TextTicker
        style={{flex: 1,fontWeight: '500',backgroundColor: 'white',color:"#b63838"}}
          duration={3000}
          loop
          bounce
          repeatSpacer={50}
          marqueeDelay={1000}
        >
        {this.props.tickertext}
        </TextTicker>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
