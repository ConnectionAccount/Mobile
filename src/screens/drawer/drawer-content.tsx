import React, { memo, useContext, useState } from "react";
import { View, StyleSheet, Dimensions, Image, Platform } from "react-native";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
import Icon1 from "react-native-vector-icons/Octicons";
// import Market from "./Market";

// import style from "../theme/style";
// import { Colors } from "../theme/color";
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from "../../theme/color";
import style from "../../theme/style";
// import NewsFeed from "./NewsFeed";
// import MyTabs from "../navigator/BottomNavigator";
// import Term from "./Term";


const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

// export function DrawerContent(props) 
const DrawerContent = memo((props: any) => {
    const navigation = useNavigation();
    return (
      <View style={{ flex: 1, backgroundColor: Colors.bg }}>
        <DrawerContentScrollView {...props} contentContainerStyle={{ flexGrow: 1, height: Platform.OS === 'ios' ? height : height }} showsVerticalScrollIndicator={false}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={['#E37FDE70', '#7E87F170']}
            style={{ borderRadius: 15, position: 'absolute', height: height / 10, width: width / 1.65, top: 60, marginHorizontal: 30, }}>
          </LinearGradient>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={['#E37FDE', Colors.primary]}
            style={{ padding: 15, marginHorizontal: 20, borderRadius: 15, marginTop: 10,paddingHorizontal:20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../../assets/image/a22.png')} resizeMode="stretch" style={{ height: height / 14, width: width / 6 }}></Image>
              <View style={{ marginLeft: 10 }}>
                <Text style={[style.b18, { color: Colors.secondary }]}>Dylan Dybala</Text>
                <Text style={[style.r16, { color: Colors.secondary, marginTop: 5 }]}>Balance: <Text style={[style.b16, { color: Colors.secondary }]}> $12,890.00</Text></Text>
              </View>
            </View>
  
          </LinearGradient>
  
          <DrawerItem
            icon={({ focused, color }) => (
              <Icon
                name="card-outline"
                color={focused ? Colors.primary : Colors.lable}
                size={25}
              />
            )}
            style={{ marginTop: 30 }}
            label="New Feed"
            labelStyle={{ color: Colors.lable }}
            onPress={() => {
              props.navigation.navigate("MyTabs");
            }}
          />
          <DrawerItem
            icon={({ focused, color }) => (
              <Icons
                name="bullseye-arrow"
                color={focused ? Colors.primary : Colors.lable}
                size={25}
              />
            )}
            label="My Game"
            labelStyle={{ color: Colors.lable }}
            onPress={() => {props.navigation.navigate('PAll')}}
          />
  
          <DrawerItem
            icon={({ focused, color }) => (
              <Icon1
                name="pulse"
                color={focused ? Colors.primary : Colors.lable}
                size={25}
              />
            )}
            label="My Quest"
            focused={true}
            labelStyle={{ color: Colors.lable }}
            onPress={() => {props.navigation.navigate('NewPass')}}
          />
          <DrawerItem
            icon={({ focused, color }) => (
              <Icons
                name="purse-outline"
                color={focused ? Colors.primary : Colors.lable}
                size={25}
              />
            )}
            label="Market"
            labelStyle={{ color: Colors.lable }}
          onPress={() => {props.navigation.navigate('Market')}}
          />
          <DrawerItem
            icon={({ focused, color }) => (
              <Icons
                name="purse-outline"
                color={focused ? Colors.primary : Colors.lable}
                size={25}
              />
            )}
            label="Exchange History"
            labelStyle={{ color: Colors.lable }}
            onPress={() => {props.navigation.navigate('NewPass')}}
          />
          <DrawerItem
            icon={({ focused, color }) => (
              <Icon
                name="briefcase-outline"
                color={focused ? Colors.primary : Colors.lable}
                size={25}
              />
            )}
            label="Term & Policy"
            labelStyle={{ color: Colors.lable }}
            onPress={() => { props.navigation.navigate('Term') }}
          />
          <DrawerItem
            icon={({ focused, color }) => (
              <Icons
                name="chat-outline"
                color={focused ? Colors.primary : Colors.lable}
                size={25}
              />
            )}
            label="Message"
            labelStyle={{ color: Colors.lable }}
          onPress={() => {props.navigation.navigate('Chatlist')}}
          />
          <DrawerItem
            icon={({ focused, color }) => (
              <Icons
                name="cog-outline"
                color={focused ? Colors.primary : Colors.lable}
                size={25}
              />
            )}
            label="Settings"
            labelStyle={{ color: Colors.lable }}
            onPress={() => {props.navigation.navigate('NewPass')}}
          />
  
          <DrawerItem
            icon={({ focused, color }) => (
              <Icon
                name="phone-portrait-sharp"
                color={focused ? Colors.primary : Colors.lable}
                size={25}
              />
            )}
            label="Contact Us"
            labelStyle={{ color: Colors.lable }}
            onPress={() => {props.navigation.navigate('NewPass')}}
          />
  
          
  
        </DrawerContentScrollView>
      </View>
    );
})

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  list: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
  },
});
