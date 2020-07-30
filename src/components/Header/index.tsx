import React, { useContext, useState, FormEvent } from "react";

import {
  Button,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

import { useHistory, useLocation } from "react-router-dom";

import AuthContext from "../../contexts/auth";

import {
  Container,
  Title,
  AuthArea,
  EmailText,
  PassText,
  InputArea,
} from "./styles";

const Header: React.FC = () => {
  const { signed, logOut, logIn } = useContext(AuthContext);
  const history = useHistory();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  function goSignUp() {
    history.push("/signup");
  }
  function goHome() {
    location.pathname !== "/" && history.push("/");
  }

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    await logIn(email, password);
  }

  return (
    <Container>
      <Title onClick={goHome}>Chat</Title>
      {!signed ? (
        <>
          <form onSubmit={handleLogin}>
            <AuthArea>
              <InputArea>
                <EmailText
                  id="standard-basic"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputArea>
              <InputArea>
                <PassText>
                  <InputLabel htmlFor="standard-adornment-password">
                    Password
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    endAdornment={
                      <InputAdornment
                        onClick={() => setShowPassword(!showPassword)}
                        position="end"
                      >
                        <IconButton aria-label="toggle password visibility">
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </PassText>
              </InputArea>
              <Button type="submit" variant="contained">
                Log In
              </Button>
              <Button
                variant="contained"
                onClick={goSignUp}
                style={{ marginLeft: "10px" }}
              >
                Sign Up
              </Button>
            </AuthArea>
          </form>
        </>
      ) : (
        <Button type="submit" onClick={logOut} variant="contained">
          Logout
        </Button>
      )}
    </Container>
  );
};

export default Header;
