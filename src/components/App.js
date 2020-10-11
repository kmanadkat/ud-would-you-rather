import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux'
import { handleInitialData } from '../actions/shared';
import Navbar from './layout/Navbar';
import Home from './routes/Home';
import Leaderboard from './routes/Leaderboard';
import Login from './routes/Login';
import NewPoll from './routes/NewPoll';
import NotFound from './routes/NotFound';
import PollDetail from './routes/PollDetail';
import Register from './routes/Register';


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }
  render() {
    const {authedUser} = this.props;
    return (
      <BrowserRouter>
        <Navbar authedUser={authedUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={NewPoll} />
          <Route path="/question/:question_id" component={PollDetail} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = ({authedUser}) => {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
