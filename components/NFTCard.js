import {View, Image, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {COLORS, SIZES, SHADOWS, assets} from "../constants";
import {CircleButton, RectButton} from "./Button";
import {EthPrice, NFTTitle, SubInfo} from "./SubInfo";

const NftCard = ({data}) => {
    const navigation = useNavigation()

    const handlePrice = () => {
        navigation.navigate('Details', {data})
    }

    return (
        <View style={styles.container}>
            <View style={styles.firstView}>
                <Image
                    source={data.image}
                    resizeMode='cover'
                    style={styles.firstImage}
                />
                <CircleButton imgUrl={assets.heart} right={10} top={10}/>
            </View>
            <SubInfo/>
            <View style={styles.innerView}>
                <NFTTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.large}
                    subTitleSize={SIZES.small}
                />
                <View style={styles.inInnerView}>
                    <EthPrice price={data.price}/>
                    <RectButton
                        minWidth={120}
                        fontSize={SIZES.font}
                        handlePress={handlePrice}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark
    },
    firstView: {
        width: '100%',
        height: 250
    },
    firstImage: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: SIZES.font,
        borderTopRightRadius: SIZES.font
    },
    innerView: {
        width: '100%',
        padding: SIZES.font
    },
    inInnerView: {
        marginTop: SIZES.font,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
})

export default NftCard;
