import axios from "axios";
import userRequest from "../user/user.request";
import store from "../../store";
import { logout } from "../../store/user";

const getRooms = () => {
  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/api/room/`, {
      headers: userRequest.authHeader(),
    })
    .then((response) => {
      return response;
    })
    .catch(() => {
      store.dispatch(logout());
    });
};

const addRoom = (room) => {
  return axios
    .post(`${process.env.REACT_APP_BASE_URL}/api/room/`, room, {
      headers: userRequest.authHeader(),
    })
    .then((response) => {
      return response;
    })
    .catch(() => {});
};

const updateRoom = (room) => {
  return axios
    .patch(`${process.env.REACT_APP_BASE_URL}/api/room/`, room, {
      headers: userRequest.authHeader(),
    })
    .then((response) => {
      return response;
    })
    .catch(() => {});
};

const deleteRoom = (roomId) => {
  return axios
    .delete(`${process.env.REACT_APP_BASE_URL}/api/room/${roomId}`, {
      headers: userRequest.authHeader(),
    })
    .then((response) => {
      return response;
    })
    .catch(() => {});
};

const getRoomById = (roomId) => {
  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/api/room/${roomId}`, {
      headers: userRequest.authHeader(),
    })
    .then((response) => {
      return response;
    })
    .catch(() => {});
};

const roomRequest = { getRooms, addRoom, updateRoom, deleteRoom, getRoomById };
export default roomRequest;
