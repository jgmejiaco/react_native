import { Platform, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';

interface Props {
    title: string;
    position: 'bl' | 'br';
    onPress: () => void;
}

export const Fab = ({title, onPress, position = 'br'}: Props) => {

    return (
        <View
            style={[
                styles.fabLocation,
                (position === 'bl') ? styles.left : styles.right
            ]}
        >
            <TouchableNativeFeedback
                onPress={ onPress }
                background={TouchableNativeFeedback.Ripple('black', false, 30)}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableNativeFeedback>
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
    fabLocation: {
      position: 'absolute',
      bottom: 30,
    //   backgroundColor:'#5856d6',
    //   width:60,
    //   height:60,
    //   borderRadius:100,
    //   justifyContent: 'center'
    },
    left: {
        left: 30,
    },
    right: {
        right: 30,
    },
    // fabLocationBR: {
    //   position: 'absolute',
    //   bottom: 30,
    //   right: 30,
    //   backgroundColor:'#5856d6',
    //   width:60,
    //   height:60,
    //   borderRadius:100,
    //   justifyContent: 'center'
    // },
    fab: { // floating action buttom
      backgroundColor:'#5856d6',
      width:60,
      height:60,
      borderRadius:100,
      justifyContent: 'center',
      shadowColor:"#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation:8,
    },
    fabText: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      alignSelf: 'center'
    }
  })
