import React, { Component } from 'react';
import { NetInfo, Image, View, Text, ActivityIndicator, StyleSheet } from 'react-native';

class WeatherWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      icon: null,
      temp: '',
      locationName: 'Current \nWeather'
    }
  }

  componentDidMount() {
    if (this.props.location){
      this.setState({locationName: this.props.location})
    }
    console.log()
    return fetch(`https://api.wunderground.com/api/${this.props.api}/conditions/q/${this.props.lat},${this.props.lng}.json`).then((response) => response.json()).then((responseJson) => {
      var iconSplit = responseJson.current_observation.icon_url.split('http://');
      this.setState({ temp: responseJson.current_observation.temp_c + ' °C', icon: `https://${iconSplit[1]}`, isLoading: false });
    }).catch((error) => {
      console.error(error);
      this.setState({isLoading: false});
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.spinner}>
          <ActivityIndicator size={'small'}/>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={{ uri: `${this.state.icon}`}}/>
        <View>
          <Text style={styles.tempTextStyle}>{this.state.temp}</Text>
          <Text style={styles.title}>{this.state.locationName}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: -1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'relative',
    alignItems: 'center'
  },
  title:{
    marginTop: 5,
    color: 'black',
    fontWeight: '500',
    textAlign: 'right'
  },
  icon: {
    marginHorizontal: 10,
    height: 32,
    width: 32,
  },
  spinner: {
    flex: -1,
    marginTop: 12,
    marginBottom: 12
  },
  tempTextStyle: {
    fontWeight: 'bold',
    fontSize: 15
  }
});

export { WeatherWidget };
