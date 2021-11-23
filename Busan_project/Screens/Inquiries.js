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
  Linking,
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

//언어 변경
import i18n from "i18n-js";
import '../i18n.js';

const changeKR = (language) => {
    i18n.locale = language;
    console.log(language);
};
import { NavigationContainer } from "@react-navigation/native";


function Inquiries({navigation}) {
  return (
    <SafeAreaView style={styles.section} forceInset={{ top: 'always' }}>
        <Header backgroundColor={'white'}
                 placement="left"
                  leftComponent={
                  <View>
                  <TouchableOpacity onPress = {() => navigation.navigate('Main')}>
                    <Icon name="chevron-left" />
                    </TouchableOpacity>
                  </View>
                  }
                  centerComponent={{ text: i18n.t(('main_title5')), style: { color: 'black' } }}
                />
        <View>
            <Text style={styles.h2}>{i18n.t(('sub_page5_t1'))}</Text>
        </View>
        <View style={{textAlign: 'center', paddingRight:10, paddingLeft:10, marginBottom: 30,}}>
            <Text style={styles.textCenter}>{i18n.t(('sub_page5_t1_t1'))}</Text>
            <Text>{i18n.t(('sub_page5_t1_t2'))}</Text>
        </View>
        <View>
            <Text style={styles.h2}>{i18n.t(('sub_page4_t1'))}</Text>
        </View>
        <View>
            <TouchableOpacity style={styles.secBtn} onPress={() => Linking.openURL("https://dorm.pusan.ac.kr/")}>
                <Text style={styles.btnText}>{i18n.t(('sub_page4_b1'))}</Text>
            </TouchableOpacity>
            <View style={{textAlign: 'center', paddingRight:10, paddingLeft:10, marginBottom: 5, marginTop: 5,}}>
                <Text style={styles.textCenter}>{i18n.t(('sub_page4_b1_t'))}</Text>
            </View>
            <TouchableOpacity style={styles.secBtn} onPress={() => Linking.openURL("https://dorm.pusan.ac.kr/")}>
                <Text style={styles.btnText}>{i18n.t(('sub_page4_b2'))}</Text>
            </TouchableOpacity>
            <View style={{textAlign: 'center', paddingRight:10, paddingLeft:10, marginBottom: 5, marginTop: 5,}}>
                <Text style={styles.textCenter}>{i18n.t(('sub_page4_b2_t'))}</Text>
            </View>
            <TouchableOpacity style={styles.secBtn} onPress={() =>  Linking.openURL("tel: 0515107827")}>
                <Text style={styles.btnText}>{i18n.t(('sub_page4_b3'))}</Text>
            </TouchableOpacity>
            <View style={{textAlign: 'center', paddingRight:10, paddingLeft:10, marginBottom: 5, marginTop: 5,}}>
                <Text style={styles.textCenter}>{i18n.t(('sub_page4_b3_t'))}</Text>
             </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    section : {
        paddingLeft: 10,
        flexDirection: 'column',
        paddingRight: 10,
        paddingTop: 10,
//        alignItems:'center',
    },
    h2 : {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10,
        alignItems: 'flex-start',
    },
    secBtn : {
        backgroundColor: '#5882FA',
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        borderRadius: 10,
    },
    btnText : {
        color: 'white',
        fontSize: 20,
        alignItems:'center'
    },
});


export default Inquiries;
