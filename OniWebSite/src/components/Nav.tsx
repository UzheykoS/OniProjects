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
    smallHeader?: boolean;
}

export class Nav extends React.Component<INavProps, INavState>{
    _isMounted = false;

    constructor(props) {
        super(props);

        window.scrollTo(0, 0);
        this.state = {
            activeTab: props.tab || Tabs.Main,
            activeSubTab: props.subTab || ProductTabs.Macarons,
            smallHeader: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
        this._isMounted = true;
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        this._isMounted = false;
    }

    handleScroll = () => {
        if (!this._isMounted) {
            return;
        }
        const { smallHeader } = this.state;
        if (window.scrollY > 100 && !smallHeader) {
            this.setState({
                smallHeader: true
            });
        } else if (window.scrollY <= 100 && smallHeader) {
            this.setState({
                smallHeader: false
            });
        }
    };

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
        const { smallHeader } = this.state;

        return <img src='/images/icons/Oni_w_black.png' className={smallHeader ? 'logo-small' : 'logo'} />;
    }

    renderNavBar() {
        const { activeTab, smallHeader } = this.state;

        let mainClassName = activeTab == Tabs.Products ? 'nav-bar-main' : 'nav-bar-main with-space';
        if (smallHeader) {
            mainClassName = mainClassName + ' small-nav-bar';
        }

        return <div className={mainClassName}>
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
            {
                activeTab === Tabs.Products && this.renderSubNavBar()
            }
        </div>;
    }

    renderSubNavBar() {
        const { activeTab, activeSubTab, smallHeader } = this.state;

        let mainClassName = activeTab == Tabs.Products ? 'nav-bar-sub with-nav-bar-space' : 'nav-bar-sub';
        if (smallHeader) {
            mainClassName = mainClassName + ' small-sub-nav-bar';
        }

        return <div className={mainClassName}>
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
        </div>;
    }

    render() {
        const { activeTab, smallHeader } = this.state;
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
                    <div className={smallHeader ? (activeTab === Tabs.Products ? 'nav-bar small-nav-bar-container-with-subbar' : 'nav-bar small-nav-bar-container') : 'nav-bar'}>
                        {this.renderNavBar()}
                    </div>
                )}
        </Media>;
    }
};