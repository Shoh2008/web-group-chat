import React, { useEffect, useState } from "react";
import { Block, NavBar } from "./style";
import { Button } from "reactstrap";
import SignUp from "../sign-up";
import Users from "./users";
import Messages from "./messages";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import request from "../../firebase/request";
import { getUsers } from "../../redux/reducer/users";

function Index() {
  const idStore = localStorage.getItem("groupUserId");
  const [keyMenu, setKeyMenu] = useState(true);
  const [state, setstate] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    users: { users },
  } = useSelector((state) => state);

  function toggleMenu() {
    setKeyMenu((p) => !p);
  }

  useEffect(() => {
    request.call("GroupUsers").then((data) => {
      dispatch(getUsers(data));
    });
  }, []);

  useEffect(() => {
    users.map((item) => {
      if (item.id === idStore) {
        setstate(item);
      }
    });
  }, [users]);

  return (
    <Block>
      {idStore == null ? (
        <SignUp />
      ) : (
        <>
          <Button onClick={toggleMenu} className="menuBtn">
            <i className={keyMenu === false ? "bi bi-list" : "bi bi-x"}></i>
          </Button>
          <div
            className="menu"
            style={
              keyMenu === true ? { marginLeft: "0" } : { marginLeft: "-380px" }
            }
          >
            <NavBar>
              <div
                className="profile"
                data-title={state.name + "//" + state.lastName}
              >
                {state?.name?.charAt(0)?.toUpperCase()}
              </div>
              <Button onClick={() => navigate("/sign-in")} className="signin">
                Sign In
              </Button>
            </NavBar>
          </div>
          <Users setKeyMenu={setKeyMenu} keyMenu={keyMenu} />
          <Messages keyMenu={keyMenu} />
        </>
      )}
    </Block>
  );
}

export default Index;
