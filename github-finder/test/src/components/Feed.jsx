import React, { useContext } from "react";
import AppContext from "../context/app-context";

function Feed() {
  const { message } = useContext(AppContext);
  return (
    <div>
      <h2>Feed</h2>
      <p>{message}</p>
    </div>
  );
}

export default Feed;
