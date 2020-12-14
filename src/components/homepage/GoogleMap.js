import React from "react";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

let lat = 26.557743543050716;
let long = -81.90906157831229;

const MyMapComponent = compose(

    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyAAJQ-3KmHfoUbuLYmUgzNQ-mZn6S1j7mI&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap defaultZoom={15} defaultCenter={{ lat: lat, lng: long }}>
        <Marker position={{ lat: lat, lng: long }} />
    </GoogleMap>
));
export default MyMapComponent
