import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import roomRequest from "../../api/room/room.request";

export const getRoomStore = createAsyncThunk(
  "room/getRooms",
  async (thunkAPI) => {
    try {
      const res = await roomRequest.getRooms();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const addRoomStore = createAsyncThunk(
  "room/addRoom",
  async (room, thunkAPI) => {
    try {
      const res = await roomRequest.addRoom(room);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  rooms: [],
};

export const roomSlice = createSlice({
  name: "rooms",
  initialState,
  extraReducers: {
    [getRoomStore.fulfilled]: (state, action) => {
      state.rooms = action.payload;
    },
    // eslint-disable-next-line
    [getRoomStore.rejected]: (state, action) => {
      state.rooms = [];
    },
    [addRoomStore.fulfilled]: (state, action) => {
      state.rooms.push(action.payload);
    },
    // eslint-disable-next-line
    [addRoomStore.rejected]: (state, action) => {
      // state.rooms = [];
    },
  },
});

const { reducer } = roomSlice;
export default reducer;
