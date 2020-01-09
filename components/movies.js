// import React from 'react';
import { Actions } from 'react-native-router-flux';
// import { StyleSheet, Text, View } from 'react-native';
// const GrayScreen = () => {
//   return(
//     <View style={styles.container}>
//       <Text style={styles.inner}
//       onPress={()=>Actions.RedScreen()}>Gray Screen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container:{
//     backgroundColor:"gray",
//     height:200
//   },
//   inner:{
//     color:'red'
//   }
// })
// export default GrayScreen;
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ToastAndroid,
  Avatar,
} from 'react-native';
import Constants from 'expo-constants';
import $ from 'jquery';
import { SearchBar } from 'react-native-elements';
// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true,
      value: 'star wars',
    };
  }

  componentDidMount() {
    // forQuery = 'avengers';
    this._FetchData();
  }
  _FetchData = () => {
    const URL =
      'https://api.themoviedb.org/3/search/movie?query=' +
      this.state.value +
      '&api_key=0197edfc04156a8c5e570c5eab4ab654';
    fetch(URL)
      .then(response => response.json())
      .then(response => {
        const results = response.results;
        this.setState({
          data: results,
          isLoading: false,
        });
      });
  };
  renderItem = ({ item }) => {
    const placeholder='https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';
    let poster_src = 'http://image.tmdb.org/t/p/w185/' + item.poster_path;
    poster_src= poster_src === "N/A"? placeholder:poster_src
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',

          flexDirection: 'column',
          flexWrap: 'wrap',
          alignContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <Card
          style={{ padding: 10, backgroundColor: '#fff', margin: 10 }}
          onPress={() => Actions.about({text:item.title, data:this.state.data})}>
          <Image
            source={{ uri: poster_src }}
            style={{
              width: 250,
              height: 250,
              boxShadow:
                '0 14px 18px 0 rgba(30, 30, 30, 0.2), 0 6px 20px 0 rgba(20, 20, 40, 0.19)',
            }}
            PlaceholderContent={<ActivityIndicator size="large" animating />}
          />
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontFamily: 'san sarif',
              fontSize: 24,
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
         
        </Card>
      </View>
    );
  };
  //return search item
  updateSearch = searchedItem => {
      this.setState({
        value: searchedItem,
      });
      this._FetchData();
  };
  render() {
    return this.state.isLoading ? (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="blue" animating />
      </View>
    ) : (
      <View style={styles.container}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={this.state.value}
          style={{
            backgroundColor:"red"
          }}
        />
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
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
