import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {postArray} from './fake';
import Post from './post';
import Story from './story';

const Main = () => {
  const [data, setData] = useState(postArray);
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <ScrollView>
        <Story />
        {data.map((post, index) => (
          <Post key={index} {...post}  />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
