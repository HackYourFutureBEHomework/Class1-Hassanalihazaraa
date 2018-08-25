import React, { Component } from 'react';
import axios from 'axios';
import Joke from '../elements/Joke';
import GlobalVar from '../GlobalVar';

class List extends Component {
  constructor(props){
    super(props);
    this.state = {
      jokes: []
    }
  }
  componentDidMount(){
    const { serverDomain } = GlobalVar;
    axios.get(`${serverDomain}/get/jokes`).then(result => {
      const { data } = result;
      this.setState({
        jokes: data
      })
    }).catch(error => {
      console.log(error);
    });
  }
  generateJokes(){
    if(this.state.jokes.length === 0){
      return <p>Please implement the route: /get/jokes</p>
    }
    return this.state.jokes.map(data => {
      return(
        <li key={data.id}>
          <Joke data={data} />
        </li>
      )
    })
  }
  render() {
    return (
      <ul className="joke_list">
        {this.generateJokes()}
      </ul>
    );
  }
}

export default List;
