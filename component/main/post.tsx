import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Avatar, Icon, Image, Text} from 'react-native-elements';
interface propType {
  userName: string;
  avatarURL: string;
  postImage: string[];
  postContent: string;
  postTag?: string[];
  postComment?: {
    name: string;
    avatarUrl: string;
    content: string;
  }[];
}
const styles = StyleSheet.create({
  avatar: {
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
const Post = ({
  userName,
  avatarURL,
  postImage,
  postContent,
  postTag,
  postComment,
}: propType) => {
  const [iconState, setIconState] = useState(false);
  return (
    <View>
      <View style={styles.avatar}>
        <Avatar
          rounded
          size="medium"
          source={{
            uri: avatarURL,
          }}
        />
        <Text style={{color: 'white', marginLeft: 10}} h4>
          {userName}
        </Text>
      </View>
      <Image
        source={{
          uri: postImage,
        }}
        style={{width: '100%', height: 250}}
      />
      <View style={styles.avatar}>
        <Icon
          onPress={() => {
            setIconState(!iconState);
          }}
          color={iconState ? 'red' : 'white'}
          size={30}
          style={{marginHorizontal: 8}}
          type="ant-design"
          name="hearto"
        />
        <Icon
          color="white"
          size={30}
          style={{marginHorizontal: 8}}
          type="ant-design"
          name="message1"
        />
        <Icon
          color="white"
          size={30}
          style={{marginHorizontal: 8}}
          type="ant-design"
          name="sharealt"
        />
      </View>
      <Text style={{color: 'white', marginLeft: 12, marginTop: 4}}>
        99,999 views
      </Text>
      <Text
        style={{
          color: 'white',
          // backgroundColor: 'white',
          width: '90%',
          lineHeight: 20,
          marginLeft: 12,
          marginTop: 4,
        }}>{postContent}
      </Text>
      <Text
        style={{
          color: '#78C2C4',
          // backgroundColor: 'white',
          width: '90%',
          lineHeight: 20,
          marginLeft: 12,
          marginTop: 4,
        }}>
       {postTag?.map(tag=>`#${tag} `)}
      </Text>
    </View>
  );
};

export default Post;
