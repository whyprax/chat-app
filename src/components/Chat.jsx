import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img
            src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/add.png"
            alt=""
          />
          <img
            src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/cam.png"
            alt=""
          />
          <img
            src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/more.png"
            alt=""
          />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
