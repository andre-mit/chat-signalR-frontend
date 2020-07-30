import styled from "styled-components";

export const Right = styled.div`
  position: relative;
  background: #ccc;
  text-align: right;
  min-width: 20%;
  padding: 10px 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
  float: right;
  right: 20px;
  color: #000;

  &::before {
    content: "";
    position: absolute;
    visibility: visible;
    top: -1px;
    right: -10px;
    border: 10px solid transparent;
    border-top: 10px solid #ccc;
  }
  &::after {
    content: "";
    position: absolute;
    visibility: visible;
    top: 0px;
    right: -8px;
    border: 10px solid transparent;
    border-top: 10px solid #ccc;
    clear: both;
  }
`;

export const Left = styled.div`
  position: relative;
  background: #ccc;
  text-align: right;
  min-width: 45%;
  padding: 10px 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
  float: right;
  right: 20px;
  color: #000;

  &::before {
    content: "";
    position: absolute;
    visibility: visible;
    top: -1px;
    left: -10px;
    border: 10px solid transparent;
    border-top: 10px solid #ccc;
  }
  &::after {
    content: "";
    position: absolute;
    visibility: visible;
    top: 0px;
    left: -8px;
    border: 10px solid transparent;
    border-top: 10px solid #ccc;
    clear: both;
  }
`;
