import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {memo, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import style from '../../theme/style';
import {Colors} from '../../theme/color';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {Field, Form} from '../../utils/form';
import * as yup from 'yup';
import { NavigationRoutes } from '../../navigation/types';
import * as AuthApi from "../../apis/auth";
import { useDispatch, useSelector } from 'react-redux';
import { authReducer, setAuth } from '../../store/auth';

const {width, height} = Dimensions.get('screen');

type ChangeForm = {username: string; email: string; password: string; confirm: string; phone: string};

const schema = yup.object().shape({
  username: yup.string().required('Заавал бөглөнө үү!'),
  email: yup.string().required('Заавал бөглөнө үү!'),
  password: yup.string().required('Заавал бөглөнө үү!'),
  confirm: yup.string().required('Заавал бөглөнө үү!'),
  phone: yup.string().required('Заавал бөглөнө үү!'),
});

const SignupScreen = memo(() => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState<string | null>(null);

  const [data] = useState({username: '', email: '', password: '', confirm: '', phone: ""});

  const onSubmit = async (payload: ChangeForm) => {
    const { confirm, password, email, username, phone } = payload;
    // if (confirm !== password) return;
    try {
      const response = await AuthApi.register({
        username,
        email,
        phone,
        password
      })
      if (!response) return;
      dispatch(setAuth(response.accessToken))
      console.log(response)
    } catch (error) {
      console.log(error)
      throw error;
    } finally {
    }
  };

  return (
    <SafeAreaView
      style={[style.area, {backgroundColor: Colors.bg, paddingTop: 10}]}>
      <StatusBar backgroundColor={'transparent'} translucent={true}></StatusBar>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{flex: 1}}>
        <View style={{flex: 1, marginHorizontal: 20}}>
          <TouchableWithoutFeedback>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Form
                initialValues={data}
                validationSchema={schema}
                onSubmit={onSubmit}>
                {({handleSubmit}) => {
                  return (
                    <>
                      <Image
                        // source={require('../../assets/image/a.png')}
                        source={require('../../assets/image/a.png')}
                        resizeMode="stretch"
                        style={{
                          height: height / 3.9,
                          width: width / 1.4,
                          alignSelf: 'center',
                          marginVertical: 20,
                        }} />

                      <View
                        style={[
                          style.inputContainer,
                          {
                            marginTop: 40,
                            borderColor:
                              isFocused === 'User name'
                                ? Colors.primary
                                : Colors.input,
                          },
                          isFocused === 'User name' && {
                            backgroundColor: Colors.input,
                          },
                          // backgroundColor: isFocused !== 'User name' ? null : Colors.input
                        ]}>
                        <Icon
                          name="person-circle-outline"
                          size={25}
                          color={
                            isFocused === 'User name'
                              ? Colors.primary
                              : Colors.lable
                          }
                        />
                        <Field name={'username'}>
                          {({value, onChange}) => {
                            return (
                              <TextInput
                                placeholder="User name"
                                selectionColor={Colors.primary}
                                value={value}
                                onChangeText={onChange}
                                onFocus={() => setIsFocused('User name')}
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
                          isFocused === 'Email' && {
                            backgroundColor: Colors.input,
                          },
                          {
                            marginTop: 20,
                            borderColor:
                              isFocused === 'Email'
                                ? Colors.primary
                                : Colors.input,
                          },
                        ]}>
                        <Icons
                          name="email-open-outline"
                          size={25}
                          color={
                            isFocused === 'Email'
                              ? Colors.primary
                              : Colors.lable
                          }
                        />
                        <Field name={'email'}>
                          {({value, onChange}) => {
                            return (
                              <TextInput
                                placeholder="Email"
                                selectionColor={Colors.primary}
                                value={value}
                                onChangeText={onChange}
                                onFocus={() => setIsFocused('Email')}
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
                          isFocused === 'Phone' && {
                            backgroundColor: Colors.input,
                          },
                          {
                            marginTop: 20,
                            borderColor:
                              isFocused === 'Phone'
                                ? Colors.primary
                                : Colors.input,
                          },
                        ]}>
                        <Icons
                          name="email-open-outline"
                          size={25}
                          color={
                            isFocused === 'Phone'
                              ? Colors.primary
                              : Colors.lable
                          }
                        />
                        <Field name={'phone'}>
                          {({value, onChange}) => {
                            return (
                              <TextInput
                                placeholder="Phone"
                                selectionColor={Colors.primary}
                                value={value}
                                onChangeText={onChange}
                                onFocus={() => setIsFocused('Phone')}
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
                          // { borderColor: isFocused === 'Password' ? Colors.primary : Colors.input, backgroundColor: isFocused === 'Password' ? null : Colors.input, marginTop: 20 }
                          {marginTop: 20},
                          isFocused === 'Password'
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
                            isFocused === 'Password'
                              ? Colors.primary
                              : Colors.lable
                          }
                        />
                        <Field name={'password'}>
                          {({value, onChange}) => {
                            return (
                              <TextInput
                                placeholder="Password"
                                secureTextEntry={isPasswordVisible}
                                value={value}
                                onChangeText={onChange}
                                onFocus={() => setIsFocused('Password')}
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
                              isFocused === 'Password'
                                ? Colors.primary
                                : Colors.lable
                            }
                            size={20}
                          />
                        </TouchableOpacity>
                      </View>

                      <View
                        style={[
                          style.inputContainer,
                          // { marginTop: 20, borderColor: isFocused === 'Confirm password' ? Colors.primary : Colors.input, backgroundColor: isFocused === 'Confirm password' ? null : Colors.input }
                          {marginTop: 20},
                          isFocused === 'Confirm password'
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
                            isFocused === 'Confirm password'
                              ? Colors.primary
                              : Colors.lable
                          }
                        />
                        <Field name={'confirm'}>
                          {({value, onChange}) => {
                            return (
                              <TextInput
                                placeholder="Confirm password"
                                selectionColor={Colors.primary}
                                secureTextEntry={true}
                                value={value}
                                onChangeText={onChange}
                                onFocus={() => setIsFocused('Confirm password')}
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
                      {/* <TouchableOpacity onPress={() => navigation.navigate('CreateAcc')}> */}
                      <TouchableOpacity onPress={() => handleSubmit()}>
                        <LinearGradient
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 1}}
                          colors={['#E37FDE', Colors.primary]}
                          style={[style.btn, {marginTop: 30}]}>
                          <Text style={style.btntxt}>Sign Up</Text>
                        </LinearGradient>
                      </TouchableOpacity>

                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          marginBottom: 10,
                          marginTop: 50,
                        }}>
                        <Text style={[style.r14, {color: Colors.lable}]}>
                          Don't have an account?
                        </Text>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('Login')}> */}
                        <TouchableOpacity onPress={() => {
                          navigation.navigate(NavigationRoutes.LoginScreen)
                        }}>
                          <Text style={[style.b14, {color: Colors.primary}]}>
                            {' '}
                            Sign In
                          </Text>
                        </TouchableOpacity>
                      </View>
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
});

SignupScreen.displayName = 'SignupScreen';

export {SignupScreen};

const styles = StyleSheet.create({});
