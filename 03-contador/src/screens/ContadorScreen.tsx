import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export const ContadorScreen = () => {

  const [contador, setContador] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Contador: {contador}
      </Text>

      {/* ================================== */}

      <TouchableOpacity onPress={ () => setContador(contador - 1) } style={styles.fabLocationBL}>
        <View style={styles.fab}>
        <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity>

      {/* ============= */}

      <TouchableOpacity onPress={ () => setContador(contador + 1) } style={styles.fabLocationBR}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center'
  },
  title: {
    textAlign:'center',
    fontSize:45
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  fab: {
    backgroundColor:'#5856d6',
    width:60,
    height:60,
    borderRadius:100,
    justifyContent: 'center'
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})
