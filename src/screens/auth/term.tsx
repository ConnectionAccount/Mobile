import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import React, {useState, useContext, memo} from 'react';
import {AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar} from 'react-native-paper';
// import { Colors } from '../theme/color';
// import style from '../theme/style';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';
import style from '../../theme/style';
import {Colors} from '../../theme/color';

const {} = Dimensions.get('screen');

const TermScreen = memo(() => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={[style.area, {backgroundColor: Colors.bg, paddingTop: 10}]}>
      <StatusBar backgroundColor={'transparent'} translucent={true}></StatusBar>
      <View style={{flex: 1, marginHorizontal: 20, paddingTop: 10}}>
        <AppBar
          color={Colors.bg}
          title="Terms of Use"
          titleStyle={[style.m18, {color: Colors.secondary}]}
          centerTitle={true}
          elevation={0}
          leading={
            // <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
            <TouchableOpacity onPress={() => {}}>
              <Icon name="arrow-back" color={Colors.secondary} size={30} />
            </TouchableOpacity>
          } 
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: Colors.bg1,
              paddingVertical: 20,
              paddingHorizontal: 15,
            }}>
            <Text style={[style.b18, {color: Colors.secondary}]}>
              How To Put Movies On Iphone
            </Text>
            <Text
              style={[
                style.r14,
                {color: Colors.secondary, marginTop: 15, lineHeight: 20},
              ]}>
              Businesses at present had creatively generated effective
              advertising campaigns in the form of audio visual media that
              includes the television and radios and the print media that cover
              the newspaper and campaign materials like the posters, brochures,
              business cards, flyers and many more. Taking part with the flyers
              – they are tiny form or a single sheet promotional tool that
              easily spreads by hand. They are simply characterized as a simple
              yet compelling promotional material that helps businesses to
              easily reach out for their targeted audience. And because of this
              tool we were able to adapt and be aware of the advertising and
              promotion scheme given by advertising companies.
            </Text>
            <Text
              style={[
                style.r14,
                {color: Colors.secondary, marginTop: 25, lineHeight: 20},
              ]}>
              What makes flyers unrivaled – a frequently asked question by
              almost all businesses? What makes this material stand out and
              unparallel among other tools. Well flyer is among the most
              versatile and flexible printing material that efficiently works to
              get your customers attention and make them attentive to your
            </Text>
          </View>
        </ScrollView>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#E37FDE', Colors.primary]}
            style={[style.btn, {marginTop: 30, flex: 1}]}>
            <Text style={style.btntxt}>Argree</Text>
          </LinearGradient>
          <View style={{margin: 5}}></View>
          <View
            style={[
              style.btnoutline,
              {marginTop: 30, flex: 1, borderColor: Colors.primary},
            ]}>
            <Text style={style.btntxt}>Deny</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
});

TermScreen.displayName = 'TermScreen';

export {TermScreen};

const styles = StyleSheet.create({});
