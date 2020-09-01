import React from 'react';
import { StyleSheet, Text, View,Image,Button } from 'react-native';
import {Dialog} from 'react-native-simple-dialogs';

 class Dialog extends React.Component {
  state={showDialog:true};
  openDialog = show => {
    this.setState({showDialog : show })
  }

  render() {
    return (
      <View style={styles.container}> 

        <Dialog
          title={this.props.titledialog}
          animationType="fade"
          contentStyle={{alignItems : 'center',
                          justifyContent : 'center'
        }}
        onTouchOutside={()=>this.openDialog(false)}
        visible={this.state.showDialog}

        >
        <Text style={{marginVertical:30}}>{this.props.DialogName}</Text>
        <Image source={this.props.Dialogimage} style={{width : 99,height:87,backgroundColor:'black',marginTop:10,resizeMode:'contain'}} />
        <Button onPress={()=>this.openDialog(false)} 
          title="Close"
          style={{ marginTop: 10 }}
        />

        </Dialog>
      </View>
    );
  }
}

export default Dialog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
