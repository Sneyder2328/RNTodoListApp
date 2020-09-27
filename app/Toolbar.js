import {StyleSheet, Text, View, Platform} from "react-native";
import React from "react";
import {primaryColor} from "./constants";

export const Toolbar = ({title}) => {
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
    </View>;
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: primaryColor,
        height: 54,
        justifyContent: 'center',
        elevation: 4
    },
    title: {
        fontSize: 21,
        color: 'white',
        paddingLeft: 16,
        textAlign: Platform.OS === 'android' ? 'left' : 'center',
    }
});