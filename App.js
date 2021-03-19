import React from 'react';
import {StyleSheet, View,Dimensions, Text } from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
function App() {
  return (
  <View style = {styles.container}>
    <View style= {styles.logo}>
      <View style= {styles.view_container}/>
      <View style = {styles.view_container2}/>
    </View>
    <View style = {styles.txt_container}>
      <View style = {styles.textView}>
        <Text style = {styles.txt}>Hello</Text>
      </View>
      <View style = {styles.textView1}>
        <View style = {styles.trai}>
            <Text>tlskjfl;</Text>
        </View>
        <View style = {styles.trai}>
          <Text>vielajsdjf</Text>
        </View>
      </View>
      <View style = {styles.circle}>
        
    </View>
    </View>
    
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    width:width,
    flexDirection: 'row',
    height: 50,
    justifyContent :"space-between"
  },
  view_container: {
    borderColor: 'red',
    borderWidth:2,
    width: (width-20)*0.5

  },
  view_container2: {
    borderColor: 'red',
    borderWidth:2,
    width: (width-20)*0.5
  },
  txt_container:{
    flexDirection :"column",
    height: height-55,
    width: width,
  },
  textView:{
    height : (height-55)*0.5,
    width :width,
    borderWidth:2,
    borderColor: "red",
    justifyContent :"center",
    alignItems :"center"
  },
  circle:{
    position :'absolute',
    borderRadius:120,
    alignSelf:'center',
    height:120,
    width:120,
    borderWidth: 2,
    borderColor: "blue",
    marginTop :(height-55)*0.5-60
  },
  textView1:{
    height : (height-55)*0.5,
    width :width,
    borderWidth:2,
    borderColor: "red",
    flexDirection:'row',
    justifyContent :"space-between"
  },
  trai :{
    justifyContent : 'center'
  }

})

export default App;
