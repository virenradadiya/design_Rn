import React, { useState } from 'react'
import { View, ImageBackground, Image, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import colors from '../helper/colors';
import { tradixArr } from '../helper/StaticArray';
import { txtTRADIX } from '../helper/strings'
import styles from '../helper/style'

export default function HomeScreen() {
    const [activeIndex, setActiveIndex] = useState(0);

    const topMenuBar = (item, index) => {
        return (
            <View style={styles.topMenuBarView}>
                <TouchableOpacity
                    onPress={() => setActiveIndex(index)}
                    style={[styles.subTopMenuBarView, index == activeIndex ? { backgroundColor: colors.activeTabColor } : null]}
                >
                    <Text style={[styles.topMenuBarText, index == activeIndex ? { color: colors.white } : null]}> {item}</Text>
                </TouchableOpacity>
            </View >
        )
    }

    const itemListComponents = (item, index) => {
        return (
            <View style={[styles.headingSubView, styles.listMainView]}>
                <View>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.topMenuBarText, { color: colors.darkGrey }}>{item.time} {item.name}</Text>
                </View>
                <View>
                    <View style={[styles.subTopMenuBarView, { backgroundColor: colors.primaryColor }]}>
                        <Text style={styles.topMenuBarText}> {item.totalPrice}</Text>
                    </View>
                    <Text style={styles.topMenuBarText, { color: colors.darkGrey }}>{item.volume}</Text>
                </View>
            </View >
        )
    }

    return (
        <>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <ImageBackground style={styles.headerMainContainer} source={require('../assets/images/homeHeader.png')}>
                    <View style={styles.headingSubViewMainSceen}>
                        <View style={styles.userInfoView}>
                            <Text style={styles.mainScreenHeader}>{txtTRADIX}</Text>
                            <Image
                                style={styles.coinLogo}
                                source={require('../assets/images/coin.png')}
                            />
                        </View>
                        <Image
                            style={styles.coinLogo}
                            source={require('../assets/images/search.png')}
                        />
                    </View>
                </ImageBackground>
                <View style={[styles.mainProfileContainer]}>
                    <FlatList
                        data={['Index', 'Shares', 'Currencies', 'Futures', 'Crypto']}
                        style={styles.tabMenuStyle}
                        renderItem={({ item, index }) => topMenuBar(item, index)}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}

                    />
                    <ScrollView style={styles.listView}>
                        <FlatList
                            data={tradixArr}
                            renderItem={({ item, index }) => itemListComponents(item, index)}
                            keyExtractor={(item, index) => index.toString()}
                            ItemSeparatorComponent={() => {
                                return (<View style={styles.sapraterLine} />);
                            }}
                        />
                    </ScrollView>
                </View>
            </View>
            <TouchableOpacity style={styles.alertBtn}>
                <Image
                    style={styles.coinLogo}
                    source={require('../assets/images/menuIcon.png')}
                />
            </TouchableOpacity>
        </>
    )
}

