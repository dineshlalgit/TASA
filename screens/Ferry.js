import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,StatusBar,Platform,ScrollView,Image,Dimensions, TouchableOpacity,WebView,Linking} from 'react-native';
import HomeCate from './components/Home/HomeCategory';
import DialogScroll from './components/Home/ImageScrollDialog';
import {Button,Icon} from 'native-base';
import { Dialog, ProgressDialog, ConfirmDialog } from "react-native-simple-dialogs";
import { Constants, MapView, Polyline,Location, Permissions, } from 'expo';
import TextTicker from 'react-native-text-ticker';
import AmEvent from './components/Home/AmEvent';
import TextTickerPress from './components/Home/TextTicker';
import { Table, TableWrapper, Rows ,Row} from 'react-native-table-component';



const {height,width}=Dimensions.get('window');
const points = [
  { latitude: 11.6883571, longitude: 92.7222562},
  { latitude: 11.7048529, longitude: 92.7155958}

]


const pointsponeix = [
  { latitude: 11.7048529, longitude: 92.7155958},
  { latitude: 11.6733045, longitude: 92.7374535},
  { latitude: 11.6726988, longitude: 92.7345302},
  { latitude: 11.6726988, longitude: 92.7345302},
    { latitude: 11.697882, longitude:  92.730636}

]


const pointspani = [
  { latitude: 11.697882, longitude:  92.730636},
  { latitude: 11.6726988, longitude: 92.7345302}
]

const pointsbam = [

  { latitude: 11.7048529, longitude: 92.7155958},
  { latitude: 11.6883571, longitude: 92.7222562},
  { latitude: 11.7048529, longitude: 92.7155958},
  { latitude: 11.6733045, longitude: 92.7374535},
  { latitude: 11.6726988, longitude: 92.7345302}
]


const pointsdandus = [
  { latitude: 11.6883571, longitude: 92.7222562},
  { latitude: 11.6714389, longitude: 92.7082764}
]



export default  class Ferry extends React.Component {

  constructor(props){
      super(props);
      this.state = {
         mapRegion: null,
         hasLocationPermissions: false,
         locationResult: null,
         dialogflag: false,
        
    }
  }




