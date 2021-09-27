
import * as React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import ButtomHomeCPN from '@components/ButtomHomeCPN';

const { width, height } = Dimensions.get("screen")

const MapScreen = (props) => {
    return (
        <MapView
            style={{ ...StyleSheet.absoluteFillObject, }}
            initialRegion={{
                latitude: 13.893983,
                longitude: 100.516292,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }} >
            <Marker
                key={"pinJENOSIZE"}
                coordinate={{
                    latitude: 13.893983,
                    longitude: 100.516292,
                }}
                title={"JENOSIZE"}
                description={"72/65 Bangtalad, อำเภอปากเกร็ด นนทบุรี 11120"} />
        </MapView>
    );
}

export default MapScreen