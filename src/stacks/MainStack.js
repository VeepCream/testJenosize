
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@screens/HomeScreen';
import SearchScreen from '@screens/SearchScreen';
import MapScreen from '@screens/MapScreen';

import HeaderCPN from '@components/HeaderCPN';

const Stack = createNativeStackNavigator();


function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false
        }} />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={({ navigation, route }) => ({

          header: () => {
            return (
              <HeaderCPN
                text={"ค้นหาร้านอาหาร"}
                navigation={navigation} />
            )
          }
        })} />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={({ navigation, route }) => ({

          header: () => {
            return (
              <HeaderCPN
                text={"แผนที่บริษัท JENOSIZE"}
                navigation={navigation} />
            )
          }
        })} />
    </Stack.Navigator>
  );
}

export default MainStack