import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,StatusBar,Platform,ScrollView,Image,Dimensions, TouchableOpacity,Linking} from 'react-native';
import HomeCate from './components/Home/HomeCategory';
import {Button,Icon} from 'native-base';
import { Constants, MapView, Polyline,Location, Permissions, Callout,Marker,Animated} from 'expo';
import AmEvent from './components/Home/AmEvent';
import DialogScroll from './components/Home/ImageScrollDialog';
import { Dialog, ProgressDialog, ConfirmDialog } from "react-native-simple-dialogs";
import TextTickerPress from './components/Home/TextTicker';
import { Pages } from 'react-native-pages';
import {CirclesLoader, PulseLoader, TextLoader, DotsLoader,ColorDotsLoader} from 'react-native-indicator';


const {height,width}=Dimensions.get('window');

const points = [
    { latitude: 11.6824775, longitude: 92.7191355},
    { latitude: 13.0815305, longitude:80.2898703 }
  ]



export default  class Home extends React.Component {

  constructor(props){
      super(props);
      this.state = {
         mapRegion: null,
         hasLocationPermissions: false,
         locationResult: null,
         dialogflag: false

       };

    }



    openDialogIS = (show) => {
        this.setState({ showDialogIS: show });
    }

    openDialogMAP = (show) => {
        this.setState({ showDialogMAP: show });
    }



    openDialogAbout = (show)=>{
        this.setState({ showDialogAbout: show });
    }

    openDialogGame = (show)=>{
        this.setState({ showDialogGame: show });
    }


    openDialogAndamanBeach= (show)=>{
        this.setState({ showDialogAndaman: show });
    }

    openDialogMadd= (show)=>{
        this.setState({ showDialogMadd: show });
    }

    openDialogMF= (show)=>{
        this.setState({ showDialogMF: show });
    }

    openDialogBF= (show)=>{
        this.setState({ showDialogBF: show });
    }

    openDialogFF= (show)=>{
        this.setState({ showDialogFF: show });
    }

    openDialogISF= (show)=>{
        this.setState({ showDialogISF: show });
    }
    openDialogDev= (show)=>{
        this.setState({ showDialogDev: show });
    }
    openDialogTerm= (show)=>{
        this.setState({ showDialogTerm: show });
          
        
    }

    _handleOpenWithLinkingfeed= () => {
    Linking.openURL('https://forms.gle/sV6tGbC7rMBQyJTN9');
  }


