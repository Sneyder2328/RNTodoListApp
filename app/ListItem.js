import React, {useState} from 'react'
import {StyleSheet, Text, View, TouchableHighlight} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {primaryColor} from "./constants";

export const ListItem = ({item, onDelete, onEdit, onCompletedUpdated}) => {
    const [completed, setCompleted] = useState(item.completed)

    return <View style={styles.container}>
        <View style={styles.checkbox_container}>
            <CheckBox
                value={completed}
                onValueChange={(newValue) => {
                    setCompleted(newValue)
                    onCompletedUpdated({id: item.id, completed})
                }}/>
            <Text style={styles.text}>{item.title}</Text>
        </View>
        <View style={styles.icons_container}>
            <TouchableHighlight onPress={() => onEdit(item.id)} style={styles.touchableIcon}
                                underlayColor={primaryColor}>
                <MaterialCommunityIcons name={'pencil'} size={26} style={styles.icon}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => onDelete(item.id)} style={styles.touchableIcon}
                                underlayColor={primaryColor}>
                <MaterialCommunityIcons name={'delete'} size={26} style={styles.icon}/>
            </TouchableHighlight>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 8,
        justifyContent: 'space-between'
    },
    text: {

    },
    icons_container: {
        flexDirection: 'row',
        marginRight: -8,
    },
    touchableIcon: {
        borderRadius: 15,
    },
    icon: {
        color: '#616161',
        marginLeft: 8,
        marginRight: 8
    },
    checkbox_container: {
        flexDirection: 'row',
        alignItems: 'center',
        flexShrink: 1
    }
});