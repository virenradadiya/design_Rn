import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { View, Image } from 'react-native'
import ProfileScreen from '../screens/ProfileScreen';
import OtherScreen from '../screens/OtherScreen';
import styles from '../helper/style';

const Tab = createBottomTabNavigator();


export default function BottomTab() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: styles.bottomTabStyle
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (<View style={focused ? styles.activeTabStyle : null}>
                        <Image
                            style={[styles.coinLogo, focused ? { tintColor: 'white' } : null]}
                            source={require('../assets/images/icon-1.png')}
                        />
                    </View>)
                }}
            />
            <Tab.Screen name="OtherOne" component={OtherScreen}
                options={{
                    tabBarIcon: ({ focused }) => (<View style={focused ? styles.activeTabStyle : null}>
                        {console.log(focused)}
                        <Image
                            style={[styles.coinLogo, focused ? { tintColor: 'white' } : null]}
                            source={require('../assets/images/icon-2.png')}
                        />
                    </View>)
                }}
            />
            <Tab.Screen name="OtherTwo" component={OtherScreen}
                options={{
                    tabBarIcon: ({ focused }) => (<View style={focused ? styles.activeTabStyle : null}>
                        {console.log(focused)}
                        <Image
                            style={[styles.coinLogo, focused ? { tintColor: 'white' } : null]}
                            source={require('../assets/images/icon-3.png')}
                        />
                    </View>)
                }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (<View style={focused ? styles.activeTabStyle : null}>
                        {console.log(focused)}
                        <Image
                            style={[styles.coinLogo, focused ? { tintColor: 'white' } : null]}
                            source={require('../assets/images/icon-4.png')}
                        />
                    </View>)
                }}
            />
        </Tab.Navigator>
    )
}
