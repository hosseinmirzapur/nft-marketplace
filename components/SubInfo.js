import {Image, StyleSheet, Text, View} from "react-native";
import {SIZES, COLORS, SHADOWS, FONTS, assets} from "../constants";

export const NFTTitle = ({subTitle, subTitleSize, title, titleSize}) => {
    return (
        <View>
            <Text style={{
                fontFamily: FONTS.semiBold,
                fontSize: titleSize,
                color: COLORS.primary
            }}>
                {title}
            </Text>
            <Text style={{
                fontFamily: FONTS.regular,
                fontSize: subTitleSize,
                color: COLORS.primary
            }}>
                {subTitle}
            </Text>
        </View>
    );
};

export const EthPrice = ({price}) => {
    return (
        <View style={ethPrice.container}>
            <Image
                source={assets.eth}
                resizeMode="contain"
                style={ethPrice.image}
            />
            <Text style={ethPrice.price}>{price}</Text>
        </View>
    );
};
const ethPrice = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: 20,
        height: 20,
        marginRight: 2
    },
    price: {
        fontFamily: FONTS.medium,
        fontSize: SIZES.font,
        color: COLORS.primary
    }
})

export const ImageCmp = ({imgUrl, index}) => {
    return (
        <Image
            resizeMode='contain'
            source={imgUrl}
            style={{
                width: 48,
                height: 48,
                marginLeft: index === 0 ? 0 : -SIZES.font
            }}
        />
    );
};


export const People = () => {
    return (
        <View style={people.container}>
            {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
                <ImageCmp
                    imgUrl={imgUrl}
                    index={index}
                    key={`People-${index}`}
                />
            ))}
        </View>
    );
};

const people = StyleSheet.create({
    container: {
        flexDirection: "row"
    }
})

export const EndDate = () => {
    return (
        <View style={endDate.container}>
            <Text style={endDate.firstText}>
                Ending in
            </Text>
            <Text style={endDate.secondText}>
                12h 30m
            </Text>
        </View>
    );
};

const endDate = StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%'
    },
    firstText: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.small,
        color: COLORS.primary
    },
    secondText: {
        fontFamily: FONTS.regular,
        fontSize: SIZES.medium,
        color: COLORS.primary
    },

})

export const SubInfo = () => {
    return (
        <View style={subInfo.container}>
            <People/>
            <EndDate/>
        </View>
    );
};

const subInfo = StyleSheet.create({
    container: {
        width: '100%',
        padding: SIZES.font,
        marginTop: -SIZES.extraLarge - 25,
        flexDirection: "row",
        justifyContent: "space-between"
    }
})
