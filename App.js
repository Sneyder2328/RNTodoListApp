import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import Constants from "expo-constants";
import {Toolbar} from "./app/Toolbar";
import {FAB} from "./app/FloatingActionButton";
import {ListItem} from "./app/ListItem";
import {secondaryColor} from "./app/constants";
import {AddItemDialog} from "./app/AddItemDialog";

const initialItems = [
    {
        id: uuidv4(),
        title: "Talk the talk",
        completed: true
    },
    {
        id: uuidv4(),
        title: "Walk the walk",
        completed: false
    }
]

const Content = () => {
    const [items, setItems] = useState(initialItems)
    const [itemToEdit, setItemToEdit] = useState(null)
    const [dialogVisible, setDialogVisible] = useState(false)

    const handleOk = (newItem) => {
        if (newItem.id) {
            setItems(items.map(it => it.id === newItem.id ? {...it, title: newItem.title} : it))
            // items.findIndex((it) => it.id === newItem.id)
        } else {
            setItems([...items,
                {
                    title: newItem.title,
                    id: uuidv4(),
                    completed: false
                }])
        }
        setDialogVisible(false)
    }

    const editItem = (id) => {
        console.log('editItem', id);
        setItemToEdit({id, title: items.find(it => it.id === id).title})
        setDialogVisible(true)
    }

    const removeItem = (id) => {
        console.log('removeItem', id);
        setItems(items.filter(it => it.id !== id))
    }

    const handleCompletedUpdated = ({id, completed}) => {
        setItems(items.map(it => it.id === id ? {...it, completed} : it))
    }

    return <View style={styles.content}>
        <FlatList
            data={items}
            renderItem={({item}) => <ListItem item={item} onDelete={(id) => removeItem(id)}
                                              onEdit={(id) => editItem(id)}
                                              onCompletedUpdated={handleCompletedUpdated}/>}
            keyExtractor={item => item.id}
        />
        <FAB handlePress={() => {
            setItemToEdit(null)
            setDialogVisible(true)
        }}/>
        <AddItemDialog dialogVisible={dialogVisible} onDialogVisible={(visibility) => setDialogVisible(visibility)}
                       handleOk={handleOk} itemToEdit={itemToEdit}/>
    </View>
}

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={secondaryColor}/>
            <Toolbar title={'Todo List'}/>
            <Content/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#fff'
    },
    content: {
        padding: 8,
        flex: 1
    }
});