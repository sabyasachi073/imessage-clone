import React, { useEffect, useState } from "react";
import moment from "moment";

const SetTime = ({ time }) => {
    
    moment.updateLocale("en", {
        relativeTime: {
            s: "few seconds",
        },
    });
    
    let updatedTime = moment(time).fromNow();

  return <>{updatedTime !== "Invalid date" ? updatedTime : ""}</>;
};

export default SetTime;
