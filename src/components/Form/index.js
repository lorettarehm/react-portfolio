import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    email: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Check if name and email were provided
    if(this.state.firstName && this.state.email){
      // Alert the user their first and email, clear `this.state.firstName` and `this.state.email`, clearing the inputs
      alert(`Hello ${this.state.firstName}, thanks for reaching out. I will contact you soon on ${this.state.email} with the answer to your question!`);
      this.setState({
        firstName: "",
        email: ""
      });
    } else {
      alert(`Please inform your name and email!`);
    };
  };

  render() {
    return (
      <div>
        <p>
          Hello {this.state.firstName}, would you like to ask anything about me or my work? Please provide your information below so I can reach out!
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
