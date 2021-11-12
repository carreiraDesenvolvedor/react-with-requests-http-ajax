import React, { useState, useEffect } from "react";
import Usuario from "../Usuario/Usuario";

const Usuarios = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log("use effect...");
    fetch("https://reqres.in/api/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const users = data.data.map((user) => {
          return {
            id: user.id,
            nome: user.first_name,
            sobrenome: user.last_name,
            email: user.email,
          };
        });

        setList(users);
      });
  }, []);

  console.log("render");

  const adicionarUsuario = (user) => {
    setList([...list, user]);
  };

  const removerUsuario = (usuario) => {
    if (
      window.confirm(
        `Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`
      )
    ) {
      fetch(`https://reqres.in/api/users/${usuario.id}`, {
        method: "DELETE",
      }).then((response) => {
        if (response.ok) {
          setList(list.filter((x) => x.id !== usuario.id));
        }
      });
    }
  };

  return (
    <>
      {list.map((usuario) => (
        <Usuario
          key={usuario.id}
          usuario={usuario}
          removerUsuario={removerUsuario.bind(this, usuario)}
        />
      ))}
    </>
  );
};

export default Usuarios;
