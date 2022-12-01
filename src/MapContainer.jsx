import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class MapContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={2}
          style={{ width: "100%", height: "100%" }}
          initialCenter={{ lat: 26.3351, lng: 17.2283 }}
        >
          {this.props.post.map((state, index) => (
            <Marker
              key={index}
              id={index}
              position={{
                lat: state.address.geo.lat,
                lng: state.address.geo.lng,
              }}
            />
          ))}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
})(MapContainer);
