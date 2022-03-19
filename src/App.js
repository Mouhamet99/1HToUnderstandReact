import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Adou Karim" },
      { id: 2, nom: "Fati Diop" },
      { id: 3, nom: "Anta Mbaye" }
    ],
    inputText: "",
    compteur: 0
  };

  handleClcik = () => {
    console.log(this.state);
    this.setState({ compteur: this.state.compteur + 1 });
  };

  handleChange = (e) => {
    this.setState({ inputText: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputText === "") return false;

    const clients = this.state.clients.slice();
    clients.push({
      id: this.state.clients.length + 1,
      nom: this.state.inputText
    });
    this.setState({ clients, inputText: "" });

    // const id = this.state.clients.length + 1;
    // const nom = this.state.inputText;
    // const clients = [...this.state.clients, { id, nom }];
    // this.setState({ clients, inputText: "" });
  };

  render() {
    const clients = this.state.clients.map((client) => (
      <li key={client.id}>
        {client.nom} <button>X</button>
      </li>
    ));

    return (
      <div className="App">
        <h1>Liste des clients</h1>
        <ul>{clients}</ul>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.inputText}
            onChange={this.handleChange}
            placeholder="entrez votre client"
          />
          <input type="submit" value="Ajouter" />
        </form>
        <hr />
        <button onClick={this.handleClcik}>Click me</button>
        <p>{this.state.compteur}</p>
        <p>{this.state.inputText}</p>
      </div>
    );
  }
}
