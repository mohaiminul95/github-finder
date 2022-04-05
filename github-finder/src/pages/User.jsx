import React, { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";

function User({ username }) {
  const params = useParams();
  const { getSingleUser, user } = useContext(GithubContext);

  useEffect(() => {
    getSingleUser(params.username);
  }, []);

  return <div>{params.username}</div>;
}

export default User;
