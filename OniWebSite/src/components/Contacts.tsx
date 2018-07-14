import * as React from 'react'
import { Nav } from "./Nav";
import { Tabs } from "../Helper"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { Busy } from './Busy';

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

interface IContactsState {
    loading?: any;
    height?: string;
}

export class Contacts extends React.Component<any, IContactsState>{
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            height: '0px'
        }
    }

    onImageLoaded = () => {
        this.setState({
            loading: false,
            height: 'auto'
        });
    }

    render() {
        const { loading, height } = this.state;

        return <div className="contacts-container">
            <Nav tab={Tabs.Contacts} />
            <div className="contacts-header">
                <div className="row">
                    <div className="col-md-6">
                        <div className="contacts-photo" style={{ height: height }} >
                            <img src="./images/contacts_header.jpg" onLoad={this.onImageLoaded} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="header-main">Оплата и доставка</div>
                        {/* <div className="header-desc"></div> */}
                        <div className="header-body">
                        Наш кондитерский цех находится в г. Киев по адресу бульвар Вацлава Гавела, 9А (бывший бульвар Ивана Лепсе). Вы можете забрать свой заказ самостоятельно или заказать доставку курьером. Стоимость доставки по Киеву – 60 грн. Доставка в другие города Украины обсуждается индивидуально.
                        <br />
                        <br />
                        При условии наличия желаемых изделий возможна доставка в день заказа. Все детали Вы можете уточнить по тел.+380975985860 (Viber/Telegram) или написав нам на почту info@oni.ua.
                        <br />
                        <br />
                        Оплата осуществляется наличными при получении или на карту ПриватБанк. Предоплата необходима только для индивидуальных и корпоративных заказов.
                        </div>
                    </div>
                </div>
            </div>
            <div className="contacts-body">
                {/* <div className="contacts-body-text">
                    <div>               
                    </div>
                </div> */}
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
            <Busy loading={loading} />
        </div>;
    }
};