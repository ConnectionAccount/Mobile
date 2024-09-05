import { Image, KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { memo, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const LoginScreen = memo(() => {
    const navigation = useNavigation();
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    
  return (
    <SafeAreaView style={[style.area,{backgroundColor:Colors.bg,paddingTop:10,}]}>
    <StatusBar backgroundColor={'transparent'} translucent={true}></StatusBar>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{flex:1}}>
    <View style={{flex:1,marginHorizontal:20}}>

    <ScrollView showsVerticalScrollIndicator={false}>
        
        <Image source={require('../../assets/image/a.png')} resizeMode='stretch' style={{height:height/3.9,width:width/1.4,alignSelf:'center',marginVertical:20}}></Image>

        <View style={[style.inputContainer, { marginTop: 40, borderColor: isFocused === 'Email' ? Colors.primary : Colors.input, backgroundColor: isFocused === 'Email' ? null : Colors.input}]}>
            <Icons name='email-open-outline' size={25} color={isFocused === 'Email' ? Colors.primary : Colors.lable}></Icons>
            <TextInput placeholder='Email'
            selectionColor={Colors.primary}
            onFocus={() => setIsFocused('Email')}
            onBlur={() => setIsFocused(false)}
            placeholderTextColor={Colors.lable}
            style={[style.r14, { paddingHorizontal: 10, color: Colors.secondary, flex: 1 }]}
            />
        </View>

        <View style={[style.inputContainer, { borderColor: isFocused === 'Password' ? Colors.primary :Colors.input, backgroundColor: isFocused === 'Password' ? null: Colors.input,marginTop:20 }]}>
            <Icons name='lock-outline' size={25} color={isFocused === 'Password' ? Colors.primary : Colors.lable}></Icons>
            <TextInput placeholder='Password'
            secureTextEntry={isPasswordVisible}
            onFocus={() => setIsFocused('Password')}
            onBlur={() => setIsFocused(false)}
            selectionColor={Colors.primary}
            placeholderTextColor={Colors.lable}
            style={[style.r14, { paddingHorizontal: 10, color: Colors.secondary, flex: 1 }]}
            />
            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} >
            <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} color={isFocused === 'Password' ? Colors.primary : Colors.lable} size={20} />
            </TouchableOpacity>
        </View>

        <View style={{alignItems:'flex-end',marginTop:10}}>
            <TouchableOpacity onPress={()=>navigation.navigate('ForgotPass')}>
            <Text style={[style.r14,{color:Colors.secondary,}]}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
        <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#E37FDE', Colors.primary]}
            style={[style.btn,{marginTop:30}]}>
            <Text style={style.btntxt}>Sign In</Text>
        </LinearGradient>
        </TouchableOpacity>

        <Text style={[style.r14,{color:Colors.lable,textAlign:'center',marginTop:40}]}>Or by social accounts</Text>

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:20}}>
            <Avatar.Image source={require('../../assets/image/a1.png')} size={50} style={{backgroundColor:Colors.bg}}></Avatar.Image>
            <Avatar.Icon icon='google-plus' color={Colors.secondary} size={50} style={{backgroundColor:'#ED3269',marginHorizontal:30}} ></Avatar.Icon>
            <Avatar.Image source={require('../../assets/image/a3.png')} size={50} style={{backgroundColor:Colors.bg}}></Avatar.Image>
        </View>

        <View style={{flexDirection:'row',justifyContent:'center',marginBottom:10,marginTop:50}}>
            <Text style={[style.r14,{color:Colors.lable}]}>Don't have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                <Text style={[style.b14,{color:Colors.primary,}]}> Sign Up</Text>
            </TouchableOpacity>
        </View>

    </ScrollView>
    
    </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
})

LoginScreen.displayName = "LoginScreen";

export {LoginScreen}

const styles = StyleSheet.create({})