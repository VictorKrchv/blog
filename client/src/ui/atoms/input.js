import React from "react";
import PropTypes from "prop-types";
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
  <div>
    <InputNative
    margin={margin}
    label={label}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
    />
  </div>
);

const InputNative = styled.input`
  border: 1px solid #751a2c;
  margin: ${props => props.margin ? props.margin : '0'};
  border-radius: 4px;
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  box-sizing: border-box;
  outline: none;
  box-shadow: none;
  background-color: none;
  transition: box-shadow 120ms, border-color 120ms;
`;
