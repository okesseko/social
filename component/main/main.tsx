import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Dimensions,
  Image,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {postArray, fakeStoryData} from './fake';

import ImagePicker from 'react-native-image-picker';
import Post from './post';
import Stories from './story/index';
import GetPhoto from './getPhoto';
const Main = () => {
  const [data, setData] = useState(postArray);
  const [storyData, setStoryData] = useState(fakeStoryData);

  const [photo, setPhoto] = useState<any>(null);
  return (
    <SafeAreaView
      style={{backgroundColor: 'black', flex: 1, flexDirection: 'column'}}>
      <ScrollView>
        {/* <Stories data={storyData} />

        {data.map((post, index) => (
          <Post key={index} {...post} />
        ))} */}
        <GetPhoto />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
