import React, { forwardRef } from "react";
import { selectUser } from "./features/userSlice";
import "./Message.css";
import SetTime from "./SetTime";

import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import moment from "moment";

const Message = forwardRef(
  (
    { id, contents: { timestamp, displayName, email, message, photo, uid } },
    ref
  ) => {
    const user = useSelector(selectUser);

    moment.updateLocale("en", {
      relativeTime: {
        s: "few seconds",
      },
    });

    return (
      <div
        ref={ref}
        className={`message ${user.email === email && "message__sender"}`}
      >
        <Avatar src={photo} className="message__photo" />
        <p>
          {message}
          <small>
            <SetTime time={new Date(timestamp?.toDate())} />
          </small>
        </p>

        {/* ".?" is called the optioal chaining it protects against the undefined value during the asynchoronous call */}
      </div>
    );
  }
);

export default Message;
