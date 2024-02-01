import React from "react";
import "./input.css";
import { styled } from "styled-components";

export default function Input({ title, type, name, setter }) {
  return (
    <Div>
      <Title>{title}</Title>
      <input
        type={type}
        value={name}
        onChange={(e) => {
          setter(e.target.value);
        }}
      />
    </Div>
  );
}

const Div = styled.div`
  margin: 5px 10px;
`;

const Title = styled.h1`
  font-size: 18px;
`;
