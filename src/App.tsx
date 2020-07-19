import React,{ Component} from 'react';
import {
    Route,
    Redirect,
    BrowserRouter as Router,
} from "react-router-dom";
import Login from './containers/login';

class App extends Component {
    render(){
        return (

            <Router>
                <div>
                    <Route exact path="/" component={Login}/>
                    <Route path="/login" component={Login}/>
                </div>
            </Router>
        );
    }
}
export default App;
