import React from "react";
import { useSelector } from "react-redux";
import { Form, Input } from "@rocketseat/unform";

import { Container } from "./styles";

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <input type="password" name="password" placeholder="Nova senha" />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />

        <button type="button">Atualizar perfil</button>
      </Form>

      <button type="button">Sar do GoBarber</button>
    </Container>
  );
}
