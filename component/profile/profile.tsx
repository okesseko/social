import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Avatar, Button, Image, SearchBar, Text} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import Posts from './posts';

const users = [
  {
    name: '豆豆',
    image:
      'https://yt3.ggpht.com/ytc/AAUvwniR6jpg2-TmJxmPrLh3GIX11CK2n85iYNA89cAYuA=s900-c-k-c0x00ffffff-no-rj',
    text: ['想不到吧我也是豆主播', '豆豆豆豆豆豆豆豆豆豆豆豆豆豆豆豆'],
  },
  {
    name: 'Hi_Orange',
    image:
      'https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.6435-9/118799020_3250741855002298_936179572545433075_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=uzNyFxP2pw0AX9QnJVc&tn=mLkOsPvSgpcTaJe2&_nc_ht=scontent.ftpe7-1.fna&oh=c18d639f466f34a71a2909cd2f7691f1&oe=60D2E393',
    text: ['1234567 我是台科大87', '我很牛逼', '因為我是顆橘子', '好誒 老鐵'],
  },
  {
    name: '豆主播',
    image:
      'https://static-cdn.jtvnw.net/jtv_user_pictures/82209ca5-32ca-48be-90f6-875db34a6673-profile_image-70x70.png',
    text: ['最正的豆主播', '一頭披著羊皮的鹿'],
  },
  {
    name: 'uzra',
    image:
      'https://static-cdn.jtvnw.net/jtv_user_pictures/uzra-profile_image-e60ae5576fa3fd8a-70x70.png',
    text: ['我是 UZRA 獸人大組長', '工商合作：rrrrrr@gamail.com'],
  },
  {
    name: 'pui_pui',
    image: 'https://cdn2.ettoday.net/images/5407/5407445.jpg',
    text: [
      'pui_pui pui_pui pui_pui',
      '優質動畫',
      '沒看過的一定要去看',
      '天竺鼠車車',
    ],
  },
  {
    name: 'you_we',
    image:
      'https://scontent.ftpe7-3.fna.fbcdn.net/v/t1.6435-1/p480x480/140685392_3774528982605442_732156108914020243_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=4VfDSRbCFOUAX8YVcwP&_nc_ht=scontent.ftpe7-3.fna&tp=6&oh=e5e914610cd1741ede64ce3d4eec8755&oe=60DB19FB',
    text: ['確定21的男人', '行蹤成迷沒人知道在哪裏', '不知道什麼時候會休學呢'],
  },
];

const Profile = ({route}: any) => {
  const {params} = route;
  const {profileIndex} = params || {};
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
            marginHorizontal: 20,
          }}>
          <Avatar
            rounded
            size="large"
            source={{
              uri: users[profileIndex ? profileIndex : 1].image,
            }}
          />
          <View>
            <Text style={{color: 'white', marginRight: 20, fontSize: 30}}>
              {users[profileIndex ? profileIndex : 1].name}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'column',
            marginHorizontal: 20,
          }}>
          {users[profileIndex ? profileIndex : 1].text.map((text, index) => (
            <Text
              key={index}
              style={{
                color: 'white',
                marginLeft: 10,
                fontSize: 14,
                lineHeight: 24,
              }}>
              {text}
            </Text>
          ))}
        </View>
        <Posts
          havePost={
            profileIndex === 3 || profileIndex === 4
              ? true
              : false
          }
          postIndex={profileIndex === 3 ? 0 : 1}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
