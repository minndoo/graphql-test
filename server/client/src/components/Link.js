import React, { Component } from 'react';

class Link extends Component {
  render() {
    return (
      <div>
        <div>{this.props.category.name}</div>
      </div>
    );
  }
}

export default Link;
