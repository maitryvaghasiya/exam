import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LogOut } from '../Redux/action/auth.action'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import { addPhoto, updatePhoto, getCategory, getPhoto } from '../Redux/action/home.action';

export default function Home() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [uid, setUId] = useState("")

    const [image, setImage] = useState('');
    const [fileName, setFileName] = useState('')

    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(LogOut())
    }
    useEffect(() => {
        dispatch(getPhoto())
    }, [])
    const PhotoImg = useSelector(state => state.home)

    const handleAddData = () => {
        console.log("namenamename", name);
        dispatch(addPhoto({ name: name, email: email, pro_image: image }))
    }

    const handleImagePicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImage(image.path)
            console.log("imageeeee", image);
        });
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.container}>
                <Text style={{ color: "black", fontSize: 22 }}>Profile</Text>
                <View style={{ justifyContent: "space-around", marginTop: 10 }}>
                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                        <Image source={{ uri: PhotoImg.pro_image }} style={styles.addImage}></Image>
                    </View>
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 30 }} onPress={() => handleImagePicker()}>
                        <MaterialIcons name={'add-photo-alternate'} style={styles.photo} />
                        <Text style={{ color: "#A19F9F", top: 8 }}>Upload Image</Text>
                    </TouchableOpacity>
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
                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity style={styles.loginBtn1} onPress={() => { handleAddData() }}>
                            <Text style={styles.loginText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity style={styles.loginBtn} onPress={() => { handleLogOut() }}>
                            <Text style={styles.loginText}>Log Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
    loginBtn1: {
        width: "30%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#95051B",
        marginTop: 100,
        borderRadius: 10,
        elevation: 2,
        marginBottom: 10
    },
    loginBtn: {
        width: "30%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#95051B",
        marginTop: 20,
        borderRadius: 10,
        elevation: 2,
        marginBottom: 10
    },
    loginText: {
        fontWeight: "700",
        color: "white",
        fontSize: 16
    },
    inputEmail: {
        borderRadius: 10,
        width: "100%",
        height: 45,
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: "#A19F9F",
        marginBottom: 20
    },
    photo: {
        color: "#A19F9F",
        fontSize: 22,
        top: 3,
        marginRight: 10,
        fontSize: 32,
        // color: colors.secondarytext
    },
    addImage: {
        backgroundColor: "#D5D6D5",
        height: 150,
        width: 150,
        borderRadius: 150,
        justifyContent: "center",
        alignItems: "center"
    },
})