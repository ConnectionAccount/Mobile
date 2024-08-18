import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

const HomeScreen = memo(() => {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
      </View>
    )
})

HomeScreen.displayName = "HomeScreen";

export { HomeScreen }

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})