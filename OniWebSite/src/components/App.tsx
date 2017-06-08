import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Nav } from "./Nav";

export class App extends React.Component<any, any>{
    render() {
        return <div className="app">
            <div className="central-panel">
                <span className="logo"></span>
                <span className="message">
                    <div>Welcome to ONI!</div>
                    <div>На данный момент сайт находится на стадии разработки.</div>
                    <div>Все актуальные новости Вы можете найти на наших</div>
                    <div>страницах в социальных сетях. </div>
                    <div>Follow us!</div>
                    <span className="phone">+ 38 (096) 249 04 30</span>
                    <div>
                        <a target="_blank" href="https://www.facebook.com/">
                            <img className="social_network" src="images/facebook.png" />
                        </a>
                        <a target="_blank" href="https://www.instagram.com">
                            <img className="social_network" src="images/instagram.png" />
                        </a>
                        <a target="_blank"href="https://www.telegram.com">
                            <img className="social_network" src="images/telegram.png" />
                        </a>
                    </div>
                </span>
            </div>
            <Nav />
        </div>;
    }
};