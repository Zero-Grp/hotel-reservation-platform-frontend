import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, Card, CTA } from "../components/index.js";
import { getRoomStore } from "../store/room";

const initialState = [
  {
    id: "",
    title: "",
    description: "",
    price: "",
    imageURL: "",
  },
];

export const Dashboard = () => {
  const room = useSelector((state) => state.room);
  const [rooms, setRooms] = useState(initialState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoomStore());
  }, [dispatch]);

  useEffect(() => {
    setRooms(room.rooms);
  }, [room]);
  return (
    <div>
      <Header />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <CTA />
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {rooms.map((room) => (
              <Card room={room} key={room.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
