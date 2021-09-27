import React from 'react';
import { useState, useCallback } from 'react';
import { View, Text, TextInput, Dimensions, FlatList, Image } from 'react-native';
import _ from 'lodash'

import { searchPlace } from '@libs/Api'

const { width, height } = Dimensions.get("screen")

const SearchScreen = () => {

    const [textSearch, settextSearch] = useState('')
    const [listSearch, setlistSearch] = useState([])

    const updateSearchPlace = useCallback(
        _.debounce((text) => {
            callAPISearchPlace(text)
        }, 100),
        []
    );

    const callAPISearchPlace = async (text) => {
        const listData = await searchPlace(text)
        setlistSearch(listData.data.results)
        console.log("listData", listData.data.results);
    }

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingTop: 20
            }}>

            <FlatList
                ListHeaderComponent={<View
                    style={{
                        borderWidth: 1,
                        borderRadius: 5,
                        backgroundColor: "white"
                    }}>
                    <TextInput
                        style={{
                            width: width * 0.9,
                            color: "black",
                        }}
                        placeholder={"ค้นหาร้านอาหาร"}
                        placeholderTextColor="gray" 
                        onChangeText={(textChange) => {
                            updateSearchPlace(textChange)
                        }} />

                </View>}
                data={listSearch}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={{
                                flexDirection: "row",
                                backgroundColor: "white",
                                borderRadius: 15,
                                padding: 10,
                                marginVertical: 10
                            }}>
                            {
                                item.photos ?
                                    <View>
                                        <Image
                                            style={{
                                                width: 120,
                                                height: 120
                                            }}
                                            source={{
                                                uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&photo_reference=${item.photos[0].photo_reference}&key=AIzaSyDQehCm4XpXhSZvdCWJRNgwtnccHzuEvuw`
                                            }} />
                                    </View>
                                    :
                                    <View>
                                        <Image
                                            style={{
                                                width: 120,
                                                height: 120
                                            }}
                                            source={{
                                                uri: `https://tonkit360.com/wp-content/uploads/2021/04/fast-food.jpg`
                                            }} />
                                    </View>
                            }
                            <View
                                style={{
                                    marginLeft: 10
                                }}>
                                <Text
                                    style={{
                                        width: width * 0.5,
                                        fontWeight: "bold"
                                    }}>
                                    {item.name}
                                </Text>
                                {
                                    item.opening_hours ?
                                        <Text
                                            style={{
                                                width: width * 0.5,
                                                color: item.opening_hours.open_now ? "green" : "red",
                                                fontWeight: "bold"
                                            }}>
                                            {item.opening_hours.open_now ? "เปิด" : "ปิด"}
                                        </Text>
                                        :
                                        <Text
                                            style={{
                                                width: width * 0.5,
                                                color: "gray",
                                                fontWeight: "bold"
                                            }}>
                                            {"ไม่ระบุ"}
                                        </Text>
                                }

                                <Text
                                    style={{
                                        width: width * 0.5
                                    }}>
                                    {item.formatted_address}
                                </Text>
                            </View>

                        </View>
                    )
                }} />
        </View>
    );
}

export default SearchScreen