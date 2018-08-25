import React, { Component } from 'react';
import Joke from '../elements/Joke';
import axios from 'axios';
import Comments from '../elements/Comments';
import GlobalVar from '../GlobalVar';

class Detail extends Component {
  constructor(props){
    super(props);
    this.state = {
      joke: null
    }
  }
  getData(){
    const { id } = this.props.match.params;
    if(id){
      const { serverDomain } = GlobalVar;
      axios.get(`${serverDomain}/get/joke/${id}`).then(result => {
        const { data } = result;
        this.setState({
          joke: data
        })
      }).catch(error => {
        console.log(error);
      });
    }
  }
  componentDidMount(){
    this.getData();
  }
  generateJoke(){
    if(this.state.joke){
      return <Joke data={this.state.joke} />
    } else{
      return <p>Please implement the route: /joke/:id</p>
    }
  }
  render() {
    return (
      <div className="joke_detail">
        {this.generateJoke()}
        <Comments jokeId={this.props.match.params.id} />
      </div>
    );
  }
}

export default Detail;
