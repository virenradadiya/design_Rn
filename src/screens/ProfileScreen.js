import React from 'react'
import { View, ImageBackground, Image, Text, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { menuIcon, menuMarkets, menuTools } from '../helper/StaticArray';
import { txtMarkets, txtMenu, txtTools } from '../helper/strings'
import styles from '../helper/style'

export default function ProfileScreen() {

    const renderItem = (data, tools) => {
        return (
            <View style={[styles.headingSubView, tools ? { paddingHorizontal: wp('8%') } : {
                paddingHorizontal: wp('8%'), marginVertical: hp('1%')
            }]}>
                {tools
                    ?
                    <Image
                        style={styles.coinLogo}
                        source={data.image}
                    />
                    :
                    <View style={styles.iconWithBg}>
                        <Image
                            style={[styles.coinLogo, !tools && { tintColor: 'white' }]}
                            source={data.image}
                        />
                    </View>
                }
                <Text style={styles.shortText}>{data.name}</Text>
            </View>
        )
    }


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ImageBackground style={styles.headerMainContainer} source={require('../assets/images/profileHeader.png')} >
                <View style={styles.headingSubView}>
                    <Image
                        style={styles.coinLogo}
                        source={require('../assets/images/back-icon.png')}
                    />
                    <Text style={styles.subHeading}>{txtMenu}</Text>
                </View>
            </ImageBackground>
            <View style={styles.mainProfileContainer}>
                <ScrollView>
                    <View style={styles.profileView}>
                        <View style={styles.userInfoView}>
                            <Image
                                style={styles.profilePic}
                                source={require('../assets/images/profile-img.png')}
                            />
                            <Text style={[styles.subHeading, { marginLeft: wp('2%') }]}>Viren Radadiya</Text>
                        </View>
                        <View style={styles.userInfoView}>
                            <Image
                                style={styles.coinLogo}
                                source={require('../assets/images/settings.png')}
                            />
                            <Image
                                style={[styles.coinLogo, { marginLeft: wp('2%') }]}
                                source={require('../assets/images/translation.png')}
                            />
                        </View>
                    </View>
                    <View style={[styles.sapraterLine, { marginTop: -hp('1%') }]} />

                    {/* ----------------Menu------------------ */}

                    {
                        menuIcon.map((data) => renderItem(data))
                    }
                    <View style={styles.sapraterLine} />

                    {/* ----------------Tools------------------ */}
                    <View style={styles.sectionView}>
                        <Text style={styles.sectionHeadingText}>{txtTools}</Text>
                    </View>
                    {
                        menuTools.map((data) => renderItem(data, true))
                    }

                    <View style={styles.sapraterLine} />

                    {/* ----------------Markets------------------ */}
                    <View style={styles.sectionView}>
                        <Text style={styles.sectionHeadingText}>{txtMarkets}</Text>
                    </View>
                    {
                        menuMarkets.map((data) => renderItem(data, true))
                    }
                </ScrollView>
            </View>
        </View>
    )
}
