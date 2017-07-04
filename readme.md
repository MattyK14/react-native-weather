# react-native-weather: A dynamic weather component for React Native apps

#### Note: Forked & customzied for Weather Underground

react-native-weather provides a React Native `<WeatherWidget />` component that takes in props and generates a widget containing the current weather conditions & temperature.

In order to use this widget, you will need a DarkSky.net API key.  [Click here to sign up for a Weather Underground API key.](https://www.wunderground.com/signup?mode=api_signup "Weather Underground API Sign Up")

### Table of Contents

1. [Installation](https://github.com/MattyK14/react-native-weather#installation)

2. [Usage](https://github.com/MattyK14/react-native-weather#usage)

3. [Optional Props](https://github.com/MattyK14/react-native-weather#optional-props)

4. [Credits](https://github.com/MattyK14/react-native-weather#credits)

5. [Support!](https://github.com/MattyK14/react-native-weather#support)

## Installation

```
npm i --save react-native-weather
```

## Usage

To use the WeatherWidget, import the WeatherWidget from 'react-native-weather', placing curly braces around WeatherWidget in your import statement:

```javascript
...
import { WeatherWidget } from 'react-native-weather';
...
```
Then place the `<WeatherWidget />` component in your `render(){ return(); }` method, passing your DarkSky.net API key, your latitude (lat), and your longitude(lng) through it as props:

```javascript
...
render() {
  return(
    <WeatherWidget
      api={"your-api-key-here"}
      lat={"lat"}
      lng={"lng"}
      />
  );
}
```

`<WeatherWidget />` should have a parent view with a style prop of Flex: 1.

#### Note re: lat & lng
Northern latitudes and eastern longitudes are positive values, while southern latitudes and western longitudes are negative(-) values.

i.e.: If the location you are passing through the widget is in the northwestern hemisphere, you will pass it through as: `lat={"val"} lng={"-val"}`.

## Optional Props

`<WeatherWidget />` also accepts the optional prop `location={"location"}`, which will render a string in the left title area of the widget.

If you do not pass a location prop through WeatherWidget, the default text for the widget title area will read "Current Weather".


## Credits

react-native-weather was coded by [Nick West](https://www.nickwest.io "NickWest.io")

## Support!

Like this kind of thing? [Buy Nick a coffee via Patreon support!](https://www.patreon.com/nickwest)
