import { Switch, Route, Redirect } from 'react-router-dom';
import * as React from 'react';
import TestComponent from './components/TestComponent';
import NewOrderComponent from './components/NewOrderComponent';
import NotFoundComponent from './components/NotFoundComponent';
import HomeComponent from './components/HomeComponent';
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/test'>Test</Link></li>
                <li><Link to='/newOrder'>New Order</Link></li>
            </ul>
        </nav>
    </header>
)

const Main = () => (
    <Switch>
        <Route exact path='/' component={HomeComponent} />
        <Route path='/test' component={TestComponent} />
        <Route path='/newOrder' component={NewOrderComponent} />

        {/* <Redirect to="/404" /> */}
        <Route component={NotFoundComponent} />
    </Switch>
)

const App = () => (
    <div>
        <Header />
        <Main />
    </div>
)

export default App;