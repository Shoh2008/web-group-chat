import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fade } from "react-reveal";
import { Button, Input } from "reactstrap";
import { Image } from "antd";
import "antd/dist/antd.css";
import { v4 } from "uuid";
import request from "../../../firebase/request";
import { addData, getData, deleteData } from "../../../redux/reducer/data";
import { ChatBox } from "./style";
import FluidAnimation from "react-fluid-animation";

function Messages({ keyMenu }) {
  const [message, setmessage] = useState("");
  const dispatch = useDispatch();
  const me = localStorage.getItem("groupUserId");
  const {
    data: { data },
    users: { users },
  } = useSelector((state) => state);
  const box = useRef(null);

  useEffect(() => {
    setInterval(() => {
      request.call("GroupMessages").then((data) =>
        dispatch(
          getData(
            data.sort(function (a, b) {
              if (a.createdAt > b.createdAt) {
                return 1;
              }
              if (a.createdAt < b.createdAt) {
                return -1;
              }
              return 0;
            })
          )
        )
      );
    }, 500);
  }, []);

  useEffect(() => {
    box.current.scrollTo(0, box.current.scrollHeight);
  }, []);

  function send() {
    if (message !== "") {
      const news = {
        from: users.find((e) => e.id === me)?.name,
        createdAt: JSON.stringify(new Date()),
        message: message,
      };
      request.save("GroupMessages", news, v4()).then(dispatch(addData(news)));
      setmessage("");
    }
    box.current.scrollTo(0, box.current.scrollHeight);
  }

  function sendUrl() {
    if (message !== "") {
      const news = {
        from: users.find((e) => e.id === me)?.name,
        createdAt: JSON.stringify(new Date()),
        img: message,
      };
      request.save("GroupMessages", news, v4()).then(dispatch(addData(news)));
      setmessage("");
    }
    box.current.scrollTo(0, box.current.scrollHeight);
  }

  function removeMessage(id) {
    request.remove("GroupMessages", id).then(() => {
      dispatch(deleteData(id));
    });
  }

  return (
    <ChatBox
      style={
        keyMenu === true ? { width: "calc(100% - 380px)" } : { width: "100%" }
      }
    >
      <div className="line-top">
        <span>
          <i className="bi bi-people" />
        </span>
        <div className="title">
          <b>Chat For My Friends</b>
        </div>
      </div>
      <div className="messages" ref={box}>
        {data?.map((item, index) => (
          <div
            key={index}
            className={
              item?.from === users?.find((e) => e.id === me)?.name
                ? "right"
                : "left"
            }
          >
            <Fade bottom>
              <span>
                <div className="title">
                  <Button
                    className="x-delete"
                    style={
                      item?.from !== users?.find((e) => e.id === me)?.name
                        ? { display: "none" }
                        : {}
                    }
                    onClick={() => removeMessage(item?.id)}
                  >
                    x
                  </Button>
                  <p>{item?.createdAt?.substring(12, 17)}</p>
                  <p>{item?.from}</p>
                </div>
                {item?.message}
                {item?.img ? (
                  <Image.PreviewGroup>
                    <Image src={item?.img} />
                  </Image.PreviewGroup>
                ) : (
                  ""
                )}
              </span>
            </Fade>
          </div>
        ))}
      </div>
      <div className="line-bottom">
        <Button onClick={sendUrl}>
          <i className="bi bi-images"></i>
        </Button>
        <Input
          type="text"
          placeholder="Type here to send..."
          value={message}
          onChange={(e) => setmessage(e.target.value)}
        />
        <Button onClick={send}>
          <i className="bi bi-telegram"></i>
        </Button>
      </div>
    </ChatBox>
  );
}

export default Messages;
