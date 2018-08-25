import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import List from './pages/List';
import Detail from './pages/Detail';
import Upload from './pages/Upload';

import Navigation from './elements/Navigation';

class Main extends Component {
  redirect(){
    if(this.props.location.pathname === "/"){
      this.props.history.replace("/home");
    }
  }
  componentWillMount(){
    this.redirect();
  }
  render() {
    return (
      <div className="main">
        <Navigation />
        <div className="content">
          <Route path={"/home"} component={List} />
          <Route path={"/detail/:id"} component={Detail} />
          <Route path={"/upload"} component={Upload} />
        </div>
      </div>
    );
  }
}

export default Main;
