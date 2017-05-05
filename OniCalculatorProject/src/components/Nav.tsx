import * as React from 'react'
import { Link, IndexLink  } from 'react-router';

export class Nav extends React.Component<any, any>{
    render() {
        return (
            <ul>
                <li><IndexLink  to="/" activeStyle={{ color: 'red' }}>Home</IndexLink></li>
                <li><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></li>
                <li><Link to="/inbox" activeStyle={{ color: 'red' }}>Inbox</Link></li>
                <li><Link to="/messages/5" activeStyle={{ color: 'red' }}>MESSAGE #5</Link></li>
            </ul>
        );
    }
};