import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { setChat } from "./features/chatSlice";
import SetTime from "./SetTime";

import { Avatar } from "@material-ui/core";
import { useDispatch } from "react-redux";
import db from "./firebase";

const SidebarChat = ({ id, chatName }) => {
  const [chatInfo, setChatInfo] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChatInfo(snapshot.docs.map((doc) => doc.data()))
      );
  }, [id]);

  return (
    <div
      className="sidebarChat"
      onClick={() => {
        dispatch(
          setChat({
            chatId: id,
            chatName: chatName,
          })
        );
      }}
    >
      <Avatar src={chatInfo[0]?.photo} />
      <div className="sidebarChat__info">
        <h3>{chatName}</h3>
        <p>{chatInfo[0]?.message}</p>
        <small>
          <SetTime time={new Date(chatInfo[0]?.timestamp?.toDate())} />
        </small>
        {/* <small>{timeago.format(new Date(chatInfo[0]?.timestamp?.toDate()))}</small> */}
      </div>
    </div>
  );
};

export default SidebarChat;
