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
  Dimensions,
} from 'react-native';
import {colors} from 'react-native-elements';

// Import Image Picker
// import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Video from 'react-native-video';

const GetPhoto = ({setFile, close}: any) => {
  const [filePath, setFilePath] = useState({});
  const [type, setType] = useState('image');
  const [fileBuffer, setFileBuffer] = useState<any>();
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
    };
    setType(type === 'photo' ? 'image' : 'video');
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      // @ts-ignore
      launchCamera(options, (response) => {
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
        setFileBuffer({
          type: type === 'photo' ? 'image' : 'video',
          uri: response.assets[0].uri,
        });
      });
    }
  };

  const chooseFile = (type) => {
    let options = {
      mediaType: type,
    };
    // @ts-ignore
    launchImageLibrary(options, (response) => {
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

      setType((response.assets[0] as any).type ? 'image' : 'video');
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
      setFileBuffer({
        type: (response.assets[0] as any).type ? 'image' : 'video',
        uri: response.assets[0].uri,
      });
    });
  };
  return (
    <View style={styles.container}>
      {type === 'image' ? (
        <Image
          source={{uri: (filePath as any).uri}}
          style={styles.imageStyle}
          resizeMode="contain"
        />
      ) : (
        <Video
          source={{uri: (filePath as any).uri}}
          style={styles.imageStyle}
          resizeMode="cover"
        />
      )}
      {fileBuffer && (
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            borderColor: '#FF8484',
            borderWidth: 2,
            padding: 5,
            marginBottom: 100,
            width: 100,
            justifyContent: 'center',
          }}
          onPress={() => {
            setFile(fileBuffer);
            close(false);
          }}>
          <Text style={[styles.textStyle, {color: '#FF8484'}]}>Comfirm</Text>
        </TouchableOpacity>
      )}
      <View style={{position: 'absolute', bottom: 0, flexDirection: 'row'}}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => captureImage('video')}>
          <Text style={styles.textStyle}>Camara Video</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => captureImage('photo')}>
          <Text style={styles.textStyle}>Camara Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('mixed')}>
          <Text style={styles.textStyle}>Library</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
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
    color: 'white',
    textAlign: 'center',
  },
  buttonStyle: {
    borderColor: 'white',
    borderWidth: 2,
    padding: 5,
    marginHorizontal: 10,
    marginBottom: 10,
    width: 100,
    justifyContent: 'center',
  },
  imageStyle: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },
});
