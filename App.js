import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import cover from './assets/Background.png'
import logo from './assets/LogoLogin.png'
import Icon from 'react-native-vector-icons/Ionicons';
import Input from './Components/InputCpn';
import FlashMessage from 'react-native-flash-message';
import { showMessage } from "react-native-flash-message";
import { NativeRouter, Route, Link } from 'react-router-native'
import AppNavigator from './Components/AppNavigator';
const App = () => {
  const [focus, setFocus] = useState(false)
  const [status, setStatus] = useState(false)
  const [textMail, setTextMail] = useState("");

  const [textPass, setTextPass] = useState("");
  const customStyle = focus ? [styles.inputForcus, styles.input] : styles.input
  const navigate = "<"
  const COLOR = {
    error1: '#FD5A65',
    error2: '#FFD1D1',
    blue: '#304D95',
    main: '#FFD834',
    white: '#FFFFFF',
    redNoti: '#FF3B3B',
    greenNoti: '#009444'
  }
  const IMAGE = {
    rabit: require('./assets/LogoLogin.png'),
    error: require('./assets/error.png'),

  }
  const Check=()=>{
    showMessage({
      message: "Hello World",
      description: "textMail.length < 8 || textMail.length > 30",
      type: "success",
    });
    this.props.navigation.navigate('Profile')
  }

  const [colorBorderEmail, setColorBorderEmail] = useState(COLOR.white)
  const [colorBorderPass, setColorBorderPass] = useState(COLOR.white)
  const [imageRabit, changeImage] = useState(IMAGE.rabit)
  const [colorInputBackGround, setInputBackGround] = useState(COLOR.white)
  const [statusCheck,setStatusCheck] = useState(false);

  const setEmail = (text)=>{
    setTextMail(text) ;
    setStatusCheck(false);
     if (text.length > 30 || text.length < 8 ||
      text !== "admin123456") {
    
      showMessage({
        message: "",
        description: "Emails incorrect",
        type: "unsuccess",
      });
      setColorBorderEmail(COLOR.redNoti)
      changeImage(IMAGE.error);
    }
    else{
      setStatusCheck(true);
      changeImage(IMAGE.rabit);
      setColorBorderEmail(COLOR.white)
    }
  }
  const setPassword = (text)=>{
    setTextPass(text) 
    setStatusCheck(false);
    
    if (text.length < 5 || text !== "1234567") {
        showMessage({
          message: "",
          description: "Password is incorrect",
          type: "unsuccess",
        });
        changeImage(IMAGE.error);
        setColorBorderPass(COLOR.redNoti);
      }
      else{
        setStatusCheck(true);
        changeImage(IMAGE.rabit);
        setColorBorderPass(COLOR.white);
      }
  }
  const toggleEye = () => {
    setStatus(!status);
  }


  return (
    <View style={styles.container}>
    <AppNavigator/>
      <FlashMessage position="top" />
      <View style={styles.navigate}>
        <Text style={styles.Iconnavigate} > {navigate} </Text>
      </View>
      <View style={styles.logo}>
        <View style={styles.Textlogo}>
        </View>
        <View style={styles.Imagelogo}>
          <Image source={imageRabit} resizeMode="cover" style={styles.image} />
        </View>
      </View>
      <View style={styles.bottom}>
        <Input iconName={'mail-outline'} placeholder="Enter Username"
          onChangeText={(text) => setEmail(text)}
          onFocus={() => { setColorBorderEmail(COLOR.blue) }}
          onBlur={() => { setColorBorderEmail(COLOR.white) }} 
          borderColor={colorBorderEmail}/>
        <View>
          <Input iconName={'key-outline'} placeholder="Enter Password" secureTextEntry={status ? true : false} style={{
            position: 'relative'
          }}
            onChangeText={(text) => setPassword(text)}
            onFocus={() => { setColorBorderPass(COLOR.blue) }}
            onBlur={() => { setColorBorderPass(COLOR.white) }}
            borderColor={colorBorderPass}
          />
          <Icon onPress={toggleEye} name={status ? "md-eye-off-outline" : 'md-eye-outline'} size={30} color='#304D95' style={{
            position: 'absolute',
            right: 45,
            top: 13,
            zIndex: 10
          }} />

        </View>

        <View style={[styles.input, styles.button]}>
          <TouchableOpacity onPress={Check} >
            <Text style={styles.buttonText} >Login</Text>
          </TouchableOpacity>
        </View>

        <Text style={{
          fontSize: 15,
          color: '#333333',
          textAlign: 'center',
          marginTop: 5
        }}>Forgot Password ?
          <Text style={{
            fontWeight: '800'
          }}> Click Here</Text>
        </Text>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2C816'
  },
  navigate: {
    position: 'absolute',
    top: 30,
    left: 30,
    zIndex: 10,
    height: 40,
    width: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

  },
  Iconnavigate: {
    fontSize: 20,
    color: 'red'
  },

  logo: {
    flex: 1,

  },
  bottom: {
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  Textlogo: {
    flex: 1,
    alignItems: 'center',
  },
  Imagelogo: {
    flex: 1,
    alignItems: 'center',
    paddingRight: -15,
    marginBottom: 30,

  },
  imageRabbit: {
    flex: 1,
    resizeMode: "contain",


  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 20,
    marginHorizontal: 30,
    borderRadius: 50,
    paddingHorizontal: 60,
    paddingVertical: 15,

  },
  inputForcus: {
    borderColor: '#304D95',
    borderWidth: 1
  },
  text: {
    fontFamily: 'Arial Rounded MT Bold',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#304D95',
    textAlign: 'center',
    marginBottom: 20

  },
  button: {
    backgroundColor: '#FF6D03',
    height: 54,
    marginTop: 20
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },
  icon: {
    top: 12,
    left: 50,
    position: 'absolute'
  }

})