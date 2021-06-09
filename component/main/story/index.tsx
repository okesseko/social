import React, {useRef, useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StoriesType} from './src';
import AddNewStory from './src/addNewStory';

const {CubeNavigationHorizontal} = require('react-native-3dcube-navigation');

import StoryContainer from './src/StoryContainer';

interface Props {
  data: StoriesType[];
  setFile:any;
  containerAvatarStyle?: any;
  avatarStyle?: any;
  titleStyle?: any;
  textReadMore?: string;
}

const Stories = (props: Props) => {
  const [isModelOpen, setModel] = useState(false);
  const [isAddNewStory, setNewStory] = useState(false);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [currentScrollValue, setCurrentScrollValue] = useState(0);
  const modalScroll = useRef(null);

  const onStorySelect = (index) => {
    setCurrentUserIndex(index);
    setModel(true);
  };

  const onStoryClose = () => {
    setModel(false);
  };

  const onStoryNext = (isScroll: boolean) => {
    const newIndex = currentUserIndex + 1;
    if (props.data.length - 1 > currentUserIndex) {
      setCurrentUserIndex(newIndex);
      if (!isScroll) {
        //erro aqui
        try {
          (modalScroll.current as any).scrollTo(newIndex, true);
        } catch (e) {
          console.warn('error=>', e);
        }
      }
    } else {
      setModel(false);
    }
  };

  const onStoryPrevious = (isScroll: boolean) => {
    const newIndex = currentUserIndex - 1;
    if (currentUserIndex > 0) {
      setCurrentUserIndex(newIndex);
      if (!isScroll) {
        (modalScroll.current as any).scrollTo(newIndex, true);
      }
    }
  };

  const onScrollChange = (scrollValue) => {
    if (currentScrollValue > scrollValue) {
      onStoryNext(true);
      console.log('next');
      setCurrentScrollValue(scrollValue);
    }
    if (currentScrollValue < scrollValue) {
      onStoryPrevious(false);
      console.log('previous');
      setCurrentScrollValue(scrollValue);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.boxStory}>
          <TouchableOpacity onPress={() => setNewStory(true)}>
            <Image
              style={[
                styles.circle,
                props.avatarStyle,
                {borderColor: 'white', backgroundColor: 'white'},
              ]}
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png',
              }}
            />
            <Text style={[styles.title, props.titleStyle]}>new story</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={props.data}
          horizontal
          keyExtractor={(item) => item.title as any}
          renderItem={({item, index}) => (
            <View style={styles.boxStory}>
              <TouchableOpacity onPress={() => onStorySelect(index)}>
                <Image
                  style={[styles.circle, props.avatarStyle]}
                  source={{
                    uri: item.profile,
                  }}
                />

                <Text style={[styles.title, props.titleStyle]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={isAddNewStory}
        style={styles.modal}
        onRequestClose={() => setNewStory(false)}>
        <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
          <AddNewStory close={setNewStory} setFile={props.setFile}/>
        </SafeAreaView>
      </Modal>
      <Modal
        animationType="slide"
        transparent={false}
        visible={isModelOpen}
        style={styles.modal}
        onShow={() => {
          if (currentUserIndex > 0) {
            (modalScroll.current as any).scrollTo(currentUserIndex, false);
          }
        }}
        onRequestClose={onStoryClose}>
        <CubeNavigationHorizontal
          callBackAfterSwipe={(g) => onScrollChange(g)}
          ref={modalScroll}
          style={styles.container}>
          {props.data.map((item, index) => (
            <StoryContainer
              key={item.title}
              onClose={onStoryClose}
              onStoryNext={onStoryNext}
              onStoryPrevious={onStoryPrevious}
              dataStories={item}
              isNewStory={index !== currentUserIndex}
              textReadMore={props.textReadMore as string}
            />
          ))}
        </CubeNavigationHorizontal>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  boxStory: {
    marginHorizontal: 10,
  },
  ItemSeparator: {height: 1, backgroundColor: '#ccc'},
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingVertical: 10,
  },
  circle: {
    alignSelf: 'center',
    width: 50,
    height: 50,
    borderWidth: 3,
    borderColor: 'red',
    borderRadius: 60,
  },
  modal: {
    flex: 1,
  },
  title: {
    marginTop: 3,
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default Stories;
