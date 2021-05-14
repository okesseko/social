import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar} from 'react-native-elements';

const styles = StyleSheet.create({
  root: {
    height: 80,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  avatar: {
    // backgroundColor: 'red',
  },
  avatarPadding: {
    marginHorizontal: 10,
  },
});

const Story = () => {
  return (
    <View style={styles.root}>
      <View style={styles.avatarPadding}>
        <Avatar
          rounded
          avatarStyle={styles.avatar}
          size="medium"
          icon={{name: 'photo-camera'}}
          containerStyle={{backgroundColor: 'gray'}}
        />
      </View>
      <View style={styles.avatarPadding}>
        <Avatar
          rounded
          avatarStyle={styles.avatar}
          size="medium"
          source={{
            uri:
              'https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.6435-9/118799020_3250741855002298_936179572545433075_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Vp3ucZlOG1IAX-U1G1C&_nc_ht=scontent.ftpe7-1.fna&oh=4b81768032f04e62a8cc2a44ef0f4890&oe=60A36D93',
          }}
        />
      </View>
      <View style={styles.avatarPadding}>
        <Avatar
          rounded
          avatarStyle={styles.avatar}
          size="medium"
          source={{
            uri:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/82209ca5-32ca-48be-90f6-875db34a6673-profile_image-70x70.png',
          }}
        />
      </View>
      <View style={styles.avatarPadding}>
        <Avatar
          rounded
          avatarStyle={styles.avatar}
          size="medium"
          source={{
            uri:
              'https://static-cdn.jtvnw.net/jtv_user_pictures/uzra-profile_image-e60ae5576fa3fd8a-70x70.png',
          }}
          containerStyle={{backgroundColor: 'gray'}}
        />
      </View>
      <View style={styles.avatarPadding}>
        <Avatar
          rounded
          avatarStyle={styles.avatar}
          size="medium"
          source={{
            uri: 'https://cdn2.ettoday.net/images/5407/5407445.jpg',
          }}
          containerStyle={{backgroundColor: 'gray'}}
        />
      </View>
      <View style={styles.avatarPadding}>
        <Avatar
          rounded
          avatarStyle={styles.avatar}
          size="medium"
          source={{
            uri: 'https://scontent.ftpe7-3.fna.fbcdn.net/v/t1.6435-1/p100x100/140685392_3774528982605442_732156108914020243_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=NdfPZqSw3csAX8hBO6-&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.ftpe7-3.fna&tp=6&oh=b1f0cc3dd9430d9347b861a3f40421ec&oe=60A38F36',
          }}
          containerStyle={{backgroundColor: 'gray'}}
        />
      </View>
    </View>
  );
};

export default Story;
