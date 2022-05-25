import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import reservationRequest from "../../api/reservation/reservation.request";

export const getReservationStore = createAsyncThunk(
  "reservation/getReservation",
  async (thunkAPI) => {
    try {
      const res = await reservationRequest.getReservation();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const addReservationStore = createAsyncThunk(
  "reservation/addReservation",
  async (reservation, thunkAPI) => {
    try {
      const res = await reservationRequest.addReservation(reservation);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteReservationStore = createAsyncThunk(
  "reservation/deleteReservation",
  async (reservationId, thunkAPI) => {
    try {
      const res = await reservationRequest.deleteReservation(reservationId);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  reservations: [],
};

export const reservationSlice = createSlice({
  name: "reservations",
  initialState,
  extraReducers: {
    [getReservationStore.fulfilled]: (state, action) => {
      state.reservations = action.payload;
    },
    // eslint-disable-next-line
    [getReservationStore.rejected]: (state, action) => {
      state.reservations = [];
    },
    [addReservationStore.fulfilled]: (state, action) => {
      state.reservations.push(action.payload);
    },
    // eslint-disable-next-line
    [addReservationStore.rejected]: (state, action) => {
      // state.reservations = [];
    },
    [deleteReservationStore.fulfilled]: (state, action) => {
      state.reservations = state.reservations.filter(
        (reservation) => reservation.id !== action.meta.arg,
      );
    },
    // eslint-disable-next-line
    [deleteReservationStore.rejected]: (state, action) => {
      // state.reservations = [];
    },
  },
});

const { reducer } = reservationSlice;
export default reducer;
