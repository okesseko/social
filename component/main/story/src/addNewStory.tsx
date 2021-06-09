import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import GetPhoto from './getPhoto';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const AddNewStory = ({close, setFile}: any) => {
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };
  return (
    <GestureRecognizer
      onSwipeDown={() => close(false)}
      config={config}
      style={styles.container}>
      <TouchableOpacity activeOpacity={1} style={styles.container}>
        <View style={{height: '100%'}}>
          <TouchableOpacity onPress={() => close(false)}>
            <Icon
              name="close"
              color="white"
              size={25}
              style={{alignSelf: 'flex-end', marginRight: 8}}
            />
          </TouchableOpacity>
          <GetPhoto setFile={setFile} close={close}/>
        </View>
      </TouchableOpacity>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 500,
    justifyContent: 'flex-start',
    // paddingTop: 30,
  },
});
export default AddNewStory;
