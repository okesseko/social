import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ThemeProvider, Header} from 'react-native-elements';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Main from './component/main/main';
import Search from './component/search/search';
import Profile from './component/profile/profile';

const Tab = createMaterialBottomTabNavigator();

const theme = {};

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}
const LogoHeader = ({goToHome}) => {
  return (
    <TouchableOpacity onPress={goToHome}>
      <Text style={{color: '#fff', fontSize: 25}}>Jinstagram</Text>
    </TouchableOpacity>
  );
};
const App = () => {
  const navigationRef = React.useRef(null);
  return (
    <ThemeProvider theme={theme}>
      <Header
        backgroundColor="black"
        centerComponent={
          <LogoHeader
            goToHome={() => {
              navigationRef.current?.navigate('Home');
            }}
          />
        }
        // centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
        // rightComponent={{
        //   icon: 'settings',
        //   color: '#fff',
        //   onPress: () => {
        //     console.log('213');
        //   },
        // }}
      />
      <NavigationContainer ref={navigationRef}>
        <Tab.Navigator labeled={false} barStyle={{backgroundColor: 'black'}}>
          <Tab.Screen
            name="Home"
            component={Main}
            options={{
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarIcon: ({color}) => (
                <MaterialIcons name="search" color={color} size={26} />
              ),
            }}
          />
          {/* <Tab.Screen
            name="Notification"
            component={Notification}
            options={{
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
              ),
            }}
          /> */}
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={26}
                />
              ),
            }}/>
            {/* {(props) => <Profile {...props} />}
          </Tab.Screen> */}
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
