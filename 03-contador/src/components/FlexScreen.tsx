import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
  return (
    <View style={styles.container}> 
        <Text style={styles.caja1}>Caja 1</Text>
        <Text style={styles.caja2}>Caja 2</Text>
        <Text style={styles.caja3}>Caja 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#28C4D9',
    flexDirection:'row',
    justifyContent: 'space-around',
    // alignItems: 'center'
  },
  caja1: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    // flex: 1,
    // width: 100,
    // height: 100,
    // backgroundColor:'#5856D6',
    // top: 100,
    // left: 150,
    // position: 'absolute',
    // bottom:0,
    // right:0
  },
  caja2: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    // flex: 2,
    // width: 100,
    // height: 100,
    // backgroundColor:'#F0A23B',
    // top: 0,
    // left: 100
    // bottom:0,
    // right:0
  },
  caja3: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    // flex: 3,
    // width: 100,
    // height: 100,
    // backgroundColor:'green',
    // top: 0,
    // left: 100
    // position: 'absolute',
    // bottom:100,
    // right:150,
    // ...StyleSheet.absoluteFillObject
  },
  title: {
    fontSize: 30,
    color: 'blue',
    textAlign: 'center'
  },
})
