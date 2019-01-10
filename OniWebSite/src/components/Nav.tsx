import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Tabs } from "../Helper"
import { slide as Menu } from 'react-burger-menu'
import * as Media from 'react-media';

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
            activeTab: props.tab || Tabs.Main
        }
    }

    onLinkClick = (tab: any) => {
        this.setState({
            activeTab: tab
        })
    }

    render() {
        const { activeTab } = this.state;

        return <Media query={{ maxWidth: 800 }}>
            {matches => matches ? (
                <div className="nav-bar">
                    <img src="/images/icons/Oni_w_black.png" className={activeTab == Tabs.Main ? "logo" : "logo logo-small"} />
                    <Menu right
                        width={'100%'}
                        customBurgerIcon={<img src="/images/icons/menu-button.png" />}
                        customCrossIcon={<img src="/images/icons/close.png" />} >
                        {activeTab !== Tabs.Main ?
                            <span className="menu-item">
                                <Link to="/"
                                    className={activeTab == Tabs.About ? "active" : ""}
                                    onClick={() => this.onLinkClick(Tabs.About)}>
                                    ГЛАВНАЯ
                            </Link>
                            </span> :
                            null}
                        <span className="menu-item">
                            <Link to="/about"
                                className={activeTab == Tabs.About ? "active" : ""}
                                onClick={() => this.onLinkClick(Tabs.About)}>
                                О НАС
                            </Link>
                        </span>
                        <span className="menu-item">
                            <Link to="/cakes"
                                className={activeTab == Tabs.Cakes ? "active" : ""}
                                onClick={() => this.onLinkClick(Tabs.Cakes)}>
                                ТОРТЫ
                            </Link>
                        </span>
                        <span className="menu-item">
                            <Link to="/macaroons"
                                className={activeTab == Tabs.Macarons ? "active" : ""}
                                onClick={() => this.onLinkClick(Tabs.Macarons)}>
                                МАКАРОН
                            </Link>
                        </span>
                        <span className="menu-item">
                            <Link to="/stub/Корпоративным"
                                className={activeTab == Tabs.Corporate ? "active" : ""}
                                onClick={() => this.onLinkClick(Tabs.Corporate)}>
                                КОРПОРАТИВНЫМ КЛИЕНТАМ
                            </Link>
                        </span>
                        <span className="menu-item">
                            <Link to="/contacts"
                                className={activeTab == Tabs.Contacts ? "active" : ""}
                                onClick={() => this.onLinkClick(Tabs.Contacts)}>
                                ОПЛАТА И ДОСТАВКА
                            </Link>
                        </span>
                        <div className="bm-socials">
                            <a target="_blank" href="https://www.facebook.com/">
                                <img className="social_network" src="images/icons/facebook.png" />
                            </a>
                            <a target="_blank" href="https://www.instagram.com">
                                <img className="social_network" src="images/icons/instagram.png" />
                            </a>
                            <a target="_blank" href="https://www.telegram.com">
                                <img className="social_network" src="images/icons/twitter.png" />
                            </a>
                        </div>
                    </Menu>
                </div>
            ) : (
                    <div className="nav-bar">
                        <img src="/images/icons/Oni_w_black.png" className={activeTab == Tabs.Main ? "logo" : "logo logo-small"} />
                        <ul>
                            {activeTab !== Tabs.Main ?
                                <li>
                                    <Link to="/"
                                        className={activeTab == Tabs.Main ? "active" : ""}
                                        onClick={() => this.onLinkClick(Tabs.Main)}>{Tabs.Main}
                                    </Link>
                                </li> :
                                null}
                            <li>
                                <Link to="/about"
                                    className={activeTab == Tabs.About ? "active" : ""}
                                    onClick={() => this.onLinkClick(Tabs.About)}>{Tabs.About}
                                </Link>
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