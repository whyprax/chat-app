import React from "react";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type anything..." />
      <div className="send">
        <img
          src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/attach.png"
          alt=""
        />
        <input id="file" type="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <img
            src="https://raw.githubusercontent.com/safak/youtube2022/react-chat/src/img/addAvatar.png"
            alt=""
          />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
