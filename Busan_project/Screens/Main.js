import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Linking,
  StyleSheet,
  Alert,
  TouchableOpacity ,
  Image,
  View,
  Text,
  useColorScheme,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//언어 변경
import i18n from "i18n-js";
import '../i18n.js';

//원생수칙
const linkDormitory = 'https://dorm.pusan.ac.kr/dorm/bbs/list05/20000401';
import { NavigationContainer } from "@react-navigation/native";

import {useItems} from './ItemsState';

function Main ({navigation}) {
    const [lang, setLang] = useState(0);
    i18n.locale = lang;
//const changeKR = (language) => {
//    i18n.locale = language;
//    console.log(language);
////    this.setState({lang: language});
//};

//const [lang, setLang] = useState(0);
//    i18n.locale = lang;
  return (
    <View style={styles.container}>
            <ImageBackground source={require('../src/images/main_bg2.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.btnKr} onPress = {() => setLang('ko')}>
                        <Text style={styles.textKr}>한국어</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnKr} onPress = {() => setLang('en')}>
                        <Text style={styles.textKr}>ENG</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.section1}>
                    <View style={styles.title}>
                        <Image source={require('../src/images/main_logo.png')} style={styles.imageLogo}></Image>
                    </View>
                </View>
                <View style={styles.section2}>
                    <View style={styles.content1}>
                        <TouchableOpacity style={styles.conBtn} activeOpacity={1} onPress={() => navigation.navigate('Notification')}>
                            <Image source={require('../src/images/icon1.png')} style={styles.iconImage}></Image>
                            <Text style={styles.iconText}>{i18n.t(('main_title1'))}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.conBtn} activeOpacity={1} onPress={() => navigation.navigate('Menu')}>
                            <Image source={require('../src/images/icon2.png')} style={styles.iconImage}></Image>
                            <Text style={styles.iconText}>{i18n.t(('main_title2'))}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content2}>
                        <TouchableOpacity style={styles.con2Btn} activeOpacity={1} onPress={() => navigation.navigate('Notice')}>
                            <Image source={require('../src/images/icon3.png')} style={styles.iconImage}></Image>
                            <Text style={styles.iconText}>{i18n.t(('main_title3'))}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.con2Btn} activeOpacity={1} onPress={() => Linking.openURL(linkDormitory)}>
                            <Image source={require('../src/images/icon4.png')} style={styles.iconImage}></Image>
                            <Text style={styles.iconText}>{i18n.t(('main_title4'))}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.con2Btn} activeOpacity={1} onPress={() => navigation.navigate('Inquiries')}>
                            <Image source={require('../src/images/icon5.png')} style={styles.iconImage}></Image>
                            <Text style={styles.iconText}>{i18n.t(('main_title5'))}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    paddingTop: -10,
  },
  image : {
    flex : 1,
    justifyContent: "center",
  },
  section1 : {
    flex : 1,
    alignItems: "center",
    marginTop: 20,
  },
  section2 : {
      flex : 4,
    },
  title : {
    height: '80%',
    width: '80%',
  },
  nav : {
    marginTop: 35,
    height: 40,
    background: 'blue',
    flexDirection: 'row',
    justifyContent: "flex-end",
  },
  btnKr : {
    marginRight: 10,
    borderWidth:1,
    borderColor:'white',
    alignItems:'center',
    justifyContent:'center',
    width:65,
    height:"70%",
    borderRadius:6,
  },
  btnEn : {
    color: 'black',
  },
  textKr : {
  color : 'white',
  },
  imageLogo : {
    width: '100%',
    height: '90%',
    resizeMode : 'contain',
  },
  content1:{
    flex : 1,
    flexDirection: 'row',
    justifyContent: "center",
  },
  content2:{
      flex : 1,
      flexDirection: 'row',
      justifyContent: "center",
    },
  conBtn : {
    width: '47%',
    height: '70%',
    marginLeft: 5,
    marginRight: 5,
    backgroundColor : 'white',
    borderRadius: 10,
    alignItems: "center",
  },
  con2Btn : {
      width: '30.4%',
      height: '70%',
      marginTop: -60,
      marginLeft: 5,
      marginRight: 5,
      backgroundColor : 'white',
      borderRadius: 10,
      alignItems: "center",
   },
   iconImage : {
      width: 80,
      height: 80,
      resizeMode: 'contain',
      marginTop: 40,
   },
   iconText : {
    fontWeight: '700',
    color: 'black',
   },
});

export default Main;
