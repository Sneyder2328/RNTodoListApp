import {TouchableOpacity, StyleSheet, Platform, TouchableNativeFeedback, View} from "react-native";
import React from "react";
import {Ionicons} from '@expo/vector-icons';
import {primaryColor, primaryColorLight} from "./constants";

const DIMENSION = 56
const MARGIN = 20

export const FAB = ({handlePress}) => {
    const IconAdd = <Ionicons name={'ios-add'} size={26} color={'#fff'}/>;
    return Platform.OS === 'android' ?
        <TouchableNativeFeedback
            onPress={handlePress}
            useForeground={false}
            style={{
                width: DIMENSION,
                height: DIMENSION,
                position: 'absolute',
                right: MARGIN,
                bottom: MARGIN,
            }}
            background={TouchableNativeFeedback.Ripple(primaryColorLight, true, 28)}>
            <View style={styles.container}>
                {IconAdd}
            </View>
        </TouchableNativeFeedback>
        : <TouchableOpacity style={styles.container} onPress={handlePress}>
            {IconAdd}
        </TouchableOpacity>
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: primaryColor,
        borderRadius: DIMENSION,
        position: 'absolute',
        width: DIMENSION,
        height: DIMENSION,
        alignItems: 'center',
        justifyContent: 'center',
        right: MARGIN,
        bottom: MARGIN,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    }
});