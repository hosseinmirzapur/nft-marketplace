import {StyleSheet, View, TouchableOpacity, Image, Text} from "react-native";
import {COLORS, FONTS, SHADOWS, SIZES} from "../constants";

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.white,
                position: 'absolute',
                borderRadius: SIZES.extraLarge,
                alignItems: "center",
                justifyContent: "center",
                ...SHADOWS.light,
                ...props
            }}
            onPress={handlePress}
        >
            <Image source={imgUrl} resizeMode='contain' style={circleButtonStyles.image}/>
        </TouchableOpacity>
    );
};
const circleButtonStyles = StyleSheet.create({
    image: {
        width: 24,
        height: 24
    }
})

export const RectButton = ({minWidth, handlePress, ...props}) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.extraLarge,
                minWidth: minWidth,
                padding: SIZES.small,
                ...props,
            }}
            onPress={handlePress}
        >
            <Text style={rectButton.text}>
                Place a bid
            </Text>
        </TouchableOpacity>
    )
}
const rectButton = StyleSheet.create({
    text: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.font,
        color: COLORS.white,
        textAlign: "center"
    }
})


const rectButtonStyles = StyleSheet.create({})
