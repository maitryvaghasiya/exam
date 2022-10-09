import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { LogOut } from '../Redux/action/auth.action'

export default function Home() {

    const dispatch = useDispatch()
 const handleLogOut = () => {
    dispatch(LogOut())
 }
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.container}>
                <Text style={{color:"black",fontSize:22}}>Home Screen</Text>
            </View>
            <View style={{ alignItems: "center" }}>
                <TouchableOpacity style={styles.loginBtn} onPress={() => {handleLogOut()}}>
                    <Text style={styles.loginText}>Log Out</Text>
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
    loginBtn: {
        width: "30%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#95051B",
        marginTop: 300,
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