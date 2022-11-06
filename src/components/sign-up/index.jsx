import React, { useState, useEffect } from "react";
import { Button, Input } from "reactstrap";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { Block, Box } from "./style";
import request from "../../firebase/request";

function SignUp() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  function submit() {
    if (user.name && user.lastName && user.password) {
      const id = v4();
      request.save("GroupUsers", user, id).then(() => {
        localStorage.setItem("groupUserId", id);
      });
      navigate("/");
    }
  }

  useEffect(() => {
    if (localStorage.getItem("groupUserId")) {
      navigate("/");
    }
  }, []);

  return (
    <Block>
      <Box>
        <h2>Sign Up</h2>
        <Input
          placeholder="Name"
          onChange={(e) => setUser((p) => ({ ...p, name: e.target.value }))}
        />
        <Input
          placeholder="Last Name"
          onChange={(e) => setUser((p) => ({ ...p, lastName: e.target.value }))}
        />
        <Input
          placeholder="Password"
          onChange={(e) => setUser((p) => ({ ...p, password: e.target.value }))}
        />
        <Button onClick={submit}>Submit</Button>
      </Box>
      <Button
        onClick={() => navigate("/sign-in")}
        className="signinOUT"
      >
        Sign In
      </Button>
    </Block>
  );
}

export default SignUp;
