import {Text, View, Image, StyleSheet} from "react-native";
import {EthPrice} from "./SubInfo";
import {COLORS, SIZES, FONTS} from "../constants";

const DetailsBid = ({bid}) => {
    return (
        <View style={detailsBid.container}>
            <Image
                source={bid.image}
                resizeMode='contain'
                style={detailsBid.image}
            />
            <View>
                <Text style={detailsBid.owner}>
                    Bid placed by {bid.name}
                </Text>
                <Text style={{
                    fontFamily: FONTS.regular,
                    fontSize: SIZES.small - 2,
                    color: COLORS.secondary,
                    marginTop: 3
                }}>
                    {bid.date}
                </Text>
            </View>

            <EthPrice price={bid.price}/>
        </View>
    );
};

const detailsBid = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2
    },
    image: {
        width: 48,
        height: 48
    },
    owner: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.small,
        color: COLORS.primary
    }
})

export default DetailsBid;
