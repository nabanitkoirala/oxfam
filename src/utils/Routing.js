import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Dashboard from '../oxfam data/Pages/Main-dashboard';
import Province1 from '../oxfam data/Pages/Province1';
import Province2 from '../oxfam data/Pages/Province2';
import Bagmati from '../oxfam data/Pages/Bagmati';
import Gandaki from '../oxfam data/Pages/Gandaki';
import Province5 from '../oxfam data/Pages/Province5';
import Karnali from '../oxfam data/Pages/Karnali';
import Sudurpaschim from '../oxfam data/Pages/Sudurpaschim';

const Page = () => {
    return (<p>Page not found</p>)

}
const Routing = () => {
    return (
        <div>
            <Router>
                <Route exact path="/" component={Dashboard} />
                <Route path="/overall-data" component={Dashboard} />
                <Route path="/province1" component={Province1} />
                <Route path="/province2" component={Province2} />
                <Route path="/bagmati" component={Bagmati} />
                <Route path="/gandaki" component={Gandaki} />
                <Route path="/province5" component={Province5} />
                <Route path="/karnali" component={Karnali} />
                <Route path="/sudurpaschim" component={Sudurpaschim} />


            </Router>

        </div>

    )

}

export default Routing;