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
// import { Colors } from '../theme/color';
// import style from '../theme/style';
import {useNavigation} from '@react-navigation/native';
// import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';
import style from '../../theme/style';
import {Colors} from '../../theme/color';
import {Field, Form} from '../../utils/form';
import * as yup from 'yup';

// const width = Dimensions.get('screen').width
// const height = Dimensions.get('screen').height

const schema = yup.object().shape({
  email: yup.string().required('Заавал бөглөнө үү!'),
});

const {width, height} = Dimensions.get('screen');

type ChangeFormProps = {
  email: string;
};

const ForgetPasswordScreen = memo(() => {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState<string | null>(null);

  const [data] = React.useState({email: ''});

  const onSubmit = (e: ChangeFormProps) => {};

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
              title="Forgot Password"
              titleStyle={[style.m18, {color: Colors.secondary}]}
              centerTitle={true}
              elevation={0}
              leading={
                // <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <TouchableOpacity onPress={() => {
                  navigation.goBack()
                }}>
                  <Icon name="arrow-back" color={Colors.secondary} size={30} />
                </TouchableOpacity>
              }
            />
          <TouchableWithoutFeedback>

            <ScrollView showsVerticalScrollIndicator={false}>
              <Form
                initialValues={data}
                onSubmit={onSubmit}
                validationSchema={schema}>
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
                        Enter your Email or phone number or phone number to
                        retrieve your password.
                      </Text>

                      <View
                        style={[
                          style.inputContainer,
                          {marginTop: 40},
                          isFocused === 'Email or phone number'
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
                            isFocused === 'Email or phone number'
                              ? Colors.primary
                              : Colors.lable
                          }></Icons>
                        <Field name={'email'}>
                          {({value, onChange}) => {
                            return (
                              <TextInput
                                placeholder="Email or phone number"
                                selectionColor={Colors.primary}
                                onFocus={() =>
                                  setIsFocused('Email or phone number')
                                }
                                onBlur={() => setIsFocused(null)}
                                value={value}
                                onChangeText={onChange}
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

                      {/* <TouchableOpacity onPress={() => navigation.navigate('ResetPass')}> */}
                      <TouchableOpacity onPress={() => handleSubmit()}>
                        <LinearGradient
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 1}}
                          colors={['#E37FDE', Colors.primary]}
                          style={[style.btn, {marginTop: 30}]}>
                          <Text style={style.btntxt}>Reset Password</Text>
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
});

ForgetPasswordScreen.displayName = 'ForgetPasswordScreen';

export {ForgetPasswordScreen};

const styles = StyleSheet.create({});
