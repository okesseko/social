import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Avatar, colors} from 'react-native-elements';

const styles = StyleSheet.create({
  root: {
    height: 100,
    backgroundColor: 'black',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    paddingTop: 15,
    // overflow:'scroll'
  },
  avatar: {
    borderColor: 'red',
    borderWidth: 2,
  },
  avatarPadding: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  text: {
    marginTop: 10,
    color: 'white',
    fontSize: 12,
  },
});

const Story = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.root}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <View style={styles.avatarPadding}>
        <Avatar
          rounded
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
       'https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.6435-9/118799020_3250741855002298_936179572545433075_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=uzNyFxP2pw0AX9QnJVc&tn=mLkOsPvSgpcTaJe2&_nc_ht=scontent.ftpe7-1.fna&oh=c18d639f466f34a71a2909cd2f7691f1&oe=60D2E393',
          }}
        />
        <Text style={styles.text}>Hi_Orange</Text>
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
        <Text style={styles.text}>豆主播</Text>
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
        <Text style={styles.text}>UZRA</Text>
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
        <Text style={styles.text}>pui_pui</Text>
      </View>
      <View style={styles.avatarPadding}>
        <Avatar
          rounded
          avatarStyle={styles.avatar}
          size="medium"
          source={{
            uri:
              'https://scontent.ftpe7-3.fna.fbcdn.net/v/t1.6435-1/p480x480/140685392_3774528982605442_732156108914020243_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=4VfDSRbCFOUAX8YVcwP&_nc_ht=scontent.ftpe7-3.fna&tp=6&oh=e5e914610cd1741ede64ce3d4eec8755&oe=60DB19FB',
          }}
          containerStyle={{backgroundColor: 'gray'}}
        />

        <Text style={styles.text}>you_we</Text>
      </View>
      <View style={styles.avatarPadding}>
        <Avatar
          rounded
          avatarStyle={styles.avatar}
          size="medium"
          source={{
            uri:
              'https://scontent.ftpe7-3.fna.fbcdn.net/v/t1.6435-1/p480x480/140685392_3774528982605442_732156108914020243_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=4VfDSRbCFOUAX8YVcwP&_nc_ht=scontent.ftpe7-3.fna&tp=6&oh=e5e914610cd1741ede64ce3d4eec8755&oe=60DB19FB',
          }}
          containerStyle={{backgroundColor: 'gray'}}
        />

        <Text style={styles.text}>you_we</Text>
      </View>
      <View style={styles.avatarPadding}>
        <Avatar
          rounded
          avatarStyle={styles.avatar}
          size="medium"
          source={{
            uri:
              'https://scontent.ftpe7-3.fna.fbcdn.net/v/t1.6435-1/p480x480/140685392_3774528982605442_732156108914020243_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=4VfDSRbCFOUAX8YVcwP&_nc_ht=scontent.ftpe7-3.fna&tp=6&oh=e5e914610cd1741ede64ce3d4eec8755&oe=60DB19FB',
          }}
          containerStyle={{backgroundColor: 'gray'}}
        />

        <Text style={styles.text}>you_we</Text>
      </View>
      <View style={styles.avatarPadding}>
        <Avatar
          rounded
          avatarStyle={styles.avatar}
          size="medium"
          source={{
            uri:
              'https://scontent.ftpe7-3.fna.fbcdn.net/v/t1.6435-1/p480x480/140685392_3774528982605442_732156108914020243_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=4VfDSRbCFOUAX8YVcwP&_nc_ht=scontent.ftpe7-3.fna&tp=6&oh=e5e914610cd1741ede64ce3d4eec8755&oe=60DB19FB',
          }}
          containerStyle={{backgroundColor: 'gray'}}
        />

        <Text style={styles.text}>you_we</Text>
      </View>
      <View style={styles.avatarPadding}>
        <Avatar
          rounded
          avatarStyle={styles.avatar}
          size="medium"
          source={{
            uri:
              'https://scontent.ftpe7-3.fna.fbcdn.net/v/t1.6435-1/p480x480/140685392_3774528982605442_732156108914020243_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=4VfDSRbCFOUAX8YVcwP&_nc_ht=scontent.ftpe7-3.fna&tp=6&oh=e5e914610cd1741ede64ce3d4eec8755&oe=60DB19FB',
          }}
          containerStyle={{backgroundColor: 'gray'}}
        />

        <Text style={styles.text}>you_we</Text>
      </View>
    </ScrollView>
  );
};

export default Story;
