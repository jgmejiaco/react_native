import React from 'react'
import { Text, View } from 'react-native'

export const HomeScreen = () => {
  return (
    <View style={{
      flex: 1,
      // backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{fontSize:55}}>Inicio</Text>
    </View>
  )
}
