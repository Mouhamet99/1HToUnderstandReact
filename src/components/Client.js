import React, { Component } from "react";
class Client extends Component {
  render() {
    const client = this.props.infos;

    return (
      <li key={client.id}>
        {client.nom}
        <button onClick={() => this.props.onDelete(this.props.infos.id)}>
          X
        </button>
      </li>
    );
  }
}
export default Client;
