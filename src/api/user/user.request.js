import axios from "axios";

const register = (data) => {
  return axios
    .post(`${process.env.REACT_APP_BASE_URL}/api/user/`, data)
    .then((response) => {
      return response.data;
    });
};

const login = (username, password) => {
  return axios
    .post(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

const authHeader = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    return { Authorization: token };
  }
  return {};
};

const userRequest = { login, logout, authHeader, register };
export default userRequest;
