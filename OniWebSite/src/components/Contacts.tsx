import * as React from 'react'
import { Nav } from "./Nav";
import { Tabs } from "../Helper"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// const googleMapURL = "https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyDH_aHRsVOr_CMITd6m0Vuo1X2qSXMicdY"

const GoogleMapsWrapper = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={17}
        defaultCenter={{ lat: 50.446102, lng: 30.425567 }}
        onClick={props.onMapClick}
    >
        <Marker
            title={'ONI'}
            label={'O'}
            position={{ lat: 50.446102, lng: 30.425567 }}
        />
    </GoogleMap>
));

export class Contacts extends React.Component<any, any>{
    render() {
        return <div className="contacts-container">
            <Nav tab={Tabs.Contacts} />
            <div className="contacts-header">
                <div className="row">
                    <div className="col-md-5">
                        <div className="contacts-photo">
                            <img src="./images/mac_large.png" />
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="header-main">О нас</div>
                        <div className="header-desc">Очень вкусные дессерты</div>
                        <div className="header-body">А тут много текста
                                Lorem ipsum dolor sit amet, congue gravida erat et nullam, quis habitant varius convallis pellentesque eros. Fringilla montes ut enim id pellentesque consectetuer, erat magna sed etiam a viverra ut, fringilla nec sit orci curabitur ut risus, tristique platea ultricies aliquam venenatis curabitur.

In scelerisque nisl sit neque lorem, id integer ut commodo nunc purus neque, vel in leo, pede eos ipsum, dui commodo metus. </div>
                    </div>
                </div>
            </div>
            <div className="contacts-body">
                <div className="contacts-body-text">
                    <div>А тут много текста
                                Lorem ipsum dolor sit amet, congue gravida erat et nullam, quis habitant varius convallis pellentesque eros. Fringilla montes ut enim id pellentesque consectetuer, erat magna sed etiam a viverra ut, fringilla nec sit orci curabitur ut risus, tristique platea ultricies aliquam venenatis curabitur.

In scelerisque nisl sit neque lorem, id integer ut commodo nunc purus neque, vel in leo, pede eos ipsum, dui commodo metus. </div>
                </div>
                <div className="contacts-body-map">
                    <GoogleMapsWrapper
                        containerElement={
                            <div style={{ height: `100%` }} />
                        }
                        mapElement={
                            <div style={{ height: `100%` }} />
                        }
                        onMapLoad={() => { }}
                        onMapClick={() => { }}
                        onMarkerRightClick={() => { }}
                    />
                </div>
            </div>
            <div className="contacts-footer">
                <img src="/images/Oni_logo.png" />
            </div>
        </div>;
    }
};