import React from "react";
const Client = (props) => {
  const client = props.infos;

  return (
    <li key={client.id}>
      {client.nom}
      <button onClick={() => this.props.onDelete(this.props.infos.id)}>
        X
      </button>
    </li>
  );
};
export default Client;
