/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './HomePage';
import FuelSavingsPage from './containers/FuelSavingsPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false
    };
  }

  componentDidMount() {
    this.setState({
      mounted: true
    });
  }

  handleSubmit(event) {
    this.setState({
      mounted: false
    });
    event.preventDefault();
  }

  render() {
    const activeStyle = { color: 'blue' };

    // if(this.state.mounted) {
    //   child = (<Modal onSubmit={this.handleSubmit} />)
    // }

    return (
      <div className="App">
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
          {' | '}
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
        {/* <ReactCSStransitionGroup>
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {child}
        </ReactCSStransitionGroup> */}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
