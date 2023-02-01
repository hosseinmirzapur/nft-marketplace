import {View, Text, Image, TextInput, StyleSheet} from "react-native";

import {COLORS, SIZES, assets, FONTS} from '../constants/'

const HomeHeader = ({onSearch}) => {

    return (
        <View style={header.container}>
            <View style={header.innerView}>
                <Image
                    source={assets.logo}
                    style={header.logo}
                    resizeMode='contain'
                />

                <View style={header.inInnerView}>
                    <Image
                        source={assets.person01}
                        resizeMode='contain'
                        style={header.profileImage}
                    />
                    <Image
                        source={assets.badge}
                        resizeMode='contain'
                        style={header.badge}
                    />
                </View>
            </View>
            <View style={header.secondInnerView}>
                <Text style={header.secondInnerText}>
                    Hey there Hossein 👋
                </Text>
                <Text style={header.secondInnerSecondText}>
                    Let's find a masterpiece
                </Text>
            </View>

            <View style={header.thirdInnerView}>
                <View style={header.searchContainer}>
                    <Image
                        source={assets.search}
                        resizeMode={'contain'}
                        style={header.thirdInnerImage}
                    />
                    <TextInput
                        placeholder={'Search NFTs'}
                        style={header.searchInput}
                        onChangeText={onSearch}
                    />
                </View>
            </View>
        </View>
    );
};
const header = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        padding: SIZES.font
    },
    innerView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    secondInnerView: {
        marginVertical: SIZES.font
    },
    secondInnerText: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.white
    },
    secondInnerSecondText: {
        fontFamily: FONTS.bold,
        fontSize: SIZES.large,
        color: COLORS.white,
        marginTop: SIZES.base / 2
    },
    thirdInnerView: {
        marginTop: SIZES.font
    },
    thirdInnerImage: {
        width: 20,
        height: 20,
        marginRight: SIZES.base
    },
    logo: {
        width: 50,
        height: 50,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    },
    inInnerView: {
        width: 50,
        height: 50
    },
    profileImage: {
        width: '100%',
        height: '100%'
    },
    badge: {
        position: "absolute",
        width: 25,
        height: 25,
        right: 0,
        bottom: 0
    },
    searchContainer: {
        width: '100%',
        borderRadius: SIZES.font,
        backgroundColor: COLORS.gray,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.small - 2
    },
    searchInput: {
        flex: 1
    }
})

export default HomeHeader;
