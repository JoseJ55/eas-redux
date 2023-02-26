import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Button } from 'react-native';
import { FlatList } from 'react-native';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, addCustomTodo } from '../redux/reducers/todoReducer';

const ToDoHeader = () => {
    const { todo } = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const item = ({ item }) => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{color: 'black'}}>{item.id} {item.action}</Text>
            </View>
        )
    }

    return (
        <View>
            <Text>Todo List</Text>
            <Button onPress={() => dispatch(addTodo())} title="add todo" />
            <Button onPress={() => dispatch(removeTodo())} title="remove todo" />
            <Button onPress={() => dispatch(addCustomTodo("new to do"))} title="add custom todo" />

            <View>
                <FlatList
                    data={todo}
                    renderItem={item}
                    />
            </View>
        </View>
    )
}

export default ToDoHeader

const styles = StyleSheet.create({})