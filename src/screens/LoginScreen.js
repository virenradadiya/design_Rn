import React, { useState } from 'react'
import { Image, View, ImageBackground, Text, TouchableOpacity, Alert } from 'react-native'
import CustomButton from '../components/CustomButton'
import CustomTextInput from '../components/CustomTextInput'
import { forgotPass, txtSignUp, txtThefutureof, txtTRADIX, txtWlcm } from '../helper/strings'
import styles from '../helper/style'

export default function LoginScreen(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('')

    return (
        <View style={styles.mainContainer}>
            <Image
                style={styles.loginPagelogo}
                source={require('../assets/images/login-img.png')}
            />
            <ImageBackground source={require('../assets/images/green-img.png')} style={styles.loginBgImage}>
                <View style={styles.headingContainer}>
                    <Text style={styles.textHeading}>{txtTRADIX}</Text>
                    <Image
                        style={styles.coinLogo}
                        source={require('../assets/images/coin.png')}
                    />
                </View>
                <Text style={styles.subHeading}>{txtThefutureof}</Text>
            </ImageBackground>
            <Text style={styles.wlcmText}>{txtWlcm}</Text>
            <CustomTextInput
                value={email}
                placeholder={'E-mail'}
                email={true}
                callback={setEmail}
            />
            <CustomTextInput
                value={password}
                placeholder={'Password'}
                password={true}
                callback={setPassword}
            />
            <CustomButton
                title={'LOGIN'}
                onPress={() => props.navigation.navigate('BottomTab')}
            />
            <View style={styles.bottomContainer}>
                <Text style={styles.bottomViewText}>{forgotPass}</Text>
                <TouchableOpacity onPress={() => Alert.alert("Button press")}>
                    <Text style={[styles.bottomViewText, { fontWeight: '600' }]}>{txtSignUp}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

