import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { Block, Box } from "./style";
import request from "../../firebase/request";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../../redux/reducer/users";

function SignIn() {
  const [state, setstate] = useState({});
  const {
    users: { users },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    request.call("GroupUsers").then((data) => {
      dispatch(getUsers(data));
    });
  }, []);

  function submit() {
    if (state.name && state.password) {
      users.map((item) => {
        if (item.name === state.name && item.password) {
          localStorage.setItem("groupUserId", item.id);
          navigate("/");
        }
      });
    }
  }

  return (
    <Block>
      <Box>
        <h2>Sign In</h2>
        <Input
          placeholder="Name"
          onChange={(e) => setstate((p) => ({ ...p, name: e.target.value }))}
        />
        <Input
          placeholder="Password"
          onChange={(e) =>
            setstate((p) => ({ ...p, password: e.target.value }))
          }
        />
        <Button onClick={submit}>Submit</Button>
      </Box>
    </Block>
  );
}

export default SignIn;
