import {View, Text, SafeAreaView, Image, StatusBar, FlatList, StyleSheet} from "react-native";
import {COLORS, SIZES, SHADOWS, FONTS, assets} from '../constants'
import {CircleButton, RectButton, FocusedStatusBar, DetailsDesc, DetailsBid, SubInfo} from "../components";

const DetailsHeader = ({data, navigation}) => (
    <View style={detailsHeader.container}>
        <Image
            source={data.image}
            resizeMode='cover'
            style={detailsHeader.image}
        />
        <CircleButton
            imgUrl={assets.left}
            handlePress={() => navigation.goBack()}
            left={15}
            top={StatusBar.currentHeight + 10}
        />
        <CircleButton
            imgUrl={assets.heart}
            right={15}
            top={StatusBar.currentHeight + 10}
        />
    </View>
)

const detailsHeader = StyleSheet.create({
    container: {
        width: '100%',
        height: 373
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

const Details = ({route, navigation}) => {
    const {data} = route.params
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <FocusedStatusBar
                barStyle='dark-content'
                backgroundColor='transparent'
                transLucent
            />
            <View style={details.bidButtonContainer}>
                <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark}/>
            </View>
            <FlatList
                data={data.bids}
                renderItem={({item}) => <DetailsBid bid={item}/>}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: SIZES.extraLarge * 3}}
                ListHeaderComponent={() => (
                    <>
                        <DetailsHeader navigation={navigation} data={data}/>
                        <SubInfo/>
                        <View style={{padding: SIZES.font}}>
                            <DetailsDesc data={data}/>

                            {data.bids.length > 0 ? (
                                <Text style={{
                                    fontSize: SIZES.font,
                                    fontFamily: FONTS.semiBold,
                                    color: COLORS.primary
                                }}>
                                    Current Bids:
                                </Text>
                            ) : (
                                <Text>
                                    No bids found
                                </Text>
                            )}
                        </View>
                    </>
                )}
            />
        </SafeAreaView>
    );
};

const details = StyleSheet.create({
    bidButtonContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.5)",
        zIndex: 1
    }
})

export default Details;
