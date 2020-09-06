import React from "react";
import styled from "styled-components";

export const TitleInputNative = styled.input`
  width: 100%;
  padding: 3px 15px;
  box-sizing: border-box;
  background-color: inherit;
  color: currentColor;
  outline: none;
  box-shadow: none;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 24px;
  margin-bottom: 1rem;
  color: var(--card-text);
  background-color: var(--card);
`;

const Label = styled.label``;

const TitleContainer = styled.div`
  text-align: left;
  width: 100%;
`;
export const TitleInput = ({
  label,
  name,
  value,
  placeholder,
  error,
  disabled,
  margin,
  type,
  onChange,
}) => {
  return (
    <TitleContainer>  
      <Label>
        {label}
        <TitleInputNative
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
        />
      </Label>
    </TitleContainer>
  );
};
