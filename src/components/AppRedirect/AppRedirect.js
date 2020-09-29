import React, { Component } from "react";

export class AppRedirect extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }
  componentWillMount(){
    window.location = this.state.route.loc;
  }
  render(){
    return (<section>Redirecting...</section>);
  }
}

export default AppRedirect;