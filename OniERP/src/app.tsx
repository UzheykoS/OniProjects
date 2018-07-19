import { Switch, Route, Redirect } from 'react-router-dom';
import * as React from 'react';
import MainPage from './pages/MainPage';
import CheckPage from './pages/CheckPage';
import CheckoutPage from './pages/CheckoutPage';
import NotFoundPage from './pages/NotFoundPage';
import { Link } from 'react-router-dom';

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
        <Route exact path='/' component={MainPage} />
        <Route path='/check' component={CheckPage} />
        <Route path='/checkOut' component={CheckoutPage} />

        {/* <Redirect to="/404" /> */}
        <Route component={NotFoundPage} />
    </Switch>
)

const App = () => (
    <div>
        <Header />
        <Main />
    </div>
)

export default App;