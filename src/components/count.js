import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Button } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../redux/reducers/counterReducer';

const Count = () => {
    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

  return (
    <View>
      <Text>count: {count}</Text>
      <Button onPress={() => dispatch(increment())} title="increment" />
      <Button onPress={() => dispatch(decrement())} title="decrement" />
      <Button onPress={() => dispatch(incrementByAmount(5))} title="incrementByAmount" />
    </View>
  )
}

export default Count

const styles = StyleSheet.create({})