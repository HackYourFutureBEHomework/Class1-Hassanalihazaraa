import React, { Component } from 'react';

class Button extends Component {
  initiateAction(event){
    event.preventDefault();
    this.props.action();
  }
  render() {
    const { imgSrc } = this.props;
    return (
      <form onSubmit={(event) => this.initiateAction(event)}>
        <button>
          <img src={imgSrc} />
        </button>
      </form>
    );
  }
}

export default Button;
