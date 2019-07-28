import React, { Component } from 'react';

class BackgroundToggle extends Component {

  constructor(props){
    super(props)
    this.state = {
      backgroundColor: false,
    }
    this.toggleClass = this.toggleClass.bind(this)
  }

  state = {
    backgroundColor: false,
  }

  toggleClass(){
    this.setState({
      backgroundColor: !this.state.backgroundColor
    })
  }

  render() {
    return (
      <div className={this.state.backgroundColor ? 'blue' : ''}>
        <button onClick={this.toggleClass}>Click to change the color of the background!</button>
      </div>
    );
  }

}

export default BackgroundToggle;
