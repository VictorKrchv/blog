import React from "react";
import styled from "styled-components";

export const Input = ({
  label,
  name,
  value,
  placeholder,
  error,
  disabled,
  margin,
  type,
  onChange,
}) => (
  <>
    {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    <InputNative
      error={error ? error : null}
      margin={margin}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  </>
);

const InputNative = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid;
  border-color: ${(props) =>
    props.error === null ? "var(--transparent-blue)" : "#f44336"};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  box-sizing: border-box;
  outline: none;
  box-shadow: none;
  background-color: none;
  transition: box-shadow 120ms, border-color 120ms;

  &:focus {
    border-color: var(--blue);
  }
`;

const ErrorMessage = styled.div`
  color: #f44336;
`;
