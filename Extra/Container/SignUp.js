import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../Redux/action/auth.action';

export default function SignUp({navigation}) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSignup = () => {
        dispatch(signupUser({ email, password, name }))
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.container}>
                <View style={{ alignItems: "center", marginBottom: 100 }}>
                    <Text style={{ color: "#95051B", fontSize: 22, fontWeight: "600" }}>Sign Up</Text>
                </View>
                <TextInput
                    style={styles.inputEmail}
                    placeholder="Name"
                    placeholderTextColor="#6B7280"
                    color='#1F2937'
                    onChangeText={setName}
                    value={name}
                />
                <TextInput
                    style={styles.inputEmail}
                    placeholder="Email"
                    placeholderTextColor="#6B7280"
                    color='#1F2937'
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput
                    style={styles.inputPass}
                    placeholder="Password"
                    placeholderTextColor="#6B7280"
                    color='#1F2937'
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                />
            </View>
            <View style={{ alignItems: "center" }}>
                <TouchableOpacity style={styles.loginBtn} onPress={()=>{handleSignup()}}>
                    <Text style={styles.loginText}>Verify</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", marginTop: 20 }}>
                <TouchableOpacity onPress={()=>{navigation.navigate("login")}}>
                    <Text style={{ color: "#95051B" }}>Log In</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#F4F6F7",

    },
    container: {
        flex: 1,
        backgroundColor: "#F4F6F7",
        margin: 18
    },
    
    inputEmail: {
        borderRadius: 10,
        width: "100%",
        height: 45,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#A19F9F",
        marginBottom: 20
    },
    inputPass: {
        borderRadius: 10,
        width: "100%",
        height: 45,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#A19F9F",
        marginBottom: 10
    },
    loginBtn: {
        width: "30%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#95051B",
        marginTop: 30,
        borderRadius: 10,
        elevation: 2,
        marginBottom: 10
    },
    loginText: {
        fontWeight: "700",
        color: "white",
        fontSize: 16
    },
})
