import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import StartScreen from './StartScreen';
import QuoteScreen from './QuoteScreen';

const { quotes } = require( './Quotes.json' );

export default class RelaxationStation extends Component {
  constructor (props) {
    super(props)

    this.state = {
      quoteIndex: 1
    }

    this._incrementQuoteIndex = this._incrementQuoteIndex.bind(this);
  }

  _incrementQuoteIndex () {
    let newIndex

    if ( this.state.quoteIndex + 1 === quotes.length ) {
      newIndex = 0;
    }
    else {
      newIndex = this.state.quoteIndex +1;
    }

    this.setState({
      quoteIndex: newIndex      
    })
  }

  render() {
    const quote = quotes[this.state.quoteIndex];

    return (
      <NavigationExperimental.Navigator initialRoute={{ name: 'StartScreen' }} renderScene={ ( route, navigator ) => { 
          switch ( route.name ) {
            case 'StartScreen':
              return <StartScreen onStartHandler={
                  () => navigator.push({ name: 'QuoteScreen' })
                } 
              />
            case 'QuoteScreen':
              return <QuoteScreen qId={ this.state.quoteIndex } qText={ quote.text} qSource={ quote.source } onQuoteButtonPress={ this._incrementQuoteIndex } />
          }
        }}
      />
    );
  }
}