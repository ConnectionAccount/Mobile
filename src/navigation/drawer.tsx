import { memo } from "react";
import React,{useContext,useState} from 'react';
import {StyleSheet,Text,View,Dimensions} from 'react-native';
import { DrawerContent, createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import { Colors } from '../theme/color';
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon1 from 'react-native-vector-icons/Octicons';
// import { DrawerContent } from '../screens/DrawerContent';
// import Market from '../screens/Market';
// import NewsFeed from '../screens/NewsFeed';

const Drawerr = createDrawerNavigator();
const { width, height } = Dimensions.get("screen");

const { Navigator, Screen } = Drawerr;

const Drawer = memo(() => {
    return (
      <Navigator 
        drawerContent={props => <DrawerContent {...props} />}
        //  defaultStatus="open"
        initialRouteName='NewsFeed'
        screenOptions={{drawerPosition:'left',
        drawerStyle:{width:width/1.15,paddingLeft:10,paddingRight:10,backgroundColor:Colors.bg},
        swipeEnabled:true,
        overlayColor:'transparent',
        drawerType:'front',
        // drawerHideStatusBarOnOpen:true
        
        }}
      // screenOptions={{drawerPosition:'right'}}
      >
        {/* <Screen name="NewsFeed" component={NewsFeed}  */}
        <Screen name="NewsFeed" component={() => <></>} 
            options={{
            // drawerLabel:({focused, color,}) => (
            //   <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'Urbanist-Regular'}}>Inbox</Text>
            // ),
            // drawerIcon:({focused,color}) => {
            //   return <Icon1 name="inbox" size={25} 
            //   color={focused ? Colors.primary : Colors.disable} />
            // },
            headerShown:false,
            }}
        />
        {/* <Drawer.Screen name="Starred" component={NewPass} 
        options={{
          drawerLabel:({focused, color,}) => (
            <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'Urbanist-Regular'}}>Starred</Text>
          ),
          drawerIcon:({focused,color}) => {
            return <Ionicons name="star-outline" size={25} 
            color={focused ? Colors.primary : Colors.disable} />
          },
          // headerShown:false,
          }}/>
        <Drawer.Screen name="Sent" component={NewPass} 
        options={{
          drawerLabel:({focused, color,}) => (
            <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'Urbanist-Regular'}}>Sent</Text>
          ),
          drawerIcon:({focused,color}) => {
            return <Ionicons name="paper-plane-outline" size={25} 
            color={focused ? Colors.primary : Colors.disable} />
          },
          // headerShown:false,
          }}/>
        <Drawer.Screen name="Draft" component={WriteMessage} 
        options={{
          drawerLabel:({focused, color,}) => (
            <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'Urbanist-Regular'}}>Draft</Text>
          ),
          drawerIcon:({focused,color}) => {
            return <Icon1 name="file" size={25} 
            color={focused ? Colors.primary : Colors.disable} />
          },
          // headerShown:false,
          }}/>
  
        <Drawer.Screen name="Trash" component={NewPass} 
        options={{
          drawerLabel:({focused, color,}) => (
            <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'Urbanist-Regular'}}>Trash</Text>
          ),
          drawerIcon:({focused,color}) => {
            return <Ionicons name="trash" size={25} 
            color={focused ? Colors.primary : Colors.disable} />
          },
          // headerShown:false,
          }}/> */}
  
          
  
      </Navigator>
    );
})