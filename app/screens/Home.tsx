import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { useAuth } from '../context/AuthContext'
import React, { useCallback,useMemo, useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet'


const Home = () => {

// ref
const bottomSheetRef = useRef<BottomSheet>(null);

// variables
const snapPoints = useMemo(() => ['25%', '50%'], []);

// callbacks
const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
}, [])



  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 25,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  }
})