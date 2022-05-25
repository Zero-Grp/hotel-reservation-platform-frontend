import apiInstance from "../apiInstance";
import store from "../../store";
import { logout } from "../../store/user";

const getRooms = () => {
  return apiInstance
    .get(`/api/room/`)
    .then((response) => {
      return response;
    })
    .catch(() => {
      // store.dispatch(logout());
    });
};

const addRoom = (room) => {
  return apiInstance
    .post(`/api/room/`, room)
    .then((response) => {
      return response;
    })
    .catch(() => {});
};

const updateRoom = (room) => {
  return apiInstance
    .put(`/api/room/`, room)
    .then((response) => {
      return response;
    })
    .catch(() => {});
};

const deleteRoom = (roomId) => {
  return apiInstance
    .delete(`/api/room/${roomId}`)
    .then((response) => {
      return response;
    })
    .catch(() => {});
};

const getRoomById = (roomId) => {
  return apiInstance
    .get(`/api/room/${roomId}`)
    .then((response) => {
      return response;
    })
    .catch(() => {});
};

const roomRequest = { getRooms, addRoom, updateRoom, deleteRoom, getRoomById };
export default roomRequest;
