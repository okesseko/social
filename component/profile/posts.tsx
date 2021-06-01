import { useNavigation } from '@react-navigation/core';
import React, {useState} from 'react';
import {ScrollView, View, Dimensions} from 'react-native';
import {Avatar, Button, Icon, Image, SearchBar, Text} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
const windowWidth = Dimensions.get('window').width;
const post = [
  {
    image: 'http://s.newtalk.tw/album/news/288/5d57b4108ab7d.jpg',
  },
  {
    image:
      'https://www.mirrormedia.com.tw/assets/images/20210119155553-be518b54becb1542e8088fa54ae82170-mobile.png',
  },
];

const Posts = ({
  havePost,
  postIndex,
}: {
  havePost: boolean;
  postIndex: number;
}) => {
const navigation =useNavigation();
  return (
    <View style={{marginTop: 20}}>
      <View
        style={{
          borderBottomColor: 'white',
          borderBottomWidth: 2,
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            marginBottom: 10,
            fontSize: 16,
          }}>
          {havePost ? 1 : 0} posts
        </Text>
      </View>
      {havePost ? (
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}>
          <View>
            <Image
              source={{
                uri: post[postIndex].image,
              }}
              style={{width: windowWidth / 3, height: windowWidth / 3}}
              onPress={()=>navigation.navigate('Home')}
            />
          </View>
        </View>
      ) : (
        <View style={{marginTop:'30%'}}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 30}}>
            Have posts yet
          </Text>
          <Icon onPress={()=>navigation.navigate('Home')} style={{marginTop:30}} type="ant-design" name="appstore-o" size={100} color="#FFFFFF" />
        </View>
      )}
    </View>
  );
};

export default Posts;
