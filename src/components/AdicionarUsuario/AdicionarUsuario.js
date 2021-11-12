import React, { useState } from "react";

import "./AdicionarUsuario.css";

const AdicionarUsuario = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // const id = Math.floor(Math.random() * 1000)
        const usuario = {
            nome: name,
            sobrenome: lastName,
            email,
        };

        fetch("https://reqres.in/api/users", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(usuario),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setName("");
                setLastName("");
                setEmail("");
                // props.adicionarUsuario(data)
            });
    };

    return ( <
        div className = "AdicionarUsuario" >
        <
        h2 > Adicionar Usuário < /h2>{" "} <
        form onSubmit = { onSubmitHandler } >
        <
        div className = "Linha" >
        <
        div className = "Coluna" >
        <
        label > Nome < /label>{" "} <
        input type = "text"
        name = "nome"
        value = { name }
        onChange = {
            (event) => setName(event.target.value) }
        required /
        >
        <
        /div>{" "} <
        div className = "Coluna" >
        <
        label > Sobrenome < /label>{" "} <
        input type = "text"
        name = "sobrenome"
        value = { lastName }
        onChange = {
            (event) => setLastName(event.target.value) }
        required /
        >
        <
        /div>{" "} <
        /div>{" "} <
        div className = "Linha" >
        <
        div className = "Coluna" >
        <
        label > Email < /label>{" "} <
        input type = "email"
        name = "email"
        value = { email }
        onChange = {
            (event) => setEmail(event.target.value) }
        required /
        >
        <
        /div>{" "} <
        /div>{" "} <
        button type = "submit" > Adicionar < /button>{" "} <
        /form>{" "} <
        /div>
    );
};

export default AdicionarUsuario;