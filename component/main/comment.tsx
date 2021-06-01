import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Input, ListItem} from 'react-native-elements';

interface propType {
  isComment: Boolean;
  setIsComment: React.Dispatch<React.SetStateAction<boolean>>;
  comment?: {
    name: string;
    avatarUrl: string;
    content: string;
    index: number;
  }[];
}
const PersonComment = ({
  comment,
}: {
  comment: {
    name: string;
    avatarUrl: string;
    content: string;
    index: number;
  };
}) => {
  return (
    <ListItem
      containerStyle={{
        backgroundColor: 'rgba(0,0,0,0)',
        paddingLeft: 0,
        alignItems: 'flex-start',
      }}>
      <Avatar
        rounded
        source={{
          uri: comment.avatarUrl,
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{color: 'white'}}>{comment.name}</ListItem.Title>
        <Text style={{lineHeight: 20, color: 'white'}}>{comment.content}</Text>
      </ListItem.Content>
    </ListItem>
  );
};

const Comment = ({comment, isComment, setIsComment}: propType) => {
  const [isShowAll, setIsShowAll] = useState(false);
  const [newComment, setNewComment] = useState(comment || []);
  const [value, setValue] = useState('');
  return (
    <View>
      {newComment?.length && (
        <Text
          onPress={() => setIsShowAll(!isShowAll)}
          style={{color: '#a1a1a1'}}>
          {isShowAll ? 'Hide' : 'View'} all {newComment?.length} comments
        </Text>
      )}
      {isComment && (
        <Input
          placeholder="Leave comment"
          placeholderTextColor="#a1a1a1"
          containerStyle={{marginLeft: -10}}
          style={{color: 'white'}}
          onBlur={() => {
            setIsComment(false);
            if (value)
              setNewComment([
                {
                  name: 'Hi_Orange',
                  avatarUrl:
                    'https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.6435-9/118799020_3250741855002298_936179572545433075_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=uzNyFxP2pw0AX9QnJVc&tn=mLkOsPvSgpcTaJe2&_nc_ht=scontent.ftpe7-1.fna&oh=c18d639f466f34a71a2909cd2f7691f1&oe=60D2E393',
                  content: value,
                  index:1
                },
                ...newComment,
              ]);
          }}
          onChangeText={(text) => setValue(text)}
          leftIcon={
            <Avatar
              rounded
              source={{
                uri:
                  'https://scontent.ftpe7-1.fna.fbcdn.net/v/t1.6435-9/118799020_3250741855002298_936179572545433075_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=uzNyFxP2pw0AX9QnJVc&tn=mLkOsPvSgpcTaJe2&_nc_ht=scontent.ftpe7-1.fna&oh=c18d639f466f34a71a2909cd2f7691f1&oe=60D2E393',
              }}
            />
          }
        />
      )}
      {isShowAll && newComment?.map((item,index) => <PersonComment key={index} comment={item} />)}
    </View>
  );
};

export default Comment;
