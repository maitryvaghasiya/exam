import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../Container/LogIn';
import SignUp from '../Container/SignUp';
import Home from '../Container/Home';
import { useSelector } from 'react-redux';
import AsyncStorage from "@react-native-async-storage/async-storage"

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {

    const [AsyncDataValue,setAsyncDataValue] = useState(null)

    let authData = useSelector(state => state.auth)

    console.log("gahgdaduasusf", authData);

    useEffect(()=>{
        asyncData()
    },[])

    let asyncUser = null;

    const asyncData = async () => {
        asyncUser = await AsyncStorage.getItem("user")

        setAsyncDataValue(asyncUser)
    }

    console.log("zzzzzzzzzzzzzzzzzz", AsyncDataValue !== "Valid", authData.auth === null);

    if (authData.auth === null) {

        return (
            <Stack.Navigator independent={true} initialRouteName="login">
                <Stack.Screen name="login" component={LogIn} />
                <Stack.Screen name="signup" component={SignUp} />
            </Stack.Navigator>
        )
    } else {
        return (
            <Stack.Navigator independent={true} initialRouteName="home">

                <Stack.Screen name="home" component={Home} />
            </Stack.Navigator>
        )
    }

}