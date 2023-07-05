import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const Login = () => {


const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const {onLogin, onRegister} = useAuth()


const login = async () => {
    const result = await onLogin!(email, password)
    if(result && result.error) {
        alert(result.msg)
    }
}

//we automatically call the login after a successful registration
const register = async () => {
    const result = await onRegister!(email, password)
    if(result && result.error) {
        alert(result.msg)
    } else {
        login()
    }
}

  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://galaxies.dev/img/logos/logo--blue.png"}} style={styles.image}/>
      <View style={styles.form}>
        <TextInput style={styles.input} autoCapitalize="none" placeholder="Email" onChangeText={(text: string)=> setEmail(text)}/>
          <TextInput style={styles.input} 
             placeholder="Password" 
             secureTextEntry 
             onChangeText={(text: string)=> setPassword(text)}/>
             <Button onPress={login} title="Login Now"/>
             <Button onPress={register} title="Create Account"/>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    image: {
        width: '50%',
        height: '50%',
        resizeMode: 'contain'
    },
    form: {
        gap: 5,
        width: '80%',
    },
    input: {
        height: 44,
        padding: 5,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 4,
    },
    container: {
        alignItems: 'center',
        width: '100%',
    }

})