import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Avatar, Button, Image, SearchBar, Text} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

const Notification = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'black', height: 900}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
            marginHorizontal: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Avatar
              rounded
              size="medium"
              source={{
                uri:
                  'https://static-cdn.jtvnw.net/jtv_user_pictures/uzra-profile_image-e60ae5576fa3fd8a-70x70.png',
              }}
            />
            <Text style={{color: 'white', marginLeft: 10}} >
              UZRA follow you
            </Text>
          </View>
          <Button title="Follow" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
            marginHorizontal: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Avatar
              rounded
              size="medium"
              source={{
                uri:
                  'https://yt3.ggpht.com/ytc/AAUvwniR6jpg2-TmJxmPrLh3GIX11CK2n85iYNA89cAYuA=s900-c-k-c0x00ffffff-no-rj',
              }}
            />
            <Text style={{color: 'white', marginLeft: 10}} >
              豆豆在這邊 send you a message
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
            marginHorizontal: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Avatar
              rounded
              size="medium"
              source={{
                uri:
                'https://scontent.ftpe7-3.fna.fbcdn.net/v/t1.6435-1/p100x100/140685392_3774528982605442_732156108914020243_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=NdfPZqSw3csAX8hBO6-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftpe7-3.fna&tp=6&oh=b1f0cc3dd9430d9347b861a3f40421ec&oe=60A38F36',
              }}
            />
            <Text style={{color: 'white', marginLeft: 10}} h4>
              胖胖偉 想休學了
            </Text>
          </View>
          <Image
            source={{
              uri:
                'https://scontent.ftpe7-3.fna.fbcdn.net/v/t1.6435-1/p100x100/140685392_3774528982605442_732156108914020243_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=NdfPZqSw3csAX8hBO6-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftpe7-3.fna&tp=6&oh=b1f0cc3dd9430d9347b861a3f40421ec&oe=60A38F36',
            }}
            style={{width: 50, height: 50}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notification;
