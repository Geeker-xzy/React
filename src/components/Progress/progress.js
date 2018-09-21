import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: '',
      color: 'rainbow',
      height: 2,
      hideDelay: .4,
      percent: 0,
      speed: .4,
      style: {
        containerStyle: {
          opacity: 1,
          // WebkitTransition:'0.4 s opacity',
          // transition: '0.4s opacity',
          // WebkitTransitionDelay:  '.4s',
          // transitionDelay: '.4s'
        }, 
        barStyle: {
          display: 'inline-block',
          position: 'fixed',
          zIndex: 1000,
          top: 0,
          left: 0,
          maxWidth: '100% !important',
          height: '2px',
          boxShadow: '1px 1px 1px rgba(0,0,0,0.4)',
          borderRadius: '0 1px 1px 0',
          backgroundImage:'linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #FF2D55)',
          backgroundSize:'100vw 2px'
          // WebkitTransition: props.speed + 's 100vw, ' + props.speed + 's background-color',
          // transition: props.speed + 's 100vw, ' + props.speed + 's background-color'
        }

      }
    };
  }
  render() {
    return (
      <div style={this.props.progressbar} style={this.state.style.containerStyle}>
        <div
          className={this.props.progressbar.length ? this.props.progressbar + '__bar' : ''}
          style={this.state.style.barStyle}
        ></div>
        {/* <progress value="10"></progress> */}
      </div>
    )
  }
}
const mapStateToProps = (store) => {
  console.log(store);
  return {
    progressbar: store.progressbar,
  }
}
export default withRouter(connect(mapStateToProps)(App));