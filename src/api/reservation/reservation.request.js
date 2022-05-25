import apiInstance from "../apiInstance";

const getReservation = () => {
  return apiInstance
    .get(`/api/reservation/`)
    .then((response) => {
      return response;
    })
    .catch(() => {});
};

const addReservation = (reservation) => {
  return apiInstance
    .post(`/api/reservation/`, reservation)
    .then((response) => {
      return response;
    })
    .catch(() => {});
};

const deleteReservation = (reservationId) => {
  return apiInstance
    .delete(`/api/reservation/${reservationId}`)
    .then((response) => {
      return response;
    })
    .catch(() => {});
};

const reservationRequest = {
  getReservation,
  addReservation,
  deleteReservation,
};
export default reservationRequest;
