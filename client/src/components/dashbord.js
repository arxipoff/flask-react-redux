import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDashbord } from '../actions/dashbord';
import { Loader } from '../icons';


class Dashbord extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      loader: true,

      activeMenuItem: 2,
      activeData: {}
    }
  }

  componentWillMount() {
    this.props.loadDashbord();
  }

  componentDidUpdate() {
    if(this.props.dashbord_api.dashbord_api.data !== undefined && this.state.loader) {
      this.setState({
        loader: !this.state.loader
      })
    }
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
    console.log('catch error: ', error, info);
  }

  mainPartParse() {
    if(this.state.hasError) {
      return (
        <p>DASHBORD ERROR</p>
      );
    }
    else if(this.state.loader) {
      return (
        <section className="dashbord-container-loader">
          <Loader />
        </section>
      )
    }
    else {
      return (
        <section className="dashbord-container">
          HELLO WORLD
        </section>
      );
    }
  }

  render() {
    console.log('PROPS: ', this.props);
    console.log('STATE ACTIVE DATA: ', this.state.activeData);
    return (
      this.mainPartParse()
    )
  }
}

const stateMapToProps = state => {
  return ({
    dashbord_api: state.dashbord.toJS()
  })
}

const stateDispatchToProps = {
  loadDashbord
}

export default connect(stateMapToProps,stateDispatchToProps)(Dashbord)