import React from 'react'
import { NavigationContainer as Container } from "@react-navigation/native";
import { BottomSheetNavigator } from './bottom-sheet-navigator';

const NavigationContainer = () => {
  return (
    <Container>
        <BottomSheetNavigator />
    </Container>
  )
}

export {NavigationContainer}