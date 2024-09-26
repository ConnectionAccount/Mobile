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
    Platform,
    TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useContext, memo} from 'react';
import {AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';
import style from '../../theme/style';
import {Colors} from '../../theme/color';
import {Field, Form} from '../../utils/form';
import * as yup from 'yup';
import { NavigationRoutes } from '../../navigation/types';
import * as AuthApi from "../../apis/otp";

const schema = yup.object().shape({
  password: yup.string().required('Заавал бөглөнө үү!'),
});
  
type ChangeForm = {password: string};

const OtpScreen = memo(() => {
    const navigation = useNavigation();
    const [isFocused, setIsFocused] = useState<string | null>(null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
    const [data] = useState({password: ''});
    const omSubmit = async (value: ChangeForm) => {
      try {
        // const response = 
      } catch (error) {
        console.log(error)
        throw error;
      }
    };
  
    return (
      <SafeAreaView
        style={[style.area, {backgroundColor: Colors.bg, paddingTop: 10}]}>
        <StatusBar backgroundColor={'transparent'} translucent={true}></StatusBar>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{flex: 1}}>
          <View style={{flex: 1, marginHorizontal: 20, paddingTop: 10}}>
            <AppBar
              color={Colors.bg}
              title="Reset Password"
              titleStyle={[style.m18, {color: Colors.secondary}]}
              centerTitle={true}
              elevation={0}
              leading={
                <TouchableOpacity onPress={() => {
                  navigation.navigate(NavigationRoutes.ForgetPasswordScreen)
                }}>
                  <Icon name="arrow-back" color={Colors.secondary} size={30} />
                </TouchableOpacity>
              }
            />
            <TouchableWithoutFeedback>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Form
                  initialValues={data}
                  validationSchema={schema}
                  onSubmit={omSubmit}>
                  {({handleSubmit}) => {
                    return (
                      <>
                        <Text
                          style={[
                            style.r16,
                            {
                              color: Colors.secondary,
                              textAlign: 'center',
                              marginTop: 25,
                            },
                          ]}>
                          Check your email or phone number to retrieve your
                          password.
                        </Text>
  
                        <View
                          style={[
                            style.inputContainer,
                            // { marginTop: 30, borderColor: isFocused === 'New password' ? Colors.primary : Colors.input, backgroundColor: isFocused === 'New password' ? null : Colors.input }
                            {marginTop: 30},
                            isFocused === 'New password'
                              ? {borderColor: Colors.primary}
                              : {
                                  borderColor: Colors.input,
                                  backgroundColor: Colors.input,
                                },
                          ]}>
                          <Icons
                            name="lock-outline"
                            size={25}
                            color={
                              isFocused === 'New password'
                                ? Colors.primary
                                : Colors.lable
                            }
                          />
                          <Field name={'otp'}>
                            {({value, onChange}) => {
                              return (
                                <TextInput
                                  placeholder="otp"
                                  selectionColor={Colors.primary}
                                  value={value}
                                  onChangeText={onChange}
                                  secureTextEntry={true}
                                  onFocus={() => setIsFocused('New password')}
                                  onBlur={() => setIsFocused(null)}
                                  placeholderTextColor={Colors.lable}
                                  style={[
                                    style.r14,
                                    {
                                      paddingHorizontal: 10,
                                      color: Colors.secondary,
                                      flex: 1,
                                    },
                                  ]}
                                />
                              );
                            }}
                          </Field>
                        </View>
  
                        <View
                          style={[
                            style.inputContainer,
                            // { borderColor: isFocused === 'Confirm New password' ? Colors.primary : Colors.input, backgroundColor: isFocused === 'Confirm New password' ? null : Colors.input, marginTop: 20 }
                            {marginTop: 20},
                            isFocused === 'Confirm New password'
                              ? {borderColor: Colors.primary}
                              : {
                                  borderColor: Colors.input,
                                  backgroundColor: Colors.input,
                                },
                          ]}>
                          <Icons
                            name="lock-outline"
                            size={25}
                            color={
                              isFocused === 'Confirm New password'
                                ? Colors.primary
                                : Colors.lable
                            }
                          />
                          <Field name={'confirm'}>
                            {({value, onChange}) => {
                              return (
                                <TextInput
                                  placeholder="Confirm New password"
                                  secureTextEntry={isPasswordVisible}
                                  value={value}
                                  onChangeText={onChange}
                                  onFocus={() =>
                                    setIsFocused('Confirm New password')
                                  }
                                  onBlur={() => setIsFocused(null)}
                                  selectionColor={Colors.primary}
                                  placeholderTextColor={Colors.lable}
                                  style={[
                                    style.r14,
                                    {
                                      paddingHorizontal: 10,
                                      color: Colors.secondary,
                                      flex: 1,
                                    },
                                  ]}
                                />
                              );
                            }}
                          </Field>
                          <TouchableOpacity
                            onPress={() =>
                              setIsPasswordVisible(!isPasswordVisible)
                            }>
                            <Icon
                              name={isPasswordVisible ? 'eye-off' : 'eye'}
                              color={
                                isFocused === 'Confirm New password'
                                  ? Colors.primary
                                  : Colors.lable
                              }
                              size={20}
                            />
                          </TouchableOpacity>
                        </View>
  
                        {/* <TouchableOpacity onPress={() => navigation.navigate('Login')}> */}
                        <TouchableOpacity onPress={() => handleSubmit()}>
                          <LinearGradient
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 1}}
                            colors={['#E37FDE', Colors.primary]}
                            style={[style.btn, {marginTop: 30}]}>
                            <Text style={style.btntxt}>Reset password</Text>
                          </LinearGradient>
                        </TouchableOpacity>
                      </>
                    );
                  }}
                </Form>
              </ScrollView>
            </TouchableWithoutFeedback>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
})

OtpScreen.displayName = "OtpScreen"

export { OtpScreen }

const styles = StyleSheet.create({})
