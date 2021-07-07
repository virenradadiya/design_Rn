import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import colors from '../helper/colors';

const CustomButton = props => {
    return (
        <TouchableOpacity style={styles.btnMainContainer} onPress={props.onPress}>
            <Text style={styles.btnText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    btnMainContainer: {
        marginBottom: hp('2%'),
        width: widthPercentageToDP('70%'),
        borderRadius: wp('6%'),
        backgroundColor: colors.textBoxBg,
        alignItems: 'center',
        justifyContent: 'center',
        height: wp('14%'),
        backgroundColor: colors.btnColor
    },
    btnText: {
        fontSize: 20,
        color: colors.white
    }
})