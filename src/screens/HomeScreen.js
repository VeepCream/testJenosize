
import * as React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import ButtomHomeCPN from '@components/ButtomHomeCPN';


const { width, height } = Dimensions.get("screen")

const HomeScreen = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View
                style={{
                    flex: 3,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                <Image
                    style={{
                        width: width * 0.7,
                        height: width * 0.7,
                    }}
                    source={{
                        uri: `https://res.cloudinary.com/getlinks/image/upload/v1523427302/hcp7zrg2phjvnobbp3ik.png`
                    }} />
            </View>
            <View
                style={{
                    flex: 1
                }}>
                <ButtomHomeCPN
                    text={"ค้นหาร้านอาหาร"}
                    onPress={() => {
                        props.navigation.navigate("SearchScreen")
                    }} />
                <ButtomHomeCPN
                    text={"แผนที่บริษัท JENOSIZE"}
                    onPress={() => {
                        props.navigation.navigate("MapScreen")
                    }} />
            </View>
        </View>
    );
}

export default HomeScreen