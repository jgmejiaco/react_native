import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const PositionScreen = () => {
  return (
    <View style={styles.container}> 
        <Text>Position Screen</Text>

        <View style={styles.cajaVerde}/>
        
        <View style={styles.cajaMorada}/>

        <View style={styles.cajaNaranja}/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#28C4D9',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  cajaMorada: {
    width: 100,
    height: 100,
    backgroundColor:'#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    // top: 100,
    // left: 150,
    position: 'absolute',
    bottom:0,
    right:0
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    backgroundColor:'#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    // top: 0,
    // left: 100
    bottom:0,
    right:0
  },
  cajaVerde: {
    // width: 100,
    // height: 100,
    backgroundColor:'green',
    borderWidth: 10,
    borderColor: 'white',
    // top: 0,
    // left: 100
    // position: 'absolute',
    // bottom:100,
    // right:150,
    ...StyleSheet.absoluteFillObject
  },
  title: {
    fontSize: 30,
    color: 'blue',
    textAlign: 'center'
  },
})
