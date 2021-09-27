
import * as React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/Entypo';

const { width, height } = Dimensions.get("screen")

const HeaderCPN = (props) => {
    return (
        <View
            style={{
                paddingTop: getStatusBarHeight(true),
                backgroundColor: "#ffffff"
            }}>
            <View
                style={{
                    width: width,
                    height: 60,
                    flexDirection: "row"
                }}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center"
                    }}>
                    <TouchableOpacity
                    style={{
                        padding: 10
                    }}
                    onPress={()=>{
                        props.navigation.goBack()
                    }}>
                    <Icon name="chevron-left" size={30} color="#000000" />
                    </TouchableOpacity>

                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text>{props.text}</Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>

                </View>

            </View>
        </View>
    );
}

export default HeaderCPN