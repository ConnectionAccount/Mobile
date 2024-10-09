import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, memo} from 'react';
import {AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import style from '../../theme/style';
import {Colors} from '../../theme/color';

const CreateAccountScreen = memo(() => {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState<string | null>(null);

  return (
    <SafeAreaView
      style={[style.area, {backgroundColor: Colors.bg, paddingTop: 10}]}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{flex: 1}}>
        <View style={{flex: 1, marginHorizontal: 20, paddingTop: 10}}>
          <AppBar
            color={Colors.bg}
            title="Create An Account"
            titleStyle={[style.m18, {color: Colors.secondary}]}
            centerTitle={true}
            elevation={0}
            leading={
              //   <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Icon name="arrow-back" color={Colors.secondary} size={30} />
              </TouchableOpacity>
            }
          />
          <TouchableWithoutFeedback>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Avatar.Image
                source={require('../../assets/image/a4.png')}
                size={100}
                style={{
                  backgroundColor: Colors.bg,
                  alignSelf: 'center',
                  marginTop: 30,
                }}
              />
              <View
                style={[
                  style.inputContainer,
                  {marginTop: 50},
                  isFocused === 'Full name'
                    ? {borderColor: Colors.primary}
                    : {
                        borderColor: Colors.input,
                        backgroundColor: Colors.input,
                      },
                ]}>
                <Icon
                  name="person-circle-outline"
                  size={25}
                  color={
                    isFocused === 'Full name' ? Colors.primary : Colors.lable
                  }
                />
                <TextInput
                  placeholder="Full name"
                  selectionColor={Colors.primary}
                  onFocus={() => setIsFocused('Full name')}
                  onBlur={() => setIsFocused(null)}
                  placeholderTextColor={Colors.lable}
                  style={[
                    style.r14,
                    {paddingHorizontal: 10, color: Colors.secondary, flex: 1},
                  ]}
                />
              </View>

              <View
                style={[
                  style.inputContainer,
                  {marginTop: 20},
                  isFocused === 'Phone number'
                    ? {borderColor: Colors.primary}
                    : {
                        borderColor: Colors.input,
                        backgroundColor: Colors.input,
                      },
                  // {
                  //   marginTop: 20,
                  //   borderColor:
                  //     isFocused === 'Phone number'
                  //       ? Colors.primary
                  //       : Colors.input,
                  //   backgroundColor:
                  //     isFocused === 'Phone number' ? null : Colors.input,
                  // },
                ]}>
                <Icon
                  name="phone-portrait-sharp"
                  size={25}
                  color={
                    isFocused === 'Phone number' ? Colors.primary : Colors.lable
                  }
                />
                <TextInput
                  placeholder="Phone number"
                  selectionColor={Colors.primary}
                  onFocus={() => setIsFocused('Phone number')}
                  onBlur={() => setIsFocused(null)}
                  placeholderTextColor={Colors.lable}
                  style={[
                    style.r14,
                    {paddingHorizontal: 10, color: Colors.secondary, flex: 1},
                  ]}
                />
              </View>

              <View
                style={[
                  style.inputContainer,
                  // {
                  //   marginTop: 20,
                  //   borderColor:
                  //     isFocused === 'Age' ? Colors.primary : Colors.input,
                  //   backgroundColor: isFocused === 'Age' ? null : Colors.input,
                  // },
                  {marginTop: 20},
                  isFocused === 'Age'
                    ? {borderColor: Colors.primary}
                    : {
                        borderColor: Colors.input,
                        backgroundColor: Colors.input,
                      },
                ]}>
                <Icons
                  name="account-reactivate"
                  size={25}
                  color={isFocused === 'Age' ? Colors.primary : Colors.lable}
                />
                <TextInput
                  placeholder="Age"
                  selectionColor={Colors.primary}
                  onFocus={() => setIsFocused('Age')}
                  onBlur={() => setIsFocused(null)}
                  placeholderTextColor={Colors.lable}
                  style={[
                    style.r14,
                    {paddingHorizontal: 10, color: Colors.secondary, flex: 1},
                  ]}
                />
                <Icon
                  name="caret-down"
                  size={25}
                  color={isFocused === 'Age' ? Colors.primary : Colors.lable}
                />
              </View>

              <View
                style={[
                  style.inputContainer,
                  // {
                  //   marginTop: 20,
                  //   borderColor:
                  //     isFocused === 'Male' ? Colors.primary : Colors.input,
                  //   backgroundColor: isFocused === 'Male' ? null : Colors.input,
                  // },
                  {marginTop: 20},
                  isFocused === 'Male'
                    ? {borderColor: Colors.primary}
                    : {
                        borderColor: Colors.input,
                        backgroundColor: Colors.input,
                      },
                ]}>
                <Icons
                  name="clipboard-account"
                  size={25}
                  color={isFocused === 'Male' ? Colors.primary : Colors.lable}
                />
                <TextInput
                  placeholder="Male"
                  selectionColor={Colors.primary}
                  onFocus={() => setIsFocused('Male')}
                  onBlur={() => setIsFocused(null)}
                  placeholderTextColor={Colors.lable}
                  style={[
                    style.r14,
                    {paddingHorizontal: 10, color: Colors.secondary, flex: 1},
                  ]}
                />
                <Icon
                  name="caret-down"
                  size={25}
                  color={isFocused === 'Age' ? Colors.primary : Colors.lable}
                />
              </View>

              {/* <TouchableOpacity onPress={() => navigation.navigate('AddCard')} */}
              <TouchableOpacity onPress={() => {}} style={{marginBottom: 20}}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  colors={['#E37FDE', Colors.primary]}
                  style={[style.btn, {marginTop: 40}]}>
                  <Text style={style.btntxt}>Submit</Text>
                </LinearGradient>
              </TouchableOpacity>
            </ScrollView>
          </TouchableWithoutFeedback>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
});

CreateAccountScreen.displayName = 'CreateAccountScreen';

export {CreateAccountScreen};

const styles = StyleSheet.create({});
