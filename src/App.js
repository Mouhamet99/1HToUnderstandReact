import React from "react";
import "./styles.css";

export default class App extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "Adou Karim" },
      { id: 2, nom: "Fati Diop" },
      { id: 3, nom: "Anta Mbaye" }
    ]
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
        <input placeholder="entrez votre produit" />
        <input type="submit" value="Ajouter" />
      </div>
    );
  }
}
