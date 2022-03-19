import React from "react";
import Client from "./components/Client";
import Form from "./components/Form";
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
    this.setState({ compteur: this.state.compteur + 1 });
  };

  handleDelete = (id) => {
    const clients = this.state.clients.slice();
    const index = this.state.clients.findIndex((client) => client.id === id);

    clients.splice(index, 1);

    this.setState({ clients });
  };

  handleAdd = (client) => {
    const clients = this.state.clients.slice();

    clients.push({
      id: this.state.clients.length + 1,
      nom: client.nom
    });

    this.setState({ clients, inputText: "" });
  };

  render() {
    const clients = this.state.clients.map((client) => (
      <Client infos={client} onDelete={this.handleDelete} />
    ));

    return (
      <div className="App">
        <h1>Liste des clients</h1>
        <ul>{clients}</ul>
        <Form onClientAdd={this.handleAdd} />
        <hr />
        <button onClick={this.handleClcik}>Click me</button>
        <p>{this.state.compteur}</p>
        <p>{this.state.inputText}</p>
      </div>
    );
  }
}
