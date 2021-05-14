import React from 'react';
import {ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Post from './post';
import Story from './story';

const Main = () => {
  const postArray = [
    {
      userName: 'UZRA',
      avatarURL:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/uzra-profile_image-e60ae5576fa3fd8a-70x70.png',
      postImage: ['http://s.newtalk.tw/album/news/288/5d57b4108ab7d.jpg'],
      postContent:
        ' 「我的粉絲都對我不錯，各行各業都會來我家幫我修東西。」最大的重點就是有漂亮的妹子！',
      postTag: ['太牛了', 'uzra'],
      postComment: [
        {
          name: 'test',
          avatarUrl: '',
          content: 'test',
        },
      ],
    },
  ];
  return (
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <ScrollView>
        <Story />
        {postArray.map((post,index) => (
          <Post key={index} {...post} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
