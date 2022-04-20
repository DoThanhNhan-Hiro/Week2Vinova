import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const Home = (props) => {
    const [focus, setFocus] = useState(false)
  const customStyle = focus ? [styles.inputForcus,styles.input] : styles.input
  return (
    <View>
   <text>Home</text>
    <Icon name={props.iconName} size={30} color="#30D95" style={styles.icon} />
    </View>
  )
}

export default Home