  componentWillMount(){
    this.startHeaderHeight=80
    if(Platform.OS=='android'){
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }



  //Map
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
    location= this.props;
    return (
    <SafeAreaView style={{flex:1,backgroundColor: 'white'}}>
      <View style={{flex:1}}>
        <View style={{height: 80,backgroundColor:'white',borderWidth: 1,borderBottomColor: "#dddddd",height: this.startHeaderHeight}}>
          <View style={{flexDirection: 'row',padding: 10,backgroundColor: 'white',marginHorizontal: 20,shadowOffset:{width: 0,height: 0},shadowColor: 'white',shadowOpacity: 0.2,elevation: 1,marginTop: Platform.OS=='android'?30:null}}>
            <Text style={{flex: 1,fontSize: 20,fontWeight: '700',backgroundColor: 'white'}}>Travel And Save Andaman</Text>
          </View>
        </View>
        <ScrollView scrollEventThrottle={16}
        >

             {/*Top Scroll*/}
             <View style={{height: 80,marginTop: 20}}>
               <ScrollView
                 horizontal={true}
                 showsHorizontalScrollIndicator={false}
               >
               <TouchableOpacity onPress={()=>this.openDialogAbout(true)}>
               <View style={{paddingLeft: 55}}><Image source={require('../assets/about.png')}
                style={{height: 24,width: 24}}/></View>
                 <Text style={{fontSize: 12,paddingLeft: 20}}>About App</Text>
                 </TouchableOpacity>
                   <TouchableOpacity onPress={()=>this.openDialogDev(true)}>
                   <View style={{paddingLeft: 50}}><Image source={require('../assets/dev.png')}
                    style={{height: 24,width: 24}}/></View>
                    <Text style={{fontSize: 12,paddingLeft: 20}}>About Developers</Text>
                  </TouchableOpacity>
                  

               </ScrollView>
              <View style={{paddingLeft: 150,paddingTop: 7}}><ColorDotsLoader color1={"#1B9CFC"}  color2={"#fff200"} color3={"#55E6C1"}/></View>

             </View>

              {/*Top Scroll*/}


          <View style={{flex: 1,backgroundColor: 'white',paddingTop: 20}}>
            <Text style={{fontSize:24,fontWeight: '700',paddingHorizontal: 20}}>Incredible Andaman</Text>
              <View style={{height: 130,marginTop: 20}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <TouchableOpacity onPress={()=>this.openDialogGame(true)}><HomeCate imageUri={require('../assets/ia2.jpg')} texturi="Game Fishing" /></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.openDialogIS(true)}><HomeCate imageUri={require('../assets/ia3.jpg')} texturi="Snorkling Diving" /></TouchableOpacity>
                      <TouchableOpacity onPress={()=>this.openDialogAndamanBeach(true)}><HomeCate imageUri={require('../assets/ia4.jpg')}texturi="Andaman Beach" /></TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.openDialogMadd(true)}><HomeCate imageUri={require('../assets/ia5.jpg') } texturi="Maddening Silences" /></TouchableOpacity>
                </ScrollView>
              </View>

              {/*MapView*/}
              <View style={{marginTop: 40,paddingHorizontal:20}}><Text style={{fontSize: 21,fontWeight: '700'}}>How to reach Andaman</Text>
                  <View style={{width: width-40,height: 500,marginTop: 20}}>
                      <MapView
                         style={{flex: 1,height: null,width: null,borderRadius: 5,borderWidth: 1,borderColor: "#dddddd"}}
                         initialRegion={this.state.mapRegion}
                         onRegionChange={this._handleMapRegionChange}
                         showsUserLocation={true}
                         followUserLocation={true}

                       >


                               <MapView.Polyline
                            coordinates={points}
                            strokeWidth={10}
                            strokeColor="#00a8ff"
                            lineDashPattern={[15,15]}
                            />


                   </MapView>
                  </View>
                  <TouchableOpacity onPress={()=>this.openDialogMAP(true)}><Text style={{fontSize: 14,fontWeight: '700'}}>View Large</Text></TouchableOpacity>
              </View>
          </View>

      

        </ScrollView>
        {/*DialogIS*/}
                      <Dialog
                          title="Snorkling Diving"
                          animationType="fade"
                          contentStyle={
                              {
                                  alignItems: "center",
                                  justifyContent: "center",
                              }
                          }
                          onTouchOutside={ () => this.openDialogIS(false) }
                          visible={ this.state.showDialogIS }
                      >
                      <View style={{height:150,marginTop: 10}}>
                        <ScrollView
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}
                        >
                          <DialogScroll imageUriScroll={require('../assets/scubaone.jpg')}  />
                          <DialogScroll imageUriScroll={require('../assets/scubatwo.jpg')}  />
                          <DialogScroll imageUriScroll={require('../assets/scubathree.jpg')} />
                          <DialogScroll imageUriScroll={require('../assets/scubafour.jpg') } />

                        </ScrollView>
                      </View>

