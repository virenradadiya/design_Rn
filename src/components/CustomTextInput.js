import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../helper/colors';
import { invldEmail, invldPass } from '../helper/strings';

const CustomTextInput = props => {
    const [title, setTitle] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setpasswordError] = useState(false)
    const handleTitle = () => {
        if (props.email == true) {
            validate(title)
        }
        if (props.password == true && title.length < 8 && title.length != 0) {
            setpasswordError(true)
        } else {
            setpasswordError(false)
        }
    }

    const changeTextFunc = (value) => {
        setTitle(value)
        props.callback(value)
    }

    const validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            if (text !== '') {
                setEmailError(true)
            }
            else {
                if (text == '') {
                    setTitleError(true)
                }
            }
        }
        else {
            setEmailError(false)
        }
    }

    return (
        <View style={styles.profiledataView}>
            <TextInput
                value={props.value}
                style={props.textInputStyle, [styles.textBox, { height: wp('14%') }]}
                onEndEditing={() => handleTitle()}
                onChangeText={value => changeTextFunc(value)}
                placeholder={props.placeholder}
                autoCapitalize='none'
            />
            {emailError == true ? <Text style={styles.errorText}>{invldEmail}</Text> :
                passwordError == true ? <Text style={styles.errorText}>{invldPass}</Text> : null}
        </View>
    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    textBox: {
        fontSize: 16,
        paddingLeft: wp('6%'),
        borderWidth: 1,
        borderColor: colors.textBoxBorder,
        borderRadius: wp('6%'),
        backgroundColor: colors.textBoxBg
    },
    profiledataView: {
        marginBottom: hp('2%'),
        width: widthPercentageToDP('70%')
    },
    errorText: {
        fontSize: 12,
        color: 'red',
        marginLeft: 15,
    },
})