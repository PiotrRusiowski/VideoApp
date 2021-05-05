import React, { Component } from "react";

const withHoverEffect = (WrappedComponent) => {
  return class withHoverEffect extends Component {
    state = {
      isHover: false,
    };
    toggleIsHover = () => {
      this.setState({
        isHover: !this.state.isHover,
      });
    };
    render() {
      return (
        <WrappedComponent
          toggleIsHover={this.toggleIsHover}
          isHover={this.state.isHover}
          {...this.props}
        />
      );
    }
  };
};

export default withHoverEffect;
