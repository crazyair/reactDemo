import {bindActionCreators} from 'redux';
import {connect  } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/counter';
import React, {Component, PropTypes} from 'react';


class App extends Component {
  render() {
    return <Counter {...this.props}/>;
  }
}

App.propTypes = {
  counter: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);