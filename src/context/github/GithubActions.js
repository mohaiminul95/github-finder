import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

export const getUserAndRepos = async (username) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${username}`),
    github.get(`/users/${username}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};

// export const getSingleUser = async (username) => {
//   const response = await fetch(`${GITHUB_URL}/users/${username}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });

//   if (response.status === 404) {
//     window.location = "/notfound";
//   } else {
//     const data = await response.json();
//     return data;
//   }
// };

// export const getRepos = async (username) => {
//   const repos_response = await fetch(`${GITHUB_URL}/users/${username}/repos`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });

//   if (repos_response.status === 404) {
//     window.location = "/notfound";
//   } else {
//     const data = await repos_response.json();
//     return data;
//   }
// };
