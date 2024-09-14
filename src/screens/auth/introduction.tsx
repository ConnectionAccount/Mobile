import { View, Text, FlatList, SafeAreaView, Dimensions, TouchableOpacity,StatusBar, StyleSheet } from 'react-native'
import React, { useState, memo } from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient';
import style from '../../theme/style';
import { Colors } from '../../theme/color';
import { IntroItem } from '../../components/auth/intro-item';

const Slides = [
    {
        id:1,
        title1:'DOTA2',
        subtitle:'MDL Disneyland Paris Major is set to kick off Saturday.',
        bg: require('../../assets/image/Onbor1.png'),
    },
    {
        id:2,
        title1:'CSGO',
        subtitle:'ASTRALIS – IEM Katowice 2019 Major Champions.',
        bg: require('../../assets/image/Onbor2.png'),
        
    },{
        id:3,
        title1:'LOLZ',
        subtitle:'2019 Mid-Season Invitational Play-In Opening Tease.',
        bg:require('../../assets/image/Onbor3.png'),
       
    },
];

const { width } = Dimensions.get("screen");

const IntroductionScreen = memo(() => {
    const ref = React.useRef<FlatList>(null);
    const navigation = useNavigation();
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const Footer = () => {
        return <View style={{ paddingHorizontal: 20, position: 'absolute', alignSelf: 'center' }} >
            <View style={{
                flexDirection: 'row', alignSelf: 'center',
            }}>
                {Slides.map((_, index) =>
                (
                    <View key={index}
                        style={[style.indicator, currentSlideIndex === index && {
                            borderColor: Colors.primary,
                            borderWidth: 1,
                            padding: 4,
                            borderRadius: 10,
                            backgroundColor: Colors.primary,
                            alignItems: 'center',

                        },]}
                    />
                ))}
            </View>
            <View>
                {currentSlideIndex == 0 ? (
                    <View style={{ paddingVertical: 20, paddingTop: 50, flexDirection: 'row', alignItems: 'center' }}>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('Login')}> */}
                        <TouchableOpacity onPress={() => {}}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                                colors={['#E37FDE', '#7E87F1',]} style={[style.btn, { width: width / 2.5, alignItems: 'center', }]}>
                                <Text style={[style.btntxt]}>Sign In</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <View style={{ margin: 10 }}></View>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('Signup')}> */}
                        <TouchableOpacity onPress={() => {}}>
                            <View style={[style.btn, { backgroundColor: 'transparent' ,borderColor:Colors.primary,borderWidth:1,width:width/2.5}]}>
                                    <Text style={[style.btntxt]}>Sign Up</Text>
                                </View>
                          </TouchableOpacity>
                    </View>

                ) : currentSlideIndex == 1 ? (
                    <View style={{ paddingVertical: 20, paddingTop: 50, flexDirection: 'row', alignItems: 'center', }}>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('Login')} > */}
                        <TouchableOpacity onPress={() => {}} >
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                                colors={['#E37FDE', '#7E87F1',]} style={[style.btn, { width: width / 2.5, alignItems: 'center', }]}>
                                <Text style={[style.btntxt]}>Sign In</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <View style={{ margin: 10 }}></View>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('Signup')}> */}
                        <TouchableOpacity onPress={() => {}}>
                            <View style={[style.btn, { backgroundColor: 'transparent' ,borderColor:Colors.primary,borderWidth:1,width:width/2.5}]}>
                                    <Text style={[style.btntxt]}>Sign Up</Text>
                                </View>
                          </TouchableOpacity>
                    </View>
                ) :
                    <View style={{ paddingVertical: 20, paddingTop: 50, flexDirection: 'row', alignItems: 'center', }}>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('Login')} > */}
                        <TouchableOpacity onPress={() => {}} >
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                                colors={['#E37FDE', '#7E87F1',]} style={[style.btn, { width: width / 2.5, alignItems: 'center', }]}>
                                <Text style={[style.btntxt]}>Sign In</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <View style={{ margin: 10 }}></View>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('Signup')}> */}
                        <TouchableOpacity onPress={() => {}}>
                            <View style={[style.btn, { backgroundColor: 'transparent' ,borderColor:Colors.primary,borderWidth:1,width:width/2.5}]}>
                                    <Text style={[style.btntxt]}>Sign Up</Text>
                                </View>
                          </TouchableOpacity>
                    </View>
                }
            </View>
        </View>
    }

    const updateCurrentSlideIndex = (e: any) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != Slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }

    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'transparent'} translucent={true}></StatusBar>
            <FlatList 
                data={Slides}
                ref={ref}
                renderItem={({ item }) => <IntroItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onMomentumScrollEnd={updateCurrentSlideIndex}
            />
            <View style={styles.footerContainer}>
                <Footer />
            </View>

        </SafeAreaView>
    )
})

export {IntroductionScreen}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footerContainer: {
        flex: 1,
        justifyContent: "flex-end"
    }
})