                          <View style={{width: width-50,height: 200,marginTop: 10}}>
                          <ScrollView
                            vertical={true}
                            scrollEventThrottle={16}
                            showsVerticalScrollIndicator={false}
                          >
                              <Text style={{flex: 1,fontWeight: '500',backgroundColor: 'white'}}>
                              Scuba diving is the greatest action on the Andaman & Nicobar Isles other than relaxing around and tasting the delicacy of seafood.
                              The best year for diving in Andaman & Nicobar Isles is from Nov to April. However, one can indulge in a diving experience all through out the year.
                              This is one activity in Andaman, that is operational through out the year.
                              One can see the amazing sea life among the world of awesome water bodies, vibrant fish and awesome corals.
                                </Text>
                                <Text style={{fontSize: 10,fontWeight: '700',color:"#b63838"}}>Shore Diving in Port Blair	North Bay Island	Non Swimmers Or Beginners	Rs.3500</Text>
                                <Text style={{fontSize: 10,fontWeight: '700',color:"#b63838"}}>Shore Diving in Havelock Island	Nemo Reef, Beach No. 3	Non Swimmers Or Beginners	Rs.3500</Text>
                                <Text style={{fontSize: 10,fontWeight: '700',color:"#b63838"}}>Boat Diving in Port Blair	Carbyns Cove Beach	Non Swimmers Or Beginners	Rs.4200</Text>
                                <Text style={{fontSize: 10,fontWeight: '700',color:"#b63838"}}>Boat Diving in Havelock Island	Around Havelock	Non Swimmers Or Beginners	Rs.5500</Text>
                                <Text style={{fontSize: 10,fontWeight: '700',color:"#b63838"}}>Boat Diving in Neil Island	Around Neil	Non Swimmers Or Beginners	Rs.5000</Text>

                            </ScrollView>
                          </View>


                      <Button
                          onPress={ () => this.openDialogIS(false) }
                          style={ { marginTop: 10 } }
                      ><Icon name="arrow-back" /></Button>
                      </Dialog>
        {/*DialogIS*/}

