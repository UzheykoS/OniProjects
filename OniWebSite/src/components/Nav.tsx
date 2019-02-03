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
    smallHeader?: boolean;
}

export class Nav extends React.Component<INavProps, INavState>{
    _isMounted = false;

    constructor(props) {
        super(props);

        window.scrollTo(0, 0);
        this.state = {
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

    renderLogo() {
        const { smallHeader } = this.state;

        return <img src='/images/icons/Oni_w_black.png' className={smallHeader ? 'logo-small' : 'logo'} />;
    }

    renderNavBar() {
        const { smallHeader } = this.state;
        const { tab } = this.props;

        let mainClassName = tab == Tabs.Products ? 'nav-bar-main' : 'nav-bar-main with-space';
        if (smallHeader) {
            mainClassName = mainClassName + ' small-nav-bar';
        }

        return <div className={mainClassName}>
            <ul>
                <li>
                    <Link to='/products/macarons'
                        className={tab == Tabs.Products ? 'active' : ''}>
                        {Tabs.Products}
                    </Link>
                </li>
                <li>
                    <Link to='/clients'
                        className={tab == Tabs.CorporateClients ? 'active' : ''}>
                        {Tabs.CorporateClients}
                    </Link>
                </li>
                <li className={'logolink'}>
                    <Link to='/'
                        className={tab == Tabs.Main ? 'active' : ''}>
                        {this.renderLogo()}
                    </Link>
                </li>
                <li>
                    <Link to='/delivery'
                        className={tab == Tabs.DeliveryAndPayment ? 'active' : ''}>{Tabs.DeliveryAndPayment}
                    </Link>
                </li>
                <li>
                    <Link to='/about'
                        className={tab == Tabs.About ? 'active' : ''}>{Tabs.About}
                    </Link>
                </li>
                <li>
                    <Link to='/news'
                        className={tab == Tabs.News ? 'active' : ''}>{Tabs.News}
                    </Link>
                </li>
            </ul>
            {
                tab === Tabs.Products && this.renderSubNavBar()
            }
        </div>;
    }

    renderSubNavBar() {
        const { smallHeader } = this.state;
        const { tab, subTab } = this.props;

        let mainClassName = tab == Tabs.Products ? 'nav-bar-sub with-nav-bar-space' : 'nav-bar-sub';
        if (smallHeader) {
            mainClassName = mainClassName + ' small-sub-nav-bar';
        }

        return <div className={mainClassName}>
            <ul>
                <li>
                    <Link to='/products/macarons'
                        className={subTab == ProductTabs.Macarons ? 'active' : ''}>
                        {ProductTabs.Macarons}
                    </Link>
                </li>
                <li>
                    <Link to='/products/zephyr'
                        className={subTab == ProductTabs.Zephyr ? 'active' : ''}>
                        {ProductTabs.Zephyr}
                    </Link>
                </li>
                <li>
                    <Link to='/products/cakes'
                        className={subTab == ProductTabs.Cakes ? 'active' : ''}>
                        {ProductTabs.Cakes}
                    </Link>
                </li>
                <li>
                    <Link to='/products/choux'
                        className={subTab == ProductTabs.Choux ? 'active' : ''}>
                        {ProductTabs.Choux}
                    </Link>
                </li>
            </ul>
        </div>;
    }

    render() {
        const { smallHeader } = this.state;
        const { tab } = this.props;

        return <Media query={{ maxWidth: 800 }}>
            {matches => matches ? (
                <div className='nav-bar'>
                    <img src='/images/icons/Oni_w_black.png' className={tab == Tabs.Main ? 'logo' : 'logo logo-small'} />
                    <Menu right
                        width={'100%'}
                        customBurgerIcon={<img src='/images/icons/menu-button.png' />}
                        customCrossIcon={<img src='/images/icons/close.png' />} >
                        {tab !== Tabs.Main ?
                            <span className='menu-item'>
                                <Link to='/'
                                    className={tab == Tabs.Main ? 'active' : ''}>
                                    {Tabs.Main}
                                </Link>
                            </span> :
                            null}
                        <span className='menu-item'>
                            <Link to='/products/macarons'
                                className={tab == Tabs.Products ? 'active' : ''}>
                                {Tabs.Products}
                            </Link>
                        </span>
                        <span className='menu-item'>
                            <Link to='/clients'
                                className={tab == Tabs.CorporateClients ? 'active' : ''}>
                                {Tabs.CorporateClients}
                            </Link>
                        </span>
                        <span className='menu-item'>
                            <Link to='/delivery'
                                className={tab == Tabs.DeliveryAndPayment ? 'active' : ''}>
                                {Tabs.DeliveryAndPayment}
                            </Link>
                        </span>
                        <span className='menu-item'>
                            <Link to='/about'
                                className={tab == Tabs.About ? 'active' : ''}>
                                {Tabs.About}
                            </Link>
                        </span>
                        <span className='menu-item'>
                            <Link to='/news'
                                className={tab == Tabs.News ? 'active' : ''}>
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
                    <div className={smallHeader ? (tab === Tabs.Products ? 'nav-bar small-nav-bar-container-with-subbar' : 'nav-bar small-nav-bar-container') : 'nav-bar'}>
                        {this.renderNavBar()}
                    </div>
                )}
        </Media>;
    }
};