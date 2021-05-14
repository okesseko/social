import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Image, SearchBar} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

const Search = () => {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <ScrollView>
        <SearchBar
          placeholder="Search"
          inputContainerStyle={{backgroundColor: 'black'}}
          containerStyle={{backgroundColor: 'black'}}
          style={{backgroundColor: 'black', color: 'white'}}
          onChangeText={(search) => setSearch(search)}
          value={search}
        />
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          <Image
            source={{
              uri:
                'https://yt3.ggpht.com/ytc/AAUvwniR6jpg2-TmJxmPrLh3GIX11CK2n85iYNA89cAYuA=s900-c-k-c0x00ffffff-no-rj',
            }}
            style={{width: 200, height: 200}}
          />
          <Image
            source={{
              uri:
                'https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.6435-9/118799020_3250741855002298_936179572545433075_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Vp3ucZlOG1IAX-U1G1C&_nc_ht=scontent.ftpe7-1.fna&oh=4b81768032f04e62a8cc2a44ef0f4890&oe=60A36D93',
            }}
            style={{width: 200, height: 200}}
          />
          <Image
            source={{
              uri:
                'https://static-cdn.jtvnw.net/jtv_user_pictures/82209ca5-32ca-48be-90f6-875db34a6673-profile_image-70x70.png',
            }}
            style={{width: 200, height: 200}}
          />
          <Image
            source={{
              uri:
                'https://static-cdn.jtvnw.net/jtv_user_pictures/uzra-profile_image-e60ae5576fa3fd8a-70x70.png',
            }}
            style={{width: 200, height: 200}}
          />
          <Image
            source={{
              uri: 'https://cdn2.ettoday.net/images/5407/5407445.jpg',
            }}
            style={{width: 200, height: 200}}
          />
          <Image
            source={{
              uri:
                'https://scontent.ftpe7-3.fna.fbcdn.net/v/t1.6435-1/p100x100/140685392_3774528982605442_732156108914020243_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=NdfPZqSw3csAX8hBO6-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftpe7-3.fna&tp=6&oh=b1f0cc3dd9430d9347b861a3f40421ec&oe=60A38F36',
            }}
            style={{width: 200, height: 200}}
          />
          <Image
            source={{
              uri:
                'https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.6435-9/118799020_3250741855002298_936179572545433075_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Vp3ucZlOG1IAX-U1G1C&_nc_ht=scontent.ftpe7-1.fna&oh=4b81768032f04e62a8cc2a44ef0f4890&oe=60A36D93',
            }}
            style={{width: 200, height: 200}}
          />
          <Image
            source={{
              uri:
                'https://scontent.ftpe7-3.fna.fbcdn.net/v/t1.6435-1/p100x100/140685392_3774528982605442_732156108914020243_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=NdfPZqSw3csAX8hBO6-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftpe7-3.fna&tp=6&oh=b1f0cc3dd9430d9347b861a3f40421ec&oe=60A38F36',
            }}
            style={{width: 200, height: 200}}
          />
          <Image
            source={{
              uri:
                'https://yt3.ggpht.com/ytc/AAUvwniR6jpg2-TmJxmPrLh3GIX11CK2n85iYNA89cAYuA=s900-c-k-c0x00ffffff-no-rj',
            }}
            style={{width: 200, height: 200}}
          />
          <Image
            source={{
              uri:
                'https://yt3.ggpht.com/ytc/AAUvwniR6jpg2-TmJxmPrLh3GIX11CK2n85iYNA89cAYuA=s900-c-k-c0x00ffffff-no-rj',
            }}
            style={{width: 200, height: 200}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
