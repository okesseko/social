import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Image, SearchBar} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

const Search = () => {
  const users = [
    {
      name: '豆豆',
      image:
        'https://yt3.ggpht.com/ytc/AAUvwniR6jpg2-TmJxmPrLh3GIX11CK2n85iYNA89cAYuA=s900-c-k-c0x00ffffff-no-rj',
      index: 0,
    },
    {
      name: 'Hi_Orange',
      image:
        'https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.6435-9/118799020_3250741855002298_936179572545433075_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=uzNyFxP2pw0AX9QnJVc&tn=mLkOsPvSgpcTaJe2&_nc_ht=scontent.ftpe7-1.fna&oh=c18d639f466f34a71a2909cd2f7691f1&oe=60D2E393',
      index: 1,
    },
    {
      name: '豆主播',
      image:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/82209ca5-32ca-48be-90f6-875db34a6673-profile_image-70x70.png',
      index: 2,
    },
    {
      name: 'uzra',
      image:
        'https://static-cdn.jtvnw.net/jtv_user_pictures/uzra-profile_image-e60ae5576fa3fd8a-70x70.png',
      index: 3,
    },
    {
      name: 'pui_pui',
      image: 'https://cdn2.ettoday.net/images/5407/5407445.jpg',
      index: 4,
    },
    {
      name: 'you_we',
      image:
        'https://scontent.ftpe7-3.fna.fbcdn.net/v/t1.6435-1/p480x480/140685392_3774528982605442_732156108914020243_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=4VfDSRbCFOUAX8YVcwP&_nc_ht=scontent.ftpe7-3.fna&tp=6&oh=e5e914610cd1741ede64ce3d4eec8755&oe=60DB19FB',
      index: 5,
    },
  ];
  const [search, setSearch] = useState('');
  const [showUser, setShowUser] = useState(users);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <ScrollView>
        <SearchBar
          placeholder="Search"
          inputContainerStyle={{backgroundColor: 'black'}}
          containerStyle={{backgroundColor: 'black'}}
          style={{backgroundColor: 'black', color: 'white'}}
          onChangeText={(search) => {
            setSearch(search);
            setShowUser(users.filter((user) => !user.name.search(search)));
          }}
          value={search}
        />
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          {showUser.map((data, index) => (
            <View key={index}>
              <Image
                source={{
                  uri: data.image,
                }}
                style={{width: 200, height: 200}}
                onPress={() =>
                  navigation.navigate('Profile',{profileIndex:data.index})
                }
              />
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 20,
                  marginBottom: 5,
                }}>
                {data.name}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
