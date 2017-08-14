import * as React from 'react'
import { Link, IndexLink } from 'react-router';
import { Tabs } from "../Helper"

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

    render() {
        const { activeTab } = this.state;

        return <div className="nav-bar">
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
        </div>;
    }
};