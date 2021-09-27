
import * as React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("screen")

const ButtomHomeCPN = (props) => {
    return (
        <TouchableOpacity
            style={{
                marginTop: 10
            }}
            onPress={() => {
                if (props.onPress) {
                    props.onPress()
                }
            }}>
            <View
                style={{
                    width: width * 0.6,
                    padding: 20,
                    backgroundColor: "blue",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 15
                }}>
                <Text
                    style={{
                        color: "white"
                    }}>
                    {props.text}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default ButtomHomeCPN