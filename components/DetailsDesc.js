import {StyleSheet, Text, View} from "react-native";
import {useState} from "react";

import {NFTTitle, EthPrice} from "./SubInfo";
import {COLORS, SIZES, FONTS} from "../constants";

const DetailsDesc = ({data}) => {
    // ** Variables
    const [readMore, setReadMore] = useState(false)

    const summarizedDetail = () => {
        return readMore ? `${data.description} (show less)` : `${data.description.slice(0, 100)}... (see more)`
    }
    return (
        <>
            <View style={description.container1}>
                <NFTTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.extraLarge}
                    subTitleSize={SIZES.font}
                />
                <EthPrice price={data.price}/>
            </View>
            <View style={description.container2}>
                <Text style={description.container2Text}>
                    Description
                </Text>
                <View style={description.container2View}>
                    <Text style={description.container2ViewText} onPress={() => {
                        setReadMore(!readMore)
                    }}>
                        {summarizedDetail()}
                    </Text>
                </View>
            </View>
        </>
    );
};

const description = StyleSheet.create({
    container1: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    container2: {
        marginVertical: SIZES.extraLarge * 1.5
    },
    container2Text: {
        fontSize: SIZES.font,
        fontFamily: FONTS.semiBold,
        color: COLORS.primary
    },
    container2View: {
        marginTop: SIZES.base
    },
    container2ViewText: {
        fontSize: SIZES.small,
        fontFamily: FONTS.regular,
        color: COLORS.secondary,
        lineHeight: SIZES.large
    }
})

export default DetailsDesc;
