import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/reducer/users";
import request from "../../../firebase/request";
import { UserBox } from "./style";
import Loader from "../../loader";

function Users({ keyMenu }) {
  const dispatch = useDispatch();
  const {
    users: { users },
  } = useSelector((state) => state);

  useEffect(() => {
    request.call("GroupUsers").then((data) => {
      dispatch(getUsers(data));
    });
  }, []);

  return (
    <UserBox style={keyMenu === true ? { left: "80px" } : { left: "-380px" }}>
      <div className="users">
        {users.length === 0 ? (
          <Loader />
        ) : (
          users?.map((item, index) => (
            <div
              className="user"
              key={index}
              style={
                item.id === localStorage.getItem("groupUserId")
                  ? { background: "#2e2e2e" }
                  : {}
              }
            >
              <span>{item?.name?.charAt(0)?.toUpperCase()}</span>
              <div className="title">
                <b>{item?.name}</b>
                <p>{item?.lastName}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </UserBox>
  );
}

export default Users;
