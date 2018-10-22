/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import MainContainer from './components/MainContainer';

type Props = {
  isUp: boolean,
  lastUpTime: Date
};

export default class App extends Component<Props> {
  constructor ( props ) {
    super ( props )
    this.state = {
      selectedService: 'web',
      services: [
        { key: 'web', isUp: true, lastUpTime: null },
        { key: 'db', isUp: false, lastUpTime: new Date(new Date()).getTime( ) -5 * 60 *1000 },
        { key: 'mail', isUp: true, lastUpTime: null },
      ]
    }
    this._switchService = this._switchService.bind( this );
    this._fetchServiceStatus = this._fetchServiceStatus.bind( this );
  }

  componentDidMount ( ) {
    setInterval ( this._fetchServiceStatus, 5000 )
  }

  _fetchServiceStatus ( ) {
    fetch( 'http://10.10.2.148:8080/status' )
    .then( response => response.json( ) )
    .then( data => {
      const newState = this.state.services.map( s => (
         Object.assign( s, {
           isUp: data[s.key].status === 'up',
           lastUpTime: new Date(data[s.key].lastUpTime)
         })
        ))

      this.setState({ services: newState })

    })
    .catch(function(error) {
      console.log(error)
    });
  }

  _switchService ( nextService ) {
    this.setState( { selectedService: nextService } )
  }

  render( ) {
    return (
      <MainContainer
        selectedService={ this.state.selectedService }
        services={ this.state.services }
        onServiceChange={ this._switchService }
      />
    );
  }
}