  componentWillMount(){
    this.startHeaderHeight=80
    if(Platform.OS=='android'){
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }


  openDialogGreen = (show) => {
      this.setState({ showDialogGreen: show });
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





    openDialogGreenocean = (show) => {
        this.setState({ showDialogGreenocean: show });
    }

    openDialogmarkuzz = (show) => {
        this.setState({ showDialogmarkuzz: show });
    }

    _handleOpenWithLinking = () => {
    Linking.openURL('http://greenoceanseaways.com/tickets/portal');
  }

  _handleOpenWithLinkingMK = () => {
  Linking.openURL('http://www.makruzz.com/');
}



  componentDidMount() {
   this._getLocationAsync();
 }

 _handleMapRegionChange = mapRegion => {
    console.log(mapRegion);
   this.setState({ mapRegion });

   };

 _getLocationAsync = async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    this.setState({
      locationResult: 'Permission to access location was denied',
    });
  } else {
    this.setState({ hasLocationPermissions: true });
  }

  let location = await Location.getCurrentPositionAsync({});
  this.setState({ locationResult: JSON.stringify(location) });

  // Center the map on the location we just fetched.
   this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0622, longitudeDelta: 0.0421}});
 };

  render() {

    return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1,backgroundColor: 'white'}}>
        <View style={{height: 80,backgroundColor:'white',borderWidth: 1,borderBottomColor: "#dddddd",height: this.startHeaderHeight}}>
          <View style={{flexDirection: 'row',padding: 10,backgroundColor: 'white',marginHorizontal: 20,shadowOffset:{width: 0,height: 0},shadowColor: 'white',shadowOpacity: 0.2,elevation: 1,marginTop: Platform.OS=='android'?30:null}}>
            <Text style={{flex: 1,fontSize: 20,fontWeight: '700',backgroundColor: 'white'}}>Travel Inter Island</Text>
          </View>
        </View>

        <ScrollView scrollEventThrottle={36}
        >
          <View style={{flex: 1,backgroundColor: 'white',paddingTop: 10}}>

          

              {/*ChathamFerryView*/}


              <View style={{marginTop: 10,paddingHorizontal:20}}>

                    

                    <TouchableOpacity onPress={()=>this.openDialogMAP(true)}>
                    <TextTickerPress tickertext="Press to Track routes From Chatham To Bambooflat Jetty" />
                    </TouchableOpacity>
              </View>
                {/*ChathamFerryView*/}

                {/*BambooflatFerryView*/}
                <View style={{marginTop: 10,paddingHorizontal:20}}>
                
                      <TouchableOpacity onPress={()=>this.openDialogBam(true)}><TextTickerPress tickertext="Press to Track routes From Bambooflat To Phoneix Bay Jetty" /></TouchableOpacity>
                </View>
                {/*BambooflatFerryView*/}


                  {/*PanighatFerryView*/}
                  <View style={{marginTop: 10,paddingHorizontal:20}}>
                        <TouchableOpacity onPress={()=>this.openDialogMAPPani(true)}><TextTickerPress tickertext="Press to Track routes From Panighat To Phoneix Bay Jetty" /></TouchableOpacity>
                  </View>
                    {/*PanighatFerryView*/}

                    {/*PhoneixBayFerryView*/}
                    <View style={{marginTop: 10,paddingHorizontal:20}}>
                        <TouchableOpacity onPress={()=>this.openDialogMAPPhoneix(true)}><TextTickerPress tickertext="Press to Track routes From  Phoneix Bay To Panighat  Jetty" /></TouchableOpacity>
                    </View>
                      {/*PhoneixBayFerryView*/}

                      {/*DedasPointFerryView*/}
                      <View style={{marginTop: 10,paddingHorizontal:20}}>
                       
                          <TouchableOpacity onPress={()=>this.openDialogDandus(true)}><TextTickerPress tickertext="Press to Track routes From Dandus Point To Chatham Jetty" /></TouchableOpacity>
                    </View>
                        {/*DedasPointFerryView*/}
          </View>
          {/*Private Ferry*/}
          <Text style={{fontSize:24,fontWeight: '700',paddingHorizontal: 20,color:"#2C3A47",backgroundColor: 'white'}}>Private Ferries Available</Text>
            <View style={{height: 130,marginTop: 20,backgroundColor: 'white'}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <TouchableOpacity onPress={()=>this.openDialogmarkuzz(true)}><HomeCate imageUri={require('../assets/makruzz.jpg')} texturi="Makruzz" /></TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.openDialogGreenocean(true)}><HomeCate imageUri={require('../assets/greenocean.jpg')} texturi="Green Ocean Seaways" /></TouchableOpacity>

              </ScrollView>
            </View>
            {/*Private Ferry*/}
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


         {/*Dialogmarkuzz*/}
         <Dialog
             title="Green Ocean"
             animationType="fade"
             contentStyle={
                 {
                     alignItems: "center",
                     justifyContent: "center",
                 }
             }
             onTouchOutside={ () => this.openDialogmarkuzz(false) }
             visible={ this.state.showDialogmarkuzz }
         >
         <View style={{height:150,marginTop: 10}}>
           <ScrollView
             horizontal={true}
             showsHorizontalScrollIndicator={false}
           >
               <DialogScroll imageUriScroll={require('../assets/markone.jpg')}  />
               <DialogScroll imageUriScroll={require('../assets/marktwo.jpg')}  />
               <DialogScroll imageUriScroll={require('../assets/mark3.jpg')} />
           </ScrollView>
         </View>
         <Text style={ { marginVertical: 30 } }>
            Makruzz is a luxury catamaran service, operating between Port Blair, Havelock in Neil in the emerald isles of Andaman & Nicobar Islands.
             It is the first and the largest privately owned fleet in the Andamans.
         </Text>
         <Text style={{fontSize: 13,fontWeight: '400',color:"#eb4d4b",backgroundColor: "#f5f6fa"}}>Address: Airport Authority Colony, Delanipur, Port Blair, Andaman and Nicobar Islands 744102</Text>
         <Text style={{fontSize: 13,fontWeight: '400',color:"#eb4d4b",backgroundColor: "#f5f6fa"}}>Phone: 03192 212 355</Text>

         <TouchableOpacity onPress={this._handleOpenWithLinkingMK}><Text style={{backgroundColor: "#F8EFBA",color: "#0c2461",fontSize: 17,fontWeight: '500'}}>
         <Image source={require('../assets/ic.png')}
          style={{height: 19,width: 19}}/>browser for more details</Text></TouchableOpacity>
         <Button
             onPress={ () => this.openDialogmarkuzz(false) }
             style={ { marginTop: 10 } }
         ><Icon name="arrow-back" /></Button>
         </Dialog>
         {/*Dialogmarkuzz*/}


         {/*DialogGreenocean*/}
                       <Dialog
                           title="Green Ocean"
                           animationType="fade"
                           contentStyle={
                               {
                                   alignItems: "center",
                                   justifyContent: "center",
                               }
                           }
                           onTouchOutside={ () => this.openDialogGreenocean(false) }
                           visible={ this.state.showDialogGreenocean }
                       >
                       <View style={{height:150,marginTop: 10}}>
                         <ScrollView
                           horizontal={true}
                           showsHorizontalScrollIndicator={false}
                         >
                             <DialogScroll imageUriScroll={require('../assets/greenoceanone.jpg')}  />
                             <DialogScroll imageUriScroll={require('../assets/greenoceantwo.jpg')}  />
                             <DialogScroll imageUriScroll={require('../assets/green5.jpg')} />
                         </ScrollView>
                       </View>
                       <Text style={ { marginVertical: 30 } }>
                          The newest in the fleet of Green Ocean Cruise in the Andaman Islands just arrived recently to serve in the sector of Port Blair , Havelock Island and Neil Island. Launched in 2017, Green Ocean 2 will provide many more options for travelers visiting the exotic isles of the Andaman.
                         </Text>
                       <Text style={{fontSize: 13,fontWeight: '400',color:"#eb4d4b",backgroundColor: "#f5f6fa"}}>Address: Near Samudrika Marine Museum, Delanipur, Port Blair, Andaman and Nicobar Islands 744103</Text>
                       <Text style={{fontSize: 13,fontWeight: '400',color:"#eb4d4b",backgroundColor: "#f5f6fa"}}>Phone: +91 3192 230 777</Text>
                       <TouchableOpacity onPress={this._handleOpenWithLinking}>
                       <Text style={{backgroundColor: "#F8EFBA",color: "#0c2461",fontSize: 17,fontWeight: '500'}}>
                       <Image source={require('../assets/ic.png')}
                        style={{height: 19,width: 19}}/>browser for more details</Text>
                       </TouchableOpacity>
                       <Button
                           onPress={ () => this.openDialogGreenocean(false) }
                           style={ { marginTop: 10 } }
                       ><Icon name="arrow-back" /></Button>
                       </Dialog>
         {/*DialogGreenocean*/}



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
  map: {
      position : 'absolute',
      top : 0,
      left:0,
      bottom:0,
      right:0
  },header: { height: 50,width: 250,backgroundColor: '#079992' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 50,width: 250, backgroundColor: '#E7E6E1' },
  headerD: { height: 50,width: 300, backgroundColor: '#079992' },
  rowD: { height: 50,width: 300, backgroundColor: '#E7E6E1' },
  headerDP: { height: 65,width: 320, backgroundColor: '#079992' },
  rowDP: { height: 65,width: 320, backgroundColor: '#E7E6E1' }
});
