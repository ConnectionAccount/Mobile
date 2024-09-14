import {
    View, Text, Dimensions, TouchableOpacity, SafeAreaView, ImageBackground, StatusBar, StyleSheet
} from 'react-native'
import React, { memo } from 'react'
import { useNavigation } from '@react-navigation/native';
import style from '../../theme/style';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const { width, height } = Dimensions.get("screen");

const IntroItem = memo(({ item }: any) => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ width: width, }}>
            {/* <StatusBar backgroundColor="transparent" translucent={true} /> */}
            <View >
                <ImageBackground source={item.bg} resizeMode='stretch' style={{ width: width, height: height, }}>
                <StatusBar backgroundColor='transparent' translucent={true}></StatusBar>
                    <View style={{flex:1,alignItems:'flex-end',marginHorizontal:20,}}>
                        <View style={{marginTop:40}}>
                        {/* <TouchableOpacity  onPress={()=>navigation.navigate('Login')} */}
                        <TouchableOpacity  onPress={() => {}}
                            style={[style.btnoutline, { height:35,alignItems:'center'}]}  >
                                <Text style={[style.btntxt]}>SKIP</Text>
                            </TouchableOpacity>
                        
                        </View>
                    </View>
                    <View style={{flex:1,}}>
                    <View style={{paddingHorizontal: 18,paddingTop: 70,}}>
                        <Text style={[style.title, { textAlign: 'center', color: Colors.secondary }]}>{item.title1}</Text>
                        <View style={{ paddingTop: 15 }}>
                            <Text style={[style.r16, { color: Colors.secondary, textAlign: 'center' }]}>{item.subtitle}</Text>
                        </View>
                    </View>
                    </View>
                    
                </ImageBackground>
            </View>

        </SafeAreaView>
    )
})

IntroItem.displayName = "IntroItem";

export {IntroItem}

const styles = StyleSheet.create({})