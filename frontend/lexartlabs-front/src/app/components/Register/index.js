"use client";

import { requestRegister } from "@/app/api";
import { useState } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailIsValid(email)) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    try {
      await requestRegister("/users/register", { name, email, password });
      window.location.reload();
      console.log("sucesso");
    } catch (error) {
      setError("registro inválido, por favor tente novamente");
    }

    setName("");
    setEmail("");
    setPassword("");
    setError("");
  };

  const emailIsValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div>
      <h2>Registrar</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            placeholder="Nome"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="e-mail"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            placeholder="senha (minimo 6 caracteres)"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterForm;
