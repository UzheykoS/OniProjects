import * as React from 'react'
import { Link, IndexLink } from 'react-router';
import { Tabs } from "../Helper"
import { slide as Menu } from 'react-burger-menu'
import * as Media from 'react-media'

const activeStyle = {
    'font-family': 'Museo Sans Cyrl 500 !important',
    color: 'black'
}

interface INavProps {
    tab: any;
}

interface INavState {
    activeTab?: any;
}

export class Nav extends React.Component<INavProps, INavState>{
    constructor(props) {
        super(props);

        this.state = {
            activeTab: props.tab || Tabs.About
        }
    }

    onLinkClick = (tab: any) => {
        this.setState({
            activeTab: tab
        })
    }

    showSettings(event) {
        event.preventDefault();
    }

    render() {
        const { activeTab } = this.state;

        return <Media query={{ maxWidth: 800 }}>
            {matches => matches ? (
                <div className="nav-bar">
                    <img src="/images/Oni_w_black.png" className={activeTab == Tabs.About ? "logo" : "logo logo-small"} />
                    <Menu right
                        width={'70%'}
                        customBurgerIcon={<img src="/images/menu-button.png" />}
                        customCrossIcon={<img src="/images/close.png" />} >
                        <a id="home" className="menu-item" href="/">Home</a>
                        <a id="about" className="menu-item" href="/about">About</a>
                        <a id="contact" className="menu-item" href="/contact">Contact</a>
                        <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
                    </Menu>
                </div>
            ) : (
                    <div className="nav-bar">
                        <img src="/images/Oni_w_black.png" className={activeTab == Tabs.About ? "logo" : "logo logo-small"} />
                        <ul>
                            <li>
                                <IndexLink to="/"
                                    className={activeTab == Tabs.About ? "active" : ""}
                                    onClick={() => this.onLinkClick(Tabs.About)}>{Tabs.About}
                                </IndexLink>
                            </li>
                            <li>
                                <Link to="/cakes"
                                    className={activeTab == Tabs.Cakes ? "active" : ""}
                                    onClick={() => this.onLinkClick(Tabs.Cakes)}>{Tabs.Cakes}
                                </Link>
                            </li>
                            <li>
                                <Link to="/macaroons"
                                    className={activeTab == Tabs.Macarons ? "active" : ""}
                                    onClick={() => this.onLinkClick(Tabs.Macarons)}>{Tabs.Macarons}
                                </Link>
                            </li>
                            {/* <li>
                    <Link to="/stub/Мармелад"
                        className={activeTab == Tabs.Marmalade ? "active" : ""}
                        onClick={() => this.onLinkClick(Tabs.Marmalade)}>{Tabs.Marmalade}
                    </Link>
                </li> */}
                            <li>
                                <Link to="/stub/Корпоративным"
                                    className={activeTab == Tabs.Corporate ? "active" : ""}
                                    onClick={() => this.onLinkClick(Tabs.Corporate)}>{Tabs.Corporate}
                                </Link>
                            </li>
                            <li>
                                <Link to="/contacts"
                                    className={activeTab == Tabs.Contacts ? "active" : ""}
                                    onClick={() => this.onLinkClick(Tabs.Contacts)}>{Tabs.Contacts}
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
        </Media>;
    }
};