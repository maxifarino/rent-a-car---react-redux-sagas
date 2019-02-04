import React, { Component } from 'react';

const googleMapsContainerStyle = {
    border: '1px solid #ccc; width: 100%'
}

class GoogleMap extends Component {
    state = {  }
    render() { 
        return ( 
            <iframe style={googleMapsContainerStyle} src={this.props.config.link} height={this.props.config.height} frameBorder="0"  allowFullScreen ></iframe>
         );
    }

}
 
export default GoogleMap;