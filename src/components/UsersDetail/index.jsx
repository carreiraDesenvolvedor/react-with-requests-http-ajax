import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Usuarios from "../Usuarios/Usuarios";

export default (props) => {
  const { id } = useParams();

  const [user, setUser] = useState({});

  console.log("IDD " + id);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((response) => response.json())
      .then(({ data }) => {
        if (data) {
          setUser({
            id: data.id,
            name: data.first_name,
            lastName: data.last_name,
            email: data.email,
            avatar: data.avatar,
          });
        }
      });
  }, [id]);

  if (user.name !== "undefined") {
    return (
      <>
        <h1>
          {user.name} {user.lastName}
        </h1>
        <img src={user.avatar} alt={user.name} />
        <p>{user.email}</p>
        <Link to="/users">Usuários</Link>
      </>
    );
  }

  return (
    <>
      <h1>Usuário não encontrado</h1>
      <Link to="/users">Voltar</Link>
    </>
  );
};
