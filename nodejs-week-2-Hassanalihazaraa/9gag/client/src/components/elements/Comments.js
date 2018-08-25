import React, { Component } from 'react';
import Comment from './Comment';
import GlobalVar from '../GlobalVar';
import axios from 'axios';


class Comments extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: "",
      username: "",
      comments: []
    }
  }
  getData(){
    const { serverDomain } = GlobalVar;
    axios.get(`${serverDomain}/get/comments/${this.props.jokeId}`).then(({data}) => {
      this.setState({comments: data});
    }).catch(error => {
      console.log(error);
    })
  }
  componentDidMount(){
    this.getData();
  }
  postComment(event){
    event.preventDefault();
    const { text, username } = this.state;
    if(!text) alert("please provide a text in your comment");
    else if(!username) alert("please provide a name")
    else {
      const { serverDomain } = GlobalVar;
      axios.post(`${serverDomain}/post/comment`, {
        text,
        username,
        joke_id: this.props.jokeId
      }).then(result => {
        this.setState({
          text: "",
          username: ""
        });
        this.getData();
      }).catch(error => {
        alert(error);
      })
    }
  }
  generateComments(){
    return this.state.comments.map(({id, text, username}) => {
      return <Comment key={id} text={text} username={username} />
    })
  }
  render() {
    return (
      <div className="comments">
        <h3>Comments</h3>
        <form onSubmit={(event) => this.postComment(event)}>
          <textarea
            placeholder="Your thoughts"
            onChange={(event) => this.setState({text: event.target.value})}
            value={this.state.text}
          />
          <input
            type="text"
            placeholder="Your name"
            onChange={(event) => this.setState({username: event.target.value})}
            value={this.state.username}
          />
          <input type="submit" />
        </form>
        {this.generateComments()}
      </div>

    );
  }
}

export default Comments;
