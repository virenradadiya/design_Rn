import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet } from "react-native";
import colors from './colors';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white
    },
    loginPagelogo: {
        height: wp('40%'),
        width: wp('32%'),
        position: 'absolute',
        top: wp('18%')
    },
    loginBgImage: {
        width: wp('160%'),
        height: wp('70%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: wp('10%')
    },
    textHeading: {
        fontSize: 38,
        fontWeight: 'bold'
    },
    headingContainer: {
        flexDirection: 'row',
        marginTop: wp('22%'),
        alignItems: 'flex-end',
    },
    coinLogo: {
        height: wp('6%'),
        width: wp('6%'),
        margin: wp('2%')
    },
    subHeading: {
        width: wp('50%'),
        fontSize: 20,
    },
    wlcmText: {
        fontSize: 22,
        color: colors.darkGrey,
        fontWeight: 'bold',
        marginVertical: hp('3%'),
    },
    bottomContainer: {
        flexDirection: 'row',
        width: wp('65%'),
        justifyContent: 'space-between'
    },
    bottomViewText: {
        fontSize: 14,
        color: colors.lightGrey
    },
    bottomTabStyle: {
        backgroundColor: colors.white,
        borderTopRightRadius: wp('12%'),
        paddingVertical: wp('5%')
    },
    activeTabStyle: {
        backgroundColor: colors.activeTabColor,
        borderRadius: wp('6%'),
        width: wp('14%'),
        height: wp('8%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerMainContainer: {
        height: hp('12%'),
        paddingTop: hp('5%'),
        backgroundColor: colors.white,
    },
    headingSubView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    mainProfileContainer: {
        borderTopLeftRadius: wp('10%'),
        backgroundColor: colors.profileBGColor,
        flex: 1
    },
    profileView: {
        paddingHorizontal: wp('6%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: hp('2%'),
    },
    userInfoView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePic: {
        height: wp('14%'),
        width: wp('14%')
    },
    sapraterLine: {
        borderWidth: 1,
        borderColor: colors.sapraterLine,
        width: wp('90%'),
        alignSelf: 'center',
        marginVertical: hp('1%')
    },
    iconWithBg: {
        backgroundColor: colors.activeTabColor,
        padding: wp('0.1%'),
        borderRadius: wp('6%')
    },
    shortText: {
        fontSize: 16,
        marginHorizontal: wp('2%'),
    },
    sectionView: {
        marginHorizontal: wp('8%'),
        marginVertical: hp('2%'),
        width: wp('24%'),
        borderRadius: wp('3%'),
        backgroundColor: colors.primaryColor,
    },
    sectionHeadingText: {
        textAlign: 'center',
        padding: wp('1%'),
        fontSize: 16
    },
    headingSubViewMainSceen: {
        marginHorizontal: wp('12%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    mainScreenHeader: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    alertBtn: {
        backgroundColor: 'black',
        width: wp('14%'),
        height: wp('14%'),
        position: 'absolute',
        bottom: wp('8%'),
        right: wp('8%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: wp('7%')
    },
    tabMenuStyle: {
        marginVertical: hp('2.5%'),
    },
    topMenuBarView: {
        marginHorizontal: wp('2.5%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    topMenuBarText: {
        fontSize: 16,
    },
    subTopMenuBarView: {
        padding: wp('1%'),
        paddingHorizontal: wp('1.5%'),
        borderRadius: wp(4),
        alignItems: 'center'
    },
    listView: {
        backgroundColor: colors.white,
    },
    listMainView: {
        justifyContent: 'space-between',
        paddingHorizontal: wp('8%'),
        paddingVertical: wp('4%'),
    },
    itemTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    }

});

export default styles;

