import React, { Component } from "react";
class Form extends Component {
  state = {
    inputText: ""
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.inputText === "") return false;

    const nom = this.state.inputText;
    this.props.onClientAdd({ nom });
    this.setState({ inputText: "" });
  };

  handleChange = (e) => {
    this.setState({ inputText: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.inputText}
          onChange={this.handleChange}
          placeholder="entrez votre client"
        />
        <input type="submit" value="Ajouter" />
      </form>
    );
  }
}
export default Form;
