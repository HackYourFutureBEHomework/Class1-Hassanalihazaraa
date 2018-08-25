import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import axios from 'axios';
import GlobalVar from '../GlobalVar';

class Upload extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedFile: "",
      uploading: false,
      title: ""
    }
  }

  selectFile(selectedFile){
    const { size } = selectedFile.fileList[0];
    if(size > 5000000){
      alert("Please choose a file with a size lower than 5mb.")
    } else{

      this.setState({selectedFile})
    }
  }

  uploadFile(event){
    event.preventDefault();
    const { title, selectedFile } = this.state;
    if(title === "") alert("Please give a title");
    else if(selectedFile === "") alert("Please select a file");
    else{
      const { serverDomain } = GlobalVar;
      let { base64 } = selectedFile;

      base64 = base64.replace(/^data:\w+\/\w+;base64,/, "");

      axios.post(`${serverDomain}/post/joke`, {
        title,
        file: {
          base64,
          type: selectedFile.fileList[0].type
        }
      }).then(result => {
        this.props.history.push("home");
      }).catch(error => {
        alert(error);
      })
    }
  }

  generateFileName(){
    const { selectedFile } = this.state;
    if(selectedFile === ""){
      return "Select file"
    }
    else {
      return selectedFile.fileList[0].name;
    }
  }
  render() {
    return (
      <div className="upload_form_wrapper">
        <h2>Upload a joke</h2>
        <form onSubmit={(event) => this.uploadFile(event)} className="upload_form">
          <label>Title joke</label>
          <input
            value={this.state.title}
            onChange={(event) => this.setState({title: event.target.value})}
            type="text"
          />
          <ReactFileReader
            fileTypes={["image/*"]}
            base64={true}
            multipleFiles={false}
            handleFiles={(files) => this.selectFile(files)}
          >
            <button>{this.generateFileName()}</button>
          </ReactFileReader>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Upload;
