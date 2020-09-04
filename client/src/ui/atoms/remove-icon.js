import React from "react";
import Remove from "../../assets/remove.svg";
import styled from "styled-components";

export const RemoveIcon = ({width, height, handleClick}) => {
  return <Img onClick={handleClick} src={Remove} width={width} height={height}/>;
};

const Img = styled.img`
  cursor: pointer;
  width: ${(props) => props.width ? props.width : "20px"};
  height: ${(props) => props.height ? props.height : "20px"};


`;
