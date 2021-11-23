
import React, {Component, useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';
import SplashScreen from 'react-native-splash-screen';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Alert,
  TouchableOpacity ,
  Image,
  Fragment,
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

//페이지 임포트
import Main from "./Screens/Main";
import Notification from "./Screens/Notification";
import Menu from "./Screens/Menu";
import Notice from "./Screens/Notice";
import DormitoryRules from "./Screens/DormitoryRules";
import Inquiries from "./Screens/Inquiries";

//네이게이션
import {createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle("dark-content");

//언어 변경
import i18n from "i18n-js";
import './i18n.js';


const Stack = createStackNavigator();
i18n.locale = 'ko';

setTimeout(() => {
SplashScreen.hide();
}, 1000);

export default function App() {
//const [lang, setLang] = useState(0);
//    i18n.locale = lang;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} options={{headerShown: false}}/>
        <Stack.Screen name="Notification" component={Notification} options={{headerShown: false}}/>
        <Stack.Screen name="Notice" component={Notice} options={{headerShown: false}}/>
        <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}}/>
        <Stack.Screen name="Inquiries" component={Inquiries} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
