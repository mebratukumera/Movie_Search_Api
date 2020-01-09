import React from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  Avatar,
} from 'react-native';
const BlackScreen = props => {
  return (
    <View style={styles.container}>
      {
        (props.data = props.data
          .filter(function(item) {
            return item.title == props.text;
          })
          .map(function({
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
          }) {
            const poster_src =
              'http://image.tmdb.org/t/p/w185/' + backdrop_path;
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
                <View
                  style={{
                    flex: 1,
                    backgroundColor: '#fff',
                    flexDirection: 'column',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      backgroundColor: 'black12',
                      opacity: 0.9,
                      top: -5,
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
                    style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginTop:10 }}>
                    <View style={styles.property}>
                     <Text style={styles.innerTextStyle}>Vote</Text>
                      <Text style={styles.textStyle}>{vote_count}</Text>
                     
                    </View>
                    <View style={styles.property}>
                    <Text style={styles.innerTextStyle}>popularity</Text>
                      <Text style={styles.textStyle}>{popularity}</Text>
                      
                    </View>
                    <View style={styles.property}>
                    <Text style={styles.innerTextStyle}>Language</Text>
                      <Text style={styles.textStyle}>
                        {original_language == 'en'
                          ? 'English'
                          : original_language}
                      </Text>
                      
                    </View>
                    <View style={styles.property}>
                      
                      <Text style={styles.innerTextStyle}>Original Title</Text>
                      <Text style={styles.textStyle}>{original_title}</Text>
                      
                   
                    </View>
                    <Text style={styles.overview}>About</Text>
                   <Text >{overview}</Text>
                  </View>
                </View>
              </View>
            );
          }))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
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
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  },
  inner: {
    color: 'black',
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
  overview:{
   alignItems:'left',
   color:'blue',
   fontSize:20,
   fontStyle:"italic",
   textDecorationLine:'underline'
  }
});
export default BlackScreen;
