import * as React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, ProductTabs } from '../utils/Helper';
import { slide as Menu } from 'react-burger-menu';
import * as Media from 'react-media';

interface INavProps {
    tab: string;
    subTab?: string;
}

interface INavState {
    activeTab?: string;
    activeSubTab?: string;
}

export class Nav extends React.Component<INavProps, INavState>{
    constructor(props) {
        super(props);

        this.state = {
            activeTab: props.tab || Tabs.Main,
            activeSubTab: props.subTab || ProductTabs.Macarons
        }
    }

    onLinkClick = (tab: string) => {
        this.setState({
            activeTab: tab
        });
    }

    onSubLinkClick = (tab: string) => {
        this.setState({
            activeSubTab: tab
        })
    }

    renderLogo() {
        const { activeTab } = this.state;

        return <img src='/images/icons/Oni_w_black.png' className={'logo'} />;
    }

    renderNavBar() {
        const { activeTab } = this.state;

        return <div className={activeTab == Tabs.Products ? 'nav-bar-main' : 'nav-bar-main with-space'}>
            <ul>
                <li>
                    <Link to='/products/macarons'
                        className={activeTab == Tabs.Products ? 'active' : ''}
                        onClick={() => this.onLinkClick(Tabs.Products)}>
                        {Tabs.Products}
                    </Link>
                </li>
                <li>
                    <Link to='/clients'
                        className={activeTab == Tabs.CorporateClients ? 'active' : ''}
                        onClick={() => this.onLinkClick(Tabs.CorporateClients)}>
                        {Tabs.CorporateClients}
                    </Link>
                </li>
                <li className={'logolink'}>
                    <Link to='/'
                        className={activeTab == Tabs.Main ? 'active' : ''}
                        onClick={() => this.onLinkClick(Tabs.Main)}>
                        {this.renderLogo()}
                    </Link>
                </li>
                <li>
                    <Link to='/delivery'
                        className={activeTab == Tabs.DeliveryAndPayment ? 'active' : ''}
                        onClick={() => this.onLinkClick(Tabs.DeliveryAndPayment)}>{Tabs.DeliveryAndPayment}
                    </Link>
                </li>
                <li>
                    <Link to='/about'
                        className={activeTab == Tabs.About ? 'active' : ''}
                        onClick={() => this.onLinkClick(Tabs.About)}>{Tabs.About}
                    </Link>
                </li>
                <li>
                    <Link to='/news'
                        className={activeTab == Tabs.News ? 'active' : ''}
                        onClick={() => this.onLinkClick(Tabs.News)}>{Tabs.News}
                    </Link>
                </li>
            </ul>
        </div>;
    }

    renderSubNavBar() {
        const { activeTab, activeSubTab } = this.state;

        return <> 
        <div className={activeTab == Tabs.Products ? 'nav-bar-sub with-space' : 'nav-bar-sub'}>
            <ul>
                <li>
                    <Link to='/products/macarons'
                        className={activeSubTab == ProductTabs.Macarons ? 'active' : ''}
                        onClick={() => this.onLinkClick(ProductTabs.Macarons)}>
                        {ProductTabs.Macarons}
                    </Link>
                </li>
                <li>
                    <Link to='/products/zephyr'
                        className={activeSubTab == ProductTabs.Zephyr ? 'active' : ''}
                        onClick={() => this.onLinkClick(ProductTabs.Zephyr)}>
                        {ProductTabs.Zephyr}
                    </Link>
                </li>
                <li>
                    <Link to='/products/cakes'
                        className={activeSubTab == ProductTabs.Cakes ? 'active' : ''}
                        onClick={() => this.onLinkClick(ProductTabs.Cakes)}>
                        {ProductTabs.Cakes}
                    </Link>
                </li>
                <li>
                    <Link to='/products/choux'
                        className={activeSubTab == ProductTabs.Choux ? 'active' : ''}
                        onClick={() => this.onLinkClick(ProductTabs.Choux)}>
                        {ProductTabs.Choux}
                    </Link>
                </li>
            </ul>
        </div>
        <div className='clearfix'></div>
        </>;
    }

    render() {
        const { activeTab } = this.state;

        return <Media query={{ maxWidth: 800 }}>
            {matches => matches ? (
                <div className='nav-bar'>
                    <img src='/images/icons/Oni_w_black.png' className={activeTab == Tabs.Main ? 'logo' : 'logo logo-small'} />
                    <Menu right
                        width={'100%'}
                        customBurgerIcon={<img src='/images/icons/menu-button.png' />}
                        customCrossIcon={<img src='/images/icons/close.png' />} >
                        {activeTab !== Tabs.Main ?
                            <span className='menu-item'>
                                <Link to='/'
                                    className={activeTab == Tabs.Main ? 'active' : ''}
                                    onClick={() => this.onLinkClick(Tabs.Main)}>
                                    {Tabs.Main}
                                </Link>
                            </span> :
                            null}
                        <span className='menu-item'>
                            <Link to='/products/macarons'
                                className={activeTab == Tabs.Products ? 'active' : ''}
                                onClick={() => this.onLinkClick(Tabs.Products)}>
                                {Tabs.Products}
                            </Link>
                        </span>
                        <span className='menu-item'>
                            <Link to='/clients'
                                className={activeTab == Tabs.CorporateClients ? 'active' : ''}
                                onClick={() => this.onLinkClick(Tabs.CorporateClients)}>
                                {Tabs.CorporateClients}
                            </Link>
                        </span>
                        <span className='menu-item'>
                            <Link to='/delivery'
                                className={activeTab == Tabs.DeliveryAndPayment ? 'active' : ''}
                                onClick={() => this.onLinkClick(Tabs.DeliveryAndPayment)}>
                                {Tabs.DeliveryAndPayment}
                            </Link>
                        </span>
                        <span className='menu-item'>
                            <Link to='/about'
                                className={activeTab == Tabs.About ? 'active' : ''}
                                onClick={() => this.onLinkClick(Tabs.About)}>
                                {Tabs.About}
                            </Link>
                        </span>
                        <span className='menu-item'>
                            <Link to='/news'
                                className={activeTab == Tabs.News ? 'active' : ''}
                                onClick={() => this.onLinkClick(Tabs.News)}>
                                {Tabs.News}
                            </Link>
                        </span>
                        <div className='bm-socials'>
                            <a target='_blank' href='https://www.facebook.com/'>
                                <img className='social_network' src='images/icons/facebook.png' />
                            </a>
                            <a target='_blank' href='https://www.instagram.com'>
                                <img className='social_network' src='images/icons/instagram.png' />
                            </a>
                            <a target='_blank' href='https://www.telegram.com'>
                                <img className='social_network' src='images/icons/twitter.png' />
                            </a>
                        </div>
                    </Menu>
                </div>
            ) : (
                    <div className='nav-bar'>
                        {this.renderNavBar()}
                        {
                            activeTab === Tabs.Products && this.renderSubNavBar()
                        }
                    </div>
                )}
        </Media>;
    }
};