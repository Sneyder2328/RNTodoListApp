import Dialog from "react-native-dialog";
import {primaryColor} from "./constants";
import React, {useState} from "react";

export const AddItemDialog = ({dialogVisible, onDialogVisible, handleOk, itemToEdit}) => {
    const [content, setContent] = useState(null)

    return <Dialog.Container visible={dialogVisible}>
        <Dialog.Title>{itemToEdit ? 'Edit Item' : 'Add Item'}</Dialog.Title>
        <Dialog.Input wrapperStyle={{
            borderColor: primaryColor,
            borderWidth: 1,
            borderRadius: 8,
            paddingLeft: 8,
            paddingRight: 8
        }} onChangeText={text => setContent(text)} placeholder={'Title'}>
            {itemToEdit && itemToEdit.title}
        </Dialog.Input>
        <Dialog.Button label="Cancel" onPress={() => {
            onDialogVisible(false)
        }}/>
        <Dialog.Button label="OK" onPress={() => {
            handleOk({id: itemToEdit ? itemToEdit.id : null, title: content})
            onDialogVisible(false)
        }}/>
    </Dialog.Container>;
}