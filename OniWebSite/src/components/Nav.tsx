import * as React from 'react'
import { Link, IndexLink } from 'react-router';

export class Nav extends React.Component<any, any>{
    render() {
        return <div className="nav-bar">
            <ul>
                <li><IndexLink to="/" activeStyle={{ color: 'red' }}>О нас</IndexLink></li>
                <li><Link to="/cakes" activeStyle={{ color: 'red' }}>Торты</Link></li>
                <li><Link to="/macaroons" activeStyle={{ color: 'red' }}>Макаруны</Link></li>
                <li><Link to="/stub/Мармелад" activeStyle={{ color: 'red' }}>Мармелад</Link></li>
                <li><Link to="/stub/Корпоративным" activeStyle={{ color: 'red' }}>Корпоративным клиентам</Link></li>
                <li><Link to="/contacts" activeStyle={{ color: 'red' }}>Контакты</Link></li>
            </ul>
        </div>;
    }
};