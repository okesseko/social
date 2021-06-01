import React, {useCallback, useRef, useState} from 'react';
import {Platform, ScrollView, StyleSheet, View} from 'react-native';
import {Avatar, Icon, Image, Text} from 'react-native-elements';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Share from 'react-native-share';
import {Dimensions} from 'react-native';
import Comment from './comment';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
interface propType {
  userName: string;
  avatarURL: string;
  postImage: string[];
  postContent: string;
  postComment?: {
    name: string;
    avatarUrl: string;
    content: string;
    index:number
  }[];
  index:number
}
const styles = StyleSheet.create({
  avatar: {
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    paddingRight: 20,
    lineHeight: 20,
  },
});
const Post = ({
  userName,
  avatarURL,
  postImage,
  postContent,
  postComment,
  index
}: propType) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [iconState, setIconState] = useState(false);
  const [isTruncatedText, setIsTruncatedText] = useState(false);
  const [showMore, setShowMore] = useState(true);
  const [isComment, setIsComment] = useState(false);
  const ref = useRef(null);
  const navigation = useNavigation();
  const renderItem = useCallback(({item}) => {
    return (
      <Image
        source={{
          uri: item,
        }}
        style={{width: '100%', height: 250}}
      />
    );
  }, []);
  return (
    <View>
      <View style={styles.avatar}>
        <Avatar
          rounded
          size="medium"
          source={{
            uri: avatarURL,
          }}
          onPress={()=>{navigation.navigate('Profile',{profileIndex:index})}}
        />
        <Text style={{color: 'white', marginLeft: 10}} h4>
          {userName}
        </Text>
      </View>
      <View>
        <Carousel
          layout={'default'}
          ref={ref}
          data={postImage}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
          renderItem={renderItem}
          onSnapToItem={(index: number) => setActiveIndex(index)}
        />
        <Pagination
          dotsLength={postImage.length}
          activeDotIndex={activeIndex}
          containerStyle={{
            backgroundColor: 'rgba(0,0,0,0)',
            bottom: 0,
            position: 'absolute',
            height: 70,
            width: '100%',
          }}
          dotStyle={{
            width: 10,
            height: 10,
            marginTop: 100,
            borderRadius: 5,
            backgroundColor: 'rgba(255, 255, 255, 1)',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
      <View style={styles.avatar}>
        <Icon
          onPress={() => {
            setIconState(!iconState);
          }}
          color={iconState ? '#F55879' : 'white'}
          size={30}
          style={{marginHorizontal: 8}}
          type="ant-design"
          name={iconState ? 'heart' : 'hearto'}
        />
        <Icon
          onPress={() => setIsComment(true)}
          color="white"
          size={30}
          style={{marginHorizontal: 8}}
          type="ant-design"
          name="message1"
        />
        <Icon
          onPress={() => {
            Share.open({
              title: 'Share this post',
              message: postContent,
            })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                err && console.log(err);
              });
          }}
          color="white"
          size={30}
          style={{marginHorizontal: 8}}
          type="ant-design"
          name="sharealt"
        />
      </View>
      <View style={{marginLeft: 12, marginRight: 0, marginTop: 4}}>
        <Text style={{color: 'white'}}>
          {iconState ? '1,000,000' : '999,999'} likes
        </Text>
        {isTruncatedText ? (
          <>
            <Text style={styles.text} numberOfLines={showMore ? 3 : 0}>
              {postContent}
            </Text>
            <Text
              style={{...styles.text, textAlign: 'right', color: '#a1a1a1'}}
              onPress={() => setShowMore(!showMore)}>
              {showMore ? 'Read More' : 'Read Less'}
            </Text>
          </>
        ) : (
          <Text
            style={styles.text}
            onTextLayout={(event) => {
              const {lines} = event.nativeEvent;
              setIsTruncatedText(lines?.length > 3);
            }}>
            {postContent}
          </Text>
        )}
        <Comment
          isComment={isComment}
          setIsComment={setIsComment}
          comment={postComment}
        />
      </View>
    </View>
  );
};

export default Post;