        {/*DialogGame*/}
                      <Dialog
                          title="Game Fishing"
                          animationType="fade"
                          contentStyle={
                              {
                                  alignItems: "center",
                                  justifyContent: "center",
                              }
                          }
                          onTouchOutside={ () => this.openDialogGame(false) }
                          visible={ this.state.showDialogGame }
                      >
                      <View style={{height:150,marginTop: 10}}>
                        <ScrollView
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}
                        >
                          <DialogScroll imageUriScroll={require('../assets/gamefishingone.jpg')}  />
                          <DialogScroll imageUriScroll={require('../assets/gamefishingfour.jpg')}  />
                          <DialogScroll imageUriScroll={require('../assets/gamefishingtwothree.jpg')} />
                          <DialogScroll imageUriScroll={require('../assets/gamefishingtwojpg.jpg') } />

                        </ScrollView>
                      </View>

                          <View style={{width: width-50,height: 200,marginTop: 10}}>
                          <ScrollView
                            vertical={true}
                            scrollEventThrottle={16}
                            showsVerticalScrollIndicator={false}
                          >
                              <Text style={{flex: 1,fontWeight: '500',backgroundColor: 'white'}}>
                              Andaman Game Fishing is a premium game fishing operator in the Andaman & Nicobar Islands of India.
                              The Andaman and Nicobar Islands form an archipelago, which is located about 2000 km from the coast off India,
                               750 km off Thailand in the Indian Ocean. Due to its isolation it has been cut-off and well preserved from commercial fishing,
                              mass tourism and all development from the mainland in India.
                                </Text>

                            </ScrollView>
                          </View>


                      <Button
                          onPress={ () => this.openDialogGame(false) }
                          style={ { marginTop: 10 } }
                      ><Icon name="arrow-back" /></Button>
                      </Dialog>
        {/*DialogGame*/}



        {/*DialogAndamanBeach*/}
                      <Dialog
                          title="Andaman Beach"
                          animationType="fade"
                          contentStyle={
                              {
                                  alignItems: "center",
                                  justifyContent: "center",
                              }
                          }
                          onTouchOutside={ () => this.openDialogAndamanBeach(false) }
                          visible={ this.state.showDialogAndaman }
                      >
                      <View style={{height:150,marginTop: 10}}>
                        <ScrollView
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}
                        >
                          <DialogScroll imageUriScroll={require('../assets/andamanbeachone.jpg')}  />
                            <DialogScroll imageUriScroll={require('../assets/andamanbeachtwo.jpg')}  />
                              <DialogScroll imageUriScroll={require('../assets/andamanbeachthree.jpg')} />
                                <DialogScroll imageUriScroll={require('../assets/andamanbeachfour.jpg') } />
                        </ScrollView>
                      </View>

                      <ScrollView
                        vertical={true}
                        scrollEventThrottle={16}
                        showsVerticalScrollIndicator={false}
                      >
                          <Text style={{flex: 1,fontWeight: '500',backgroundColor: 'white'}}>
                            Andaman is blessed with swinging palm-lined trees, its soothing soft white sandy beaches, beautiful mangroves and alluring tropical rainforests.
                             Andaman is an ideal destination for beach tourism in India that can ease stress and you can spend a detachable time in the many tranquil and unspoiled places around.
                              The beaches in Andaman are an ideal holiday destinations for those who are tired of the ongoing and nerve-racking bustles of city life.
                               And you can lounge on the many beaches of Andaman Island like Radhanagar Beach - Havelock Island, Ross and Smith Island Beach,
                               Guitar Island Beach, Wandoor Beach - Port Blair, Pathi Level Beach - Diglipur to name a few.
                            This well-known gem in Andaman is undoubtedly the beach capital of India

                            </Text>

                        </ScrollView>
                      <Button
                          onPress={ () => this.openDialogAndamanBeach(false) }
                          style={ { marginTop: 10 } }
                      ><Icon name="arrow-back" /></Button>
                      </Dialog>
        {/*DialogAndamanBeach*/}


        {/*DialogMadd*/}
                      <Dialog
                          title="Maddening Silences"
                          animationType="fade"
                          contentStyle={
                              {
                                  alignItems: "center",
                                  justifyContent: "center",
                              }
                          }
                          onTouchOutside={ () => this.openDialogMadd(false) }
                          visible={ this.state.showDialogMadd }
                      >
                      <View style={{height:150,marginTop: 10}}>
                        <ScrollView
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}
                        >
                          <DialogScroll imageUriScroll={require('../assets/mdsilone.jpg')}  />
                            <DialogScroll imageUriScroll={require('../assets/mdsiltwo.jpg')}  />
                              <DialogScroll imageUriScroll={require('../assets/mdsilthree.jpg')} />

                        </ScrollView>
                      </View>
                      <Text style={ { marginVertical: 30 } }>
                        Andamans - It was a breathtaking first sight from the air, as Ajju and me kept peeping through the windows, the bluish green coastline kept coming closer and closer and then suddenly you are on a tiny piece of an island run way. Port Blair to a large extent is like any other town/ city in India.. the only big difference being - Its so much more neat and clean, less crowded, hardly any traffic, well equipped and maintained and peace ful people. ( I did also hear that the crime rate is pretty low)... Hmm should I include it as an option in my retirement plans.
                      </Text>
                      <Button
                          onPress={ () => this.openDialogMadd(false) }
                          style={ { marginTop: 10 } }
                      ><Icon name="arrow-back" /></Button>
                      </Dialog>
        {/*DialogMadd*/}

       
       

       
        {/*DialogMAP*/}
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
                       </MapView>
                      </View>
                      </Dialog>
        {/*DialogMAP*/}

        {/*DialogAbout*/}
                      <Dialog
                          title="About App"
                          animationType="fade"
                          contentStyle={
                              {
                                  alignItems:'center',
                                  justifyContent: "center",
                              }
                          }
                          onTouchOutside={ () => this.openDialogAbout(false) }
                          visible={ this.state.showDialogAbout }
                      >
                      <View style={{height: 200,width: 210,marginLeft: 17,borderWidth: 0.5,borderColor: '#dddddd'}}>
                        <View style={{flex: 1}}>
                          <Image source={require('../assets/appimg.png')}
                           style={{flex:1,width:210,height:200,resizeMode:'cover'}}
                           />
                        </View>
                      </View>
                      <View style={{width: width-50,height: 200,marginTop: 10,backgroundColor: "#b8e994"}}>
                      <ScrollView
                        vertical={true}
                        scrollEventThrottle={16}
                        showsVerticalScrollIndicator={false}
                      >

                          <Text style={{flex: 1,fontWeight: '700',backgroundColor: 'white',fontSize: 18,color: "#3d3d3d",paddingLeft: 10,backgroundColor: "#b8e994"}}>
                                
                            </Text>
                            <Text style={{fontSize: 13,fontWeight: '500',color:"#218c74",paddingLeft: 10}}>Offline Naviagtion</Text>
                            <Text style={{fontSize: 13,fontWeight: '500',color:"#218c74",paddingLeft: 10}}> Autodump bot to collect and process waste at tourist location</Text>
                            <Text style={{fontSize: 13,fontWeight: '500',color:"#218c74",paddingLeft: 10}}> Offline Integrated map with GPS tracking</Text>
                            <Text style={{fontSize: 13,fontWeight: '500',color:"#218c74",paddingLeft: 10}}>Upcoming event notification</Text>
                            <Text style={{fontSize: 15,fontWeight: '500',color:"#2c2c54",paddingLeft: 80}}></Text>

                        </ScrollView>
                      </View>

                      <TouchableOpacity onPress={this._handleOpenWithLinkingfeed}><Text style={{backgroundColor: "#F8EFBA",color: "#0c2461",fontSize: 17,fontWeight: '500'}}>
                      <Image source={require('../assets/ic.png')}
                       style={{height: 19,width: 19}}/>Give us a Feedback</Text></TouchableOpacity>

                      <Button
                          onPress={ () => this.openDialogAbout(false) }
                          style={ { marginTop: 3 } }
                      ><Icon name="arrow-back" /></Button>



                      </Dialog>
        {/*DialogAbout*/}

        {/*DialogDev*/}
                      <Dialog
                          title="About Developers"
                          animationType="fade"
                          contentStyle={
                              {
                                  alignItems:'center',
                                  justifyContent: "center",
                              }
                          }
                          onTouchOutside={ () => this.openDialogDev(false) }
                          visible={ this.state.showDialogDev }
                      >
                      <View style={{height: 200,width: 210,marginLeft: 17,borderWidth: 0.5,borderColor: '#dddddd'}}>
                        <View style={{flex: 1}}>
                          <Image source={require('../assets/dev.png')}
                           style={{flex:1,width:210,height:200,resizeMode:'cover'}}
                           />
                        </View>
                      </View>
                      <View style={{width: width-50,height: 200,marginTop: 10,backgroundColor: "#c7ecee"}}>
                      <ScrollView
                        vertical={true}
                        scrollEventThrottle={16}
                        showsVerticalScrollIndicator={false}
                      >
                            <Text style={{fontSize: 16,fontWeight: '500',color:"#eb4d4b",paddingLeft: 10}}>This application was developed by DBRAIT student</Text>

                        </ScrollView>
                      </View>

                      <Button
                          onPress={ () => this.openDialogDev(false) }
                          style={ { marginTop: 3 } }
                      ><Icon name="arrow-back" /></Button>
                  </Dialog>
        {/*DialogDev*/}



        {/*DialogTerm*/}
                      <Dialog
                          title="Terms and Conditions"
                          animationType="fade"
                          contentStyle={
                              {
                                  alignItems:'center',
                                  justifyContent: "center",
                              }
                          }
                          onTouchOutside={ () => this.openDialogTerm(false) }
                          visible={ this.state.showDialogTerm }
                      >
                      <View style={{height: 200,width: 210,marginLeft: 17,borderWidth: 0.5,borderColor: '#dddddd'}}>
                        <View style={{flex: 1}}>
                          <Image source={require('../assets/term.png')}
                           style={{flex:1,width:210,height:200,resizeMode:'cover'}}
                           />
                        </View>
                      </View>
                      <View style={{width: width-50,height: 200,marginTop: 10,backgroundColor: "#c7ecee"}}>
                      <ScrollView
                        vertical={true}
                        scrollEventThrottle={16}
                        showsVerticalScrollIndicator={false}
                      >
                           

                        </ScrollView>
                      </View>

                      <Button
                          onPress={ () => this.openDialogTerm(false) }
                          style={ { marginTop: 3 } }
                      ><Icon name="arrow-back" /></Button>


                      </Dialog>
        {/*DialogTerm*/}



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
