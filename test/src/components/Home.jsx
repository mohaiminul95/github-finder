import React, { useContext } from "react";
import AppContext from "../context/app-context";

function Home() {
  const { message, isAuth, setIsAuth } = useContext(AppContext);
  return (
    <div style={{ background: isAuth ? "green" : "red" }}>
      <h2>Home</h2>
      <p>{message}</p>
      {isAuth ? (
        <button onClick={() => setIsAuth(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsAuth(true)}>Login</button>
      )}
    </div>
  );
}

export default Home;
