import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
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
import {SafeAreaView} from 'react-native-safe-area-context';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import style from '../../theme/style';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar} from 'react-native-paper';
import * as yup from 'yup';
import {Colors} from '../../theme/color';
import {Field, Form} from '../../utils/form';

const {width, height} = Dimensions.get('screen');

type ChangeFormProps = {email: string; password: string};

const schema = yup.object().shape({
  email: yup.string().required('Заавал бөглөнө үү!'),
  password: yup.string().required('Заавал бөглөнө үү!'),
});

const LoginScreen = memo(() => {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState<string | null>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [data] = React.useState({email: '', password: ''});

  const onSubmit = (e: ChangeFormProps) => {
    console.log(e);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'transparent'} translucent={true}></StatusBar>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{flex: 1}}>
        <TouchableWithoutFeedback>
          <View style={styles.content}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Form
                initialValues={data}
                onSubmit={onSubmit}
                validationSchema={schema}>
                {({handleSubmit}) => {
                  return (
                    <>
                      <Image
                        source={require('../../assets/image/a.png')}
                        resizeMode="stretch"
                        style={styles.backgroundImage}
                      />
                      <View
                        style={[
                          style.inputContainer,
                          // { marginTop: 40, borderColor: isFocused === 'Email' ? Colors.primary : Colors.input, backgroundColor: isFocused === 'Email' ? null : Colors.input}
                          {marginTop: 40},
                          isFocused === 'Email'
                            ? {borderColor: Colors.primary}
                            : {
                                borderColor: Colors.input,
                                backgroundColor: Colors.input,
                              },
                        ]}>
                        <Icons
                          name="email-open-outline"
                          size={25}
                          color={
                            isFocused === 'Email'
                              ? Colors.primary
                              : Colors.lable
                          }></Icons>
                        <Field name={'email'}>
                          {({value, onChange}) => {
                            return (
                              <TextInput
                                placeholder="Email"
                                selectionColor={Colors.primary}
                                onFocus={() => setIsFocused('Email')}
                                onBlur={() => setIsFocused(null)}
                                onChangeText={onChange}
                                value={value}
                                placeholderTextColor={Colors.lable}
                                style={styles.email}
                              />
                            );
                          }}
                        </Field>
                      </View>

                      <View
                        style={[
                          style.inputContainer,
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
                          }></Icons>
                        <Field name={'password'}>
                          {({value, onChange}) => {
                            return (
                              <TextInput
                                placeholder="Password"
                                secureTextEntry={isPasswordVisible}
                                onFocus={() => setIsFocused('Password')}
                                onBlur={() => setIsFocused(null)}
                                selectionColor={Colors.primary}
                                placeholderTextColor={Colors.lable}
                                value={value}
                                onChangeText={onChange}
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

                      <View style={{alignItems: 'flex-end', marginTop: 10}}>
                        {/* <TouchableOpacity onPress={()=>navigation.navigate('ForgotPass')}> */}
                        <TouchableOpacity onPress={() => {}}>
                          <Text style={[style.r14, {color: Colors.secondary}]}>
                            Forgot Password?
                          </Text>
                        </TouchableOpacity>
                      </View>

                      {/* <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}> */}
                      <TouchableOpacity onPress={() => handleSubmit()}>
                        <LinearGradient
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 1}}
                          colors={['#E37FDE', Colors.primary]}
                          style={[style.btn, {marginTop: 30}]}>
                          <Text style={style.btntxt}>Sign In</Text>
                        </LinearGradient>
                      </TouchableOpacity>

                      <Text
                        style={[
                          style.r14,
                          {
                            color: Colors.lable,
                            textAlign: 'center',
                            marginTop: 40,
                          },
                        ]}>
                        Or by social accounts
                      </Text>

                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginTop: 20,
                        }}>
                        <Avatar.Image
                          source={require('../../assets/image/a1.png')}
                          size={50}
                          style={{backgroundColor: Colors.bg}}></Avatar.Image>
                        <Avatar.Icon
                          icon="google-plus"
                          color={Colors.secondary}
                          size={50}
                          style={{
                            backgroundColor: '#ED3269',
                            marginHorizontal: 30,
                          }}></Avatar.Icon>
                        <Avatar.Image
                          source={require('../../assets/image/a3.png')}
                          size={50}
                          style={{backgroundColor: Colors.bg}}></Avatar.Image>
                      </View>

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
                        {/* <TouchableOpacity onPress={()=>navigation.navigate('Signup')}> */}
                        <TouchableOpacity onPress={() => {}}>
                          <Text style={[style.b14, {color: Colors.primary}]}>
                            {' '}
                            Sign Up
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </>
                  );
                }}
              </Form>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
});

LoginScreen.displayName = 'LoginScreen';

export {LoginScreen};

const styles = StyleSheet.create({
  container: {
    ...style.area,
    backgroundColor: Colors.bg,
    paddingTop: 10,
  },
  content: {
    flex: 1,
    marginHorizontal: 20,
  },
  backgroundImage: {
    height: height / 3.9,
    width: width / 1.4,
    alignSelf: 'center',
    marginVertical: 20,
  },
  emailContainer: {},
  email: {
    ...style.r14,
    paddingHorizontal: 10,
    color: Colors.secondary,
    flex: 1,
  },
});
