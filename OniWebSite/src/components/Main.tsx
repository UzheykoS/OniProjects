import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Nav } from "./Nav";
import { Tabs } from "../Helper"
import { Carousel } from 'react-responsive-carousel';

export class Main extends React.Component<any, any>{
    render() {
        return <div className="app">
            <Nav tab={Tabs.About} />

            <div className="main-body">
                <img src="./images/cake2_a.jpg" className="cake" />
                {/* <Carousel axis="horizontal"
                    showThumbs={false}
                    showArrows={false}
                    showStatus={false}
                    infiniteLoop={true}
                    dynamicHeight emulateTouch>
                    <div>
                        <img src="./images/cake1_a.jpg" className="cake" />
                    </div>
                    <div>
                        <img src="./images/cake2_a.jpg" className="cake" />
                    </div>
                    <div>
                        <img src="./images/cake3_a.jpg" className="cake" />
                    </div>
                </Carousel> */}
            </div>

            <div className="socials">
                <a target="_blank" href="https://www.facebook.com/">
                    <img className="social_network" src="images/facebook.png" />
                </a>
                <a target="_blank" href="https://www.instagram.com">
                    <img className="social_network" src="images/instagram.png" />
                </a>
                <a target="_blank" href="https://www.telegram.com">
                    <img className="social_network" src="images/twitter.png" />
                </a>
            </div>
        </div>;
    }
};