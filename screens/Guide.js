import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,StatusBar,Platform,ScrollView,Image,Dimensions, TouchableOpacity,Linking} from 'react-native';
import {Button,Icon} from 'native-base';
import HomeCate from './components/Home/HomeCategory';
import { Constants, MapView, Polyline,Location, Permissions,WebBrowser } from 'expo';
import AmEvent from './components/Home/AmEvent';
import DialogScroll from './components/Home/ImageScrollDialog';
import { Dialog, ProgressDialog, ConfirmDialog } from "react-native-simple-dialogs";
import {CirclesLoader, PulseLoader, TextLoader, DotsLoader,ColorDotsLoader} from 'react-native-indicator';
import Collapsible from 'react-native-collapsible';





const {height,width}=Dimensions.get('window');

const points = [
  { latitude: 11.6503, longitude: 92.7329},
  { latitude: 11.6738, longitude: 92.7480}

]


const pointsponeix = [
  { latitude: 11.6503, longitude: 92.7329},
  { latitude: 11.5060, longitude: 92.7015}
  

]


const pointspani = [
  { latitude: 11.6503, longitude: 92.7329},
  { latitude: 11.669663, longitude: 92.747573}
]

const pointsbam = [

  { latitude: 11.6503, longitude: 92.7329},
  { latitude: 11.6450, longitude: 92.7480}
  
]


const pointsdandus = [

  { latitude: 11.6675, longitude: 92.7413},
  { latitude: 11.6758, longitude: 92.7624}
]




export default  class Guide extends React.Component {
  _didFocusSubscription;
  _willBlurSubscription;
  constructor(props) {
    super(props)
}
  state = {isCollapsed:true};

  toggleExpanded=()=>{
    this.setState({ isCollapsed : !this.state.isCollapsed })
  }

  openDialog = (show) => {
      this.setState({ showDialog: show });
  }
  
 opencoll=(show)=>{
   this.setState({ isCollapsed: show });
 }

 openDialogMAP = (show) => {
  this.setState({ showDialogMAP: show });
}

openDialogMAPPhoneix = (show) => {
  this.setState({ showDialogMAPPhoneix: show });
}

openDialogMAPPani = (show) => {
  this.setState({ showDialogMAPPani: show });
}

openDialogDandus = (show) => {
  this.setState({ showDialogDandus: show });
}


openDialogBam = (show) => {
  this.setState({ showDialogBam: show });
}





  componentWillMount(){
    this.startHeaderHeight=80
    if(Platform.OS=='android'){
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }


  }




  render() {

    return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <View style={{flex:1}}>
        <View style={{backgroundColor:'white',borderWidth: 1,borderBottomColor: "#dddddd",height: this.startHeaderHeight}}>
          <View style={{flexDirection: 'row',padding: 10,backgroundColor: 'white',marginHorizontal: 20,shadowOffset:{width: 0,height: 0},shadowColor: 'white',shadowOpacity: 0.2,elevation: 1,marginTop: Platform.OS=='android'?30:null}}>
            <Text style={{flex: 1,fontSize: 20,fontWeight: '700',backgroundColor: 'white'}}>Navigate Andaman</Text>
          </View>
        </View>
        <ScrollView scrollEventThrottle={16}
        >
          <View style={{flex: 1,backgroundColor: 'white',paddingTop: 10}}>
              
                {/*beach*/}

                <Text style={{fontSize:24,fontWeight: '700',paddingHorizontal: 20,color:"#b63838"}}>Travel Best Tourist Spots</Text>
        {/*beach*/}

           <View style={{flex: 1,backgroundColor: 'white',paddingTop: 10}}>

          

{/*ChathamFerryView*/}


<View style={{marginTop: 10,paddingHorizontal:20}}>

      

      <TouchableOpacity onPress={()=>this.openDialogMAP(true)}>
      <Text style={{fontSize:15,fontWeight: '700',paddingHorizontal: 20,color:"#b63838"}}>Cellular Jail</Text>
      </TouchableOpacity>
</View>
  {/*ChathamFerryView*/}

  {/*BambooflatFerryView*/}
  <View style={{marginTop: 10,paddingHorizontal:20}}>
  
        <TouchableOpacity onPress={()=>this.openDialogBam(true)}>
        <Text style={{fontSize:15,fontWeight: '700',paddingHorizontal: 20,color:"#b63838"}}>Corbyn Cove Beach</Text>
        </TouchableOpacity>
  </View>
  {/*BambooflatFerryView*/}


    {/*PanighatFerryView*/}
    <View style={{marginTop: 10,paddingHorizontal:20}}>
          <TouchableOpacity onPress={()=>this.openDialogMAPPani(true)}>
          <Text style={{fontSize:15,fontWeight: '700',paddingHorizontal: 20,color:"#b63838"}}>Marina Park, Rajiv Gandhi Nagar, Port Blair </Text>

          </TouchableOpacity>
    </View>
      {/*PanighatFerryView*/}

      {/*PhoneixBayFerryView*/}
      <View style={{marginTop: 10,paddingHorizontal:20}}>
          <TouchableOpacity onPress={()=>this.openDialogMAPPhoneix(true)}>
          <Text style={{fontSize:15,fontWeight: '700',paddingHorizontal: 20,color:"#b63838"}}>Chidiya Tapu Beach</Text>
          </TouchableOpacity>
      </View>
        {/*PhoneixBayFerryView*/}

        {/*DedasPointFerryView*/}
        <View style={{marginTop: 10,paddingHorizontal:20}}>
        

       
        <TouchableOpacity onPress={()=>this.openDialogDandus(true)}>
          <Text style={{fontSize:15,fontWeight: '700',paddingHorizontal: 20,color:"#b63838"}}>Aberdeen Bazar/Coordinates to Ross Island</Text>
        </TouchableOpacity>
      </View>
          {/*DedasPointFerryView*/}
</View>      




                
                        <View style={{marginTop: 10,paddingHorizontal:20,backgroundColor: 'white'}}>
                          <TouchableOpacity onPress={this.toggleExpanded}>
                            <View style={{alignItems: 'center'}}>
                              <Text style={{fontSize: 20,fontWeight: '700',color:"#4cd137",backgroundColor: "#f5f6fa"}}> <Image source={require('../assets/ic.png')}
                               style={{height: 24,width: 24}}/>Emerency Contact </Text><Image source={require('../assets/da.png')}
                                style={{height: 24,width: 24}}/>
                            </View>
                          </TouchableOpacity>

                          <Collapsible collapsed={this.state.isCollapsed}>
                              <View style={{backgroundColor: '#f6e58d',borderWidth: 2,borderColor: '#badc58'}}>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>Police Control Room:-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'justify',alignItems: 'flex-end'}}>100</Text></Text>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>Fire Service:-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'justify',alignItems: 'flex-end'}}>101</Text></Text>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>Coastal Security1:-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'right'}}>1093</Text></Text>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>PBMC Control Room:-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'right',paddingLeft: 30}}>245798</Text></Text>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>State Control Room:-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'right',paddingLeft: 30}}>1077/234287</Text></Text>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>Shipping:-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'justify',paddingLeft: 30}}>245555</Text></Text>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>Coast Guard (Search & Rescue):-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'justify',paddingLeft: 30}}>1554</Text></Text>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>District Control Room:-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'justify',paddingLeft: 30}}>1070/238881</Text></Text>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>Ambulance:-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'justify',paddingLeft: 30}}>102</Text></Text>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>Helpline for Women:-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'justify',paddingLeft: 30}}>1091</Text></Text>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>For Tourist Complaints:-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'justify',paddingLeft: 30}}>03192-232694</Text></Text>
                                  <Text style={{fontSize: 15,fontWeight: '700',color:"#192a56",textAlign:'justify'}}>For Tourist Information:-<Text style={{fontSize: 15,fontWeight: '800',color:"#192a56",textAlign:'justify',paddingLeft: 30}}>03192-232747</Text></Text>
                                </View>
                          </Collapsible>

                        </View>


          </View>
        </ScrollView>


          {/*DialogMAPChatham*/}
          <Dialog

animationType="fade"
contentStyle={
    {
        alignItems:'center',
        justifyContent: "center",
    }
}
onTouchOutside={ () => this.openDialogMAP(false) }
visible={ this.state.showDialogMAP }
><Button
onPress={ () => this.openDialogMAP(false) }
style={ { marginTop: 3 } }
><Icon name="arrow-back" /></Button>
<View style={{width: width-50,height: 550,marginTop: 5}}>
<MapView
style={{flex: 1,height: null,width: null,borderRadius: 5,borderWidth: 1,borderColor: "#dddddd"}}
initialRegion={this.state.mapRegion}
onRegionChange={this._handleMapRegionChange}
showsUserLocation={true}
>
<MapView.Polyline
coordinates={points}
strokeWidth={10}
strokeColor="#00a8ff"
lineCap="round"
lineJoin="bevel"
/>
</MapView>
</View>

</Dialog>
{/*DialogMAPChatham*/}

{/*openDialogMAPPhoneix*/}
<Dialog

animationType="fade"
contentStyle={
    {
        alignItems:'center',
        justifyContent: "center",
    }
}
onTouchOutside={ () => this.openDialogMAPPhoneix(false) }
visible={ this.state.showDialogMAPPhoneix }
><Button
onPress={ () => this.openDialogMAPPhoneix(false) }
style={ { marginTop: 3 } }
><Icon name="arrow-back" /></Button>
<View style={{width: width-50,height: 550,marginTop: 5}}>
<MapView
style={{flex: 1,height: null,width: null,borderRadius: 5,borderWidth: 1,borderColor: "#dddddd"}}
initialRegion={this.state.mapRegion}
onRegionChange={this._handleMapRegionChange}
showsUserLocation={true}
>
<MapView.Polyline
coordinates={pointsponeix}
strokeWidth={10}
strokeColor="#00a8ff"
lineCap="round"
lineJoin="bevel"
/>

</MapView>
</View>

</Dialog>
{/*openDialogMAPPhoneix*/}


{/*openDialogMAPPani*/}
<Dialog

animationType="fade"
contentStyle={
    {
        alignItems:'center',
        justifyContent: "center",
    }
}
onTouchOutside={ () => this.openDialogMAPPani(false) }
visible={ this.state.showDialogMAPPani }
><Button
onPress={ () => this.openDialogMAPPani(false) }
style={ { marginTop: 3 } }
><Icon name="arrow-back" /></Button>
<View style={{width: width-50,height: 550,marginTop: 5}}>
<MapView
style={{flex: 1,height: null,width: null,borderRadius: 5,borderWidth: 1,borderColor: "#dddddd"}}
initialRegion={this.state.mapRegion}
onRegionChange={this._handleMapRegionChange}
showsUserLocation={true}
>
<MapView.Polyline
coordinates={pointspani}
strokeWidth={10}
strokeColor="#00a8ff"
lineCap="round"
lineJoin="bevel"
/>

</MapView>
</View>

</Dialog>
{/*openDialogMAPPani*/}

{/*openDialogBam*/}
<Dialog

animationType="fade"
contentStyle={
    {
        alignItems:'center',
        justifyContent: "center",
    }
}
onTouchOutside={ () => this.openDialogBam(false) }
visible={ this.state.showDialogBam }
><Button
onPress={ () => this.openDialogBam(false) }
style={ { marginTop: 3 } }
><Icon name="arrow-back" /></Button>
<View style={{width: width-50,height: 550,marginTop: 5}}>
<MapView
style={{flex: 1,height: null,width: null,borderRadius: 5,borderWidth: 1,borderColor: "#dddddd"}}
initialRegion={this.state.mapRegion}
onRegionChange={this._handleMapRegionChange}
showsUserLocation={true}
>
<MapView.Polyline
coordinates={pointsbam}
strokeWidth={10}
strokeColor="#00a8ff"
lineCap="round"
lineJoin="bevel"
/>

</MapView>
</View>

</Dialog>
{/*openDialogBam*/}

{/*openDialogDandus*/}
<Dialog

animationType="fade"
contentStyle={
    {
        alignItems:'center',
        justifyContent: "center",
    }
}
onTouchOutside={ () => this.openDialogDandus(false) }
visible={ this.state.showDialogDandus }
><Button
onPress={ () => this.openDialogDandus(false) }
style={ { marginTop: 3 } }
><Icon name="arrow-back" /></Button>
<View style={{width: width-50,height: 550,marginTop: 5}}>
<MapView
style={{flex: 1,height: null,width: null,borderRadius: 5,borderWidth: 1,borderColor: "#dddddd"}}
initialRegion={this.state.mapRegion}
onRegionChange={this._handleMapRegionChange}
showsUserLocation={true}
>
<MapView.Polyline
coordinates={pointsdandus}
strokeWidth={10}
strokeColor="#00a8ff"
lineCap="round"
lineJoin="bevel"
/>

</MapView>
</View>

</Dialog>
{/*openDialogDandus*/}

        

      </View>
    </SafeAreaView>
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
