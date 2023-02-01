import {Text, View, SafeAreaView, FlatList, StyleSheet} from 'react-native'
import {COLORS, NFTData} from "../constants";
import {NFTCard, HomeHeader, FocusedStatusBar} from '../components'
import {useState} from "react";

const Home = () => {
    const [nftData, setNftData] = useState([])

    const handleSearch = (searchValue) => {
        let results = []
        if (searchValue !== '') {
            NFTData.map(item => {
                if (item.name.includes(searchValue)) {
                    results.push(item)
                }
            })
            setNftData(results)
        } else {
            setNftData([])
        }
    }

    return (
        <SafeAreaView style={styles.safeAreaStyle}>
            <FocusedStatusBar background={COLORS.primary}/>
            <View style={styles.viewStyle}>
                <View style={styles.innerViewStyle}>
                    <FlatList
                        data={nftData.length !== 0 ? nftData : NFTData}
                        ListEmptyComponent={() => (
                            <Text style={{
                                marginTop: 30
                            }}>No NFT Found!</Text>
                        )}
                        renderItem={({item}) => <NFTCard data={item}/>}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={<HomeHeader onSearch={handleSearch}/>}
                    />
                </View>
                <View style={styles.secondViewStyle}>
                    <View style={styles.secInnerFirst}/>
                    <View style={styles.secInnerSecond}/>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaStyle: {
        flex: 1
    },
    viewStyle: {
        flex: 1
    },
    innerViewStyle: {
        zIndex: 0
    },
    secondViewStyle: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: -1
    },
    secInnerFirst: {
        height: 300,
        backgroundColor: COLORS.primary
    },
    secInnerSecond: {
        flex: 1,
        backgroundColor: COLORS.white
    }
})

export default Home;
