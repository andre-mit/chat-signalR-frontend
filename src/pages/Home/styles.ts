import styled from "styled-components";

import { Right } from "../../components/Message";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 36px;
`;

export const Message = styled(Right)`
  margin-top: 75px;
  cursor: pointer;
  text-align: left;
`;
