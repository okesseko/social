import React, {useState} from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
} from 'react-native';

// Import Image Picker
// import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Video from 'react-native-video';
const GetPhoto = () => {
  const [filePath, setFilePath] = useState({});
  const [type, setType] = useState('photo');
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,

          // @ts-ignore
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,

          // @ts-ignore
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        console.warn('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'high',
      durationLimit: 10, //Video max duration in seconds
      saveToPhotos: true,
      includeBase64: true,
    };
    setType(type);
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      // @ts-ignore
      launchCamera(options, (response) => {
        console.warn('Response = ', response.assets[0]);

        if (response.didCancel) {
          console.warn('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          console.warn('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          console.warn('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
            console.warn('error');
          return;
        }
        // @ts-ignore
        console.log('base64 -> ', response.base64);
        // @ts-ignore
        console.log('uri -> ', response.uri);
        // @ts-ignore
        console.log('width -> ', response.width);
        // @ts-ignore
        console.log('height -> ', response.height);
        // @ts-ignore
        console.log('fileSize -> ', response.fileSize);
        // @ts-ignore
        console.log('type -> ', response.type);
        // @ts-ignore
        console.log('fileName -> ', response.fileName);
        // @ts-ignore
        setFilePath(response.assets[0]);
      });
    }
  };

  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      includeBase64: true,
    };
    setType(type);
    // @ts-ignore
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.warn('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        console.warn('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        console.warn('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        console.warn('error');
        return;
      }
      // @ts-ignore
      console.log('base64 -> ', response.base64);
      // @ts-ignore
      console.log('uri -> ', response.uri);
      // @ts-ignore
      console.log('width -> ', response.width);
      // @ts-ignore
      console.log('height -> ', response.height);
      // @ts-ignore
      console.log('fileSize -> ', response.fileSize);
      // @ts-ignore
      console.log('type -> ', response.type);
      // @ts-ignore
      console.log('fileName -> ', response.fileName);
      setFilePath(response.assets[0]);
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.titleText}>
        Example of Image Picker in React Native
      </Text>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,' + (filePath as any).base64,
          }}
          style={styles.imageStyle}
        />

        {type === 'photo' ? (
          <Image
            source={{uri: (filePath as any).uri}}
            style={styles.imageStyle}
          />
        ) : (
          <Video
            source={{uri: (filePath as any).uri}}
            style={styles.imageStyle}
            resizeMode={'contain'}
          />
        )}
        <Text style={styles.textStyle}>{(filePath as any).uri}</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => captureImage('photo')}>
          <Text style={styles.textStyle}>Launch Camera for Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => captureImage('video')}>
          <Text style={styles.textStyle}>Launch Camera for Video</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('photo')}>
          <Text style={styles.textStyle}>Choose Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('video')}>
          <Text style={styles.textStyle}>Choose Video</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GetPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    width: 200,
    height: 200,
    margin: 5,
  },
});
