import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

const TestSheet = memo(() => {
    return (
      <View style={styles.container}>
        <Text>TestSheet</Text>
      </View>
    )
})

TestSheet.displayName = "TestSheet";

export {TestSheet}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})