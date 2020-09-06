import React from "react";
import styled from "styled-components";

const Label = styled.label``;

const InputContainer = styled.div`
  text-align: left;
  width: 100%;
`;

export const InputNative = styled.textarea`
  font-family: inherit;
  overflow-y: auto;
  height: 300px;
  resize: none;
  width: 100%;
  padding: 3px 15px;
  box-sizing: border-box;
  background-color: inherit;
  outline: none;
  box-shadow: none;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 24px;
  margin-bottom: 1rem;
  color: var(--card-text);
  background-color: var(--card);
  border-color: var(--borders);

  &:focus {
  }
`;

export const ContentInput = ({
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
    <InputContainer>
      <Label>
        {label}
        <InputNative
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
        />
      </Label>
    </InputContainer>
  );
};
