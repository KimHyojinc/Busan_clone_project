import React, {Component} from 'react';
import { Header, HeaderProps, Icon } from 'react-native-elements';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Alert,
  TouchableOpacity ,
  useState,
  Image,
  View,
  Text,
  useColorScheme,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { WebView } from 'react-native-webview';

//언어 변경
import i18n from "i18n-js";
import '../i18n.js';

const changeKR = (language) => {
    i18n.locale = language;
    console.log(language);
};


import { NavigationContainer } from "@react-navigation/native";

class Notice extends Component {
  render() {
      return (
        <View>
          <View styles={{flex: 1}}>
              <Header backgroundColor={'white'}
                       placement="left"
                        leftComponent={
                        <View>
                        <TouchableOpacity onPress = {() => this.goMain()}>
                          <Icon name="chevron-left" />
                          </TouchableOpacity>
                        </View>
                        }
                        centerComponent={{ text: i18n.t(('main_title3')), style: { color: 'black' } }}
                      />
          </View>
          <ScrollView contentContainerStyle={{flexGrow: 1, height: '100%' ,}}>
              <WebView
                      source={{uri: 'https://dorm.pusan.ac.kr/dorm/bbs/list01/20000601'}}
                      styles={{flex:1}}
                    />
          </ScrollView>
        </View>
      );
    }
    goMain(){
        this.props.navigation.navigate('Main');
      }
}

export default Notice;
