import React, { Component, useState } from 'react';
import DropDownItem from 'react-native-drop-down-item';
import { Header, HeaderProps, Icon } from 'react-native-elements';
import {
  ImageBackground,
  SafeAreaView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Alert,
  TouchableOpacity ,
  Image,
  Fragment,
  View,
  Switch,
  Text,
  BackHandler,
  useColorScheme,
} from 'react-native';

//언어 변경
import i18n from "i18n-js";
import '../i18n.js';
import Main from './Main';

//네이게이션
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const IC_ARR_DOWN = require('../src/images/ic_arr_down.png');
const IC_ARR_UP = require('../src/images/ic_arr_up.png');

type Props = {};

export default class Notification extends Component<Props> {
  state = {
    contents: [
      {
        title: '안녕하세요',
        body: 'Hi. I love this component. What do you think?',
      },
      {
        title: 'See this one too',
        body: 'Yes. You can have more items.',
      },
      {
        title: 'Thrid thing',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Header backgroundColor={'white'}
         placement="left"
          leftComponent={
          <View>
          <TouchableOpacity onPress = {() => this.goMain()}>
            <Icon name="chevron-left" />
            </TouchableOpacity>
          </View>
          }
          centerComponent={{ text: i18n.t(('main_title1')), style: { color: 'black' } }}
        />
        <View style={styles.section} style={{marginTop: 15, paddingLeft: 10, marginBottom: 10}}>
            <Text style={{fontSize: 20, color: 'black', textAlign: 'left', fontWeight: '700'}}>{i18n.t(('sub_page1_t1'))}</Text>
            <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    style={{alignSelf: 'flex-end', marginTop: -20,}}
                  />
        </View>
        <View style={styles.section}>
            <Text style={{fontSize: 20, color: 'black', textAlign: 'left', fontWeight: '700'}}>{i18n.t(('sub_page1_t2'))}</Text>
        </View>
        <ScrollView style={{ alignSelf: 'stretch' }}>
          {
            this.state.contents
              ? this.state.contents.map((param, i) => {
                return (
                  <DropDownItem
                    key={i}
                    style={styles.dropDownItem}
                    contentVisible={false}
                    invisibleImage={IC_ARR_DOWN}
                    visibleImage={IC_ARR_UP}
                    header={
                      <View style={styles.header}>
                        <Text style={{
                          fontSize: 16,
                          color: 'black',
                        }}>{param.title}</Text>
                      </View>
                    }
                  >
                    <Text style={[
                      styles.txt,
                      {
                        fontSize: 30,
                      },
                    ]}>
                      {param.body}
                    </Text>
                  </DropDownItem>
                );
              })
              : null
          }
          <View style={{ height: 96 }}/>
        </ScrollView>
      </View>
    );
  }

  goMain(){
    this.props.navigation.navigate('Main');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 0,
  },
  header: {
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 12,
    color: 'rgb(74,74,74)',
    marginRight: 60,
    flexWrap: 'wrap',
  },
  txt: {
    fontSize: 14,
  },
  section : {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 10,
  },
});
