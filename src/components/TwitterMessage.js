import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      maxChars: 280,
    };
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
      maxChars: 279 - this.state.content.length
    });
  };


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message"
          onChange={(event) => this.handleChange(event)}
          value={this.state.content} 
          />
            <h1>Remaining characters: {this.state.maxChars}</h1>
          </div>
    );
  }
}

export default TwitterMessage;
