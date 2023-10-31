import React from 'react'
// import { HomeScreen } from './src/screens/HomeScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { BoxObjectModelScreen } from './src/components/BoxObjectModelScreen';
import { SafeAreaView } from 'react-native';
// import { DimensionesScreen } from './src/components/DimensionesScreen';
// import { PositionScreen } from './src/components/PositionScreen';
import { FlexScreen } from './src/components/FlexScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <HomeScreen/> */}

      {/* <ContadorScreen/> */}

      {/* <BoxObjectModelScreen/> */}

      {/* <DimensionesScreen/> */}

      {/* <PositionScreen/> */}

      <FlexScreen/>
    </SafeAreaView>
  )
}
