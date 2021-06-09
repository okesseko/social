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
import GetPhoto from './story/src/getPhoto';
const Main = () => {
  const [data, setData] = useState(postArray);
  const [storyData, setStoryData] = useState(fakeStoryData);
  const [file, setFile] = useState({
    type: '',
    uri: '',
  });
  useEffect(() => {
    if (file.uri) {
      console.log(file);
      const newData = storyData.map((data) => {
        if (data.username === 'Hi_Orange') {
          return {
            username: 'Hi_Orange',
            title: 'Hi_Orange',
            profile:
              'https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.6435-9/118799020_3250741855002298_936179572545433075_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=uzNyFxP2pw0AX9QnJVc&tn=mLkOsPvSgpcTaJe2&_nc_ht=scontent.ftpe7-1.fna&oh=c18d639f466f34a71a2909cd2f7691f1&oe=60D2E393',
            stories: [
              {
                id: Math.random(),
                url: file.uri,
                type: file.type,
                duration: 10,
              },
              ...data.stories,
            ],
          };
        }
        return data;
      });
      console.log(storyData);
      console.log(newData);
      setStoryData(newData as any);
    }
  }, [file]);
  return (
    <SafeAreaView
      style={{backgroundColor: 'black', flex: 1, flexDirection: 'column'}}>
      <ScrollView>
        <Stories data={storyData} setFile={setFile} />
        {data.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
