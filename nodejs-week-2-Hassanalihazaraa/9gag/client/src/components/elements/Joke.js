import React, { Component } from 'react';
import Button from './Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

import GlobalVar from '../GlobalVar';

class Joke extends Component {
  constructor(props){
    super(props);
    this.state = {
      votes: 0
    }
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
  }
  upvote(){
    this.vote("upvote")
  }
  downvote(){
    this.vote("downvote")
  }
  vote(type){
    const { data } = this.props;
    const { id } = data;
    const { serverDomain } = GlobalVar;
    axios.post(`${serverDomain}/update/joke/${type}`, {
      id
    }).then(result => {
      const { data } = result;
      const { status } = data;
      if(status === "succes"){
        if(type === "upvote"){
          this.setState({
            votes: this.state.votes + 1
          })
        } else if(type === "downvote"){
          this.setState({
            votes: this.state.votes - 1
          })
        }
      }
    })
  }
  componentDidMount(){
    const { data } = this.props;
    const { up_votes, down_votes } = data;
    this.setState({
      votes: up_votes - down_votes
    })
  }
  render() {
    const { data } = this.props;
    const { title, image_location, votes, id } = data;
    return (
      <section className="joke">
        <h2>{title}</h2>
        <Link to={`/detail/${id}`}>
          <img className="joke_img" src={image_location} />
        </Link>
        <div className="joke_actions">
          <Button action={this.upvote} imgSrc={"/icons/up_arrow.svg"} />
          <Button action={this.downvote} imgSrc={"/icons/down_arrow.svg"} />
          <p>{this.state.votes} votes</p>
        </div>
      </section>
    );
  }
}

export default Joke;
