import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
} from 'react-native'

const about = props => {
    const backdrop_path_url='http://image.tmdb.org/t/p/w185/'
    return (
        <View style={styles.container}>
            {
                (props.data = props.data
                    .filter((item) => {
                        return item.title == props.title
                    })
                    .map(({
                        id,
                        popularity,
                        title,
                        poster_path,
                        backdrop_path,
                        release_date,
                        overview,
                        vote_average,
                        vote_count,
                        original_language,
                        original_title,
                    }) => {
                        const poster_src = backdrop_path_url + backdrop_path;
                        return (
                            <View>
                                <View style={{ width: '100%' }}>
                                    <Image
                                        source={{ uri: poster_src }}
                                        style={{
                                            width: null,
                                            height: 250,
                                            backgroundColor: 'black',
                                        }}
                                        PlaceholderContent={
                                            <ActivityIndicator size="large" animating />
                                        }
                                    />
                                </View>
                                <View style={{ flex: 1, backgroundColor: "#fff", flexDirection: 'column', }}>
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                            backgroundColor: 'black',
                                            opacity: 0.5,
                                            top: -100,
                                            boxShadow:
                                                '0 -14px -18px 0 rgba(100, 100, 255, 0.2), 0 -6px -20px 0 rgba(200,                           200, 40, 0.19)',
                                        }}>
                                        <Image
                                            source={{
                                                uri: 'http://image.tmdb.org/t/p/w185/' + poster_path,
                                            }}
                                            style={{
                                                width: 100,
                                                height: 100,
                                                borderRadius: 20,
                                                borderWidth: 1,
                                            }}
                                            PlaceholderContent={
                                                <ActivityIndicator size="large" animating />
                                            }
                                        />
                                        <View style={{ flex: 1, flexDirection: 'column' }}>
                                            <Text style={styles.title}>{title}</Text>
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <Text style={styles.inner}>release date:- </Text>
                                                <Text style={styles.inner}>{release_date}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View
                                        style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                                        <View style={styles.property}>
                                            <Text style={styles.textStyle}>{vote_count}</Text>
                                            <Text style={styles.innerTextStyle}>Vote</Text>
                                        </View>
                                        <View style={styles.property}>
                                            <Text style={styles.textStyle}>{popularity}</Text>
                                            <Text style={styles.innerTextStyle}>popularity</Text>
                                        </View>
                                        <View style={styles.property}>
                                            <Text style={styles.textStyle}>
                                                {original_language == 'en'
                                                    ? 'English'
                                                    : original_language}
                                            </Text>
                                            <Text style={styles.innerTextStyle}>Language</Text>
                                        </View>
                                        <View style={styles.property}>
                                            <Text style={styles.textStyle}>{original_title}</Text>
                                            <Text style={styles.innerTextStyle}>Original Title</Text>
                                        </View>
                                        <View style={{
                                            top: -60,
                                            margin: 10
                                        }}>
                                            <Text>{overview}</Text>
                                        </View>
                                    </View>

                                </View>
                            </View>
                        );
                    }))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
    },
    property: {
        marginLeft: 10,
        padding: 3,
        borderRightColor: 'blue',
        top: -70,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    inner: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textStyle: {
        fontStyle: 'italic',
        color: 'black',
    },
    innerTextStyle: {
        fontStyle: 'italic',
        color: 'black',
        fontFamily: 'serif',
        fontWeight: 'bold',
    },
});
export default about;
