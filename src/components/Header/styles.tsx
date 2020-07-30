import React from "react";
import styled from "styled-components";

import { TextField, InputLabel, FormControl } from "@material-ui/core";

export const Container = styled.div`
  height: 60px;
  background: rgb(91, 0, 0);
  background: linear-gradient(
    344deg,
    rgba(91, 0, 0, 1) 23%,
    rgba(45, 49, 159, 1) 63%,
    rgba(63, 111, 156, 1) 100%
  );
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const Title = styled.h3`
  font-size: 24px;
  cursor: pointer;
`;

export const AuthArea = styled.div`
  display: flex;
  align-items: center;
`;

export const InputArea = styled.div`
  margin-right: 25px;
`;

export const EmailText = styled(TextField)`
  & > label,
  input {
    color: #fff;
  }
  & > .MuiInputLabel-root.Mui-focused {
    color: #fef0f5;
  }
  .MuiInput-underline:before,
  .MuiInput-underline:after {
    border-bottom: 2px solid #fff;
  }
`;

export const PassText = styled(FormControl)`
  .MuiFormLabel-root,
  .Mui-focused,
  .MuiFormLabel-root.Mui-focused,
  input {
    color: #fff;
  }
  #standard-adornment-password,
  .Mui-focused::after {
    border-bottom: 2px solid #fff;
  }
  button span svg {
    color: #fff;
    fill: #fff;
  }
`;
