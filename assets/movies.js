import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, ActionSheetIOS, Image, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements'
import $ from 'jquery'; //for ajax all
import { Actions } from 'react-native-router-flux';
export default class movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            initialValue: 'star wars',
        };
    }
    //is lifecycle called while the application start
    componentDidMount() {
        this._fetchData();
    }
    //connect with api and fetch data from API
    _fetchData = () => {
        const URL =
            'https://api.themoviedb.org/3/search/movie?query=' +
            this.state.initialValue +
            '&api_key=0197edfc04156a8c5e570c5eab4ab654';
        fetch(URL)
            .then((response) => response.json())
            .then((responseJson) => {
                const results = responseJson.results;
                this.setState({
                    isLoading: false,
                    data: results
                })
            })
    }
    _renderItem = ({ item }) => {
        const poster_src = 'http://image.tmdb.org/t/p/w185/' + item.poster_path;
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#fff'
                }}>
                <Card
                    style={{ padding: 10, backgroundColor: "#fff", margin: '5', }}
                    onPress={() => Actions.about({ title: item.title, data: this.state.data })}
                >
                    <Image
                        source={{
                            uri: poster_src
                        }}
                        style={{
                            width: 250,
                            height: 250,
                            boxShadow: '0 14px 18px 0 rgba(30, 30, 30, 0.2), 0 6px 20px 0 rgba(20, 20, 40, 0.19)'
                        }}
                        placeholderContent={
                            <ActivityIndicator size="large" animating />
                        }
                    />
                    <Text style={{
                        color: 'black',
                        fontWeight: 'bold',
                        fontFamily: 'san sarif',
                        fontSize: 24
                    }}>
                        {item.title}
                    </Text>
                    <View style={{ flex: 1, flexDirection: 'row', padding: 10 }}>
                        <View
                            style={{
                                borderRightWidth: 1,
                                borderRightColor: 'blue',
                                paddingRight: 20,
                                borderBottomRightRadius: 20,
                            }}>
                            <Text style={styles.textStyle}>{item.release_date}</Text>
                            <Text style={styles.innerTextStyle}>release</Text>
                        </View>
                        <View
                            style={{
                                borderRightWidth: 1,
                                borderLeftWidth: 1,
                                borderRightColor: 'blue',
                                paddingRight: 20,
                                paddingLeft: 20,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 20,
                            }}>
                            <Text style={styles.textStyle}>{item.popularity}</Text>
                            <Text style={styles.innerTextStyle}>Popular</Text>
                        </View>
                        <View
                            style={{
                                paddingLeft: 20,
                                borderLeftWidth: 1,
                                borderRightColor: 'blue',
                                paddingRight: 20,
                                borderBottomRightRadius: 20,
                                borderBottomLeftRadius: 20,
                            }}>
                            <Text style={styles.textStyle}>{item.vote_count}</Text>
                            <Text style={styles.innerTextStyle}>Vote</Text>
                        </View>
                    </View>
                    <Text style={{ fontStyle: 'italic', color: 'black' }}>
                        {item.overview}
                    </Text>
                </Card>
            </View>
        )
    }
    //handle change item while user type on search bar
    _changeHandler = inputValue => {
        this.setState({
            initialValue: inputValue
        });
        this._fetchData();
    }

    render() {
        const { isLoading, data, initialValue } = this.state
        return isLoading ? (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size="large" animating />
            </View>
        ) : (
                <View style={styles.container}>
                    <SearchBar
                        placeholder="Type here..."
                        onChangeText={this._changeHandler}
                        value={initialValue}
                        style={{
                            borderRadius: 35
                        }} />
                    <FlatList
                        data={data}
                        renderItem={this._renderItem}
                    />
                </View>
            )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    textStyle: {
        fontStyle: 'italic',
        color: 'black'
    },
    innerTextStyle: {
        fontStyle: 'italic',
        color: 'black',
        fontFamilysan: 'san serif',
        fontWeight: 'bold'
    }
})

