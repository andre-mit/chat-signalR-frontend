import React, { useContext } from "react";

import AuthProvider from "../../contexts/auth";

import { useHistory } from "react-router-dom";

import { Container, Message } from "./styles";

const Home: React.FC = () => {
  const history = useHistory();
  const { signed } = useContext(AuthProvider);
  return (
    <Container>
      <h2>Welcome to Chat</h2>
      {signed ? (
        <Message onClick={() => history.push("/rooms")}>
          <h4>Chat Team</h4>
          <p>Go to rooms</p>
        </Message>
      ) : (
        <h3>Login to get access</h3>
      )}
    </Container>
  );
};

export default Home;
