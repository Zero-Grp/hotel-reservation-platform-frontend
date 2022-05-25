import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { toast } from "react-toastify";
import { Header, Banner, Model } from "../components/index.js";
import {
  getReservationStore,
  deleteReservationStore,
} from "../store/reservation";

const initialState = [
  {
    id: "",
    amount: "",
    startDate: "",
    endDate: "",
    customer: "",
    room: "",
    status: "",
  },
];

const token = localStorage.getItem("token");
let user;
if (token) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  user = JSON.parse(window.atob(base64));
}

export const Reservation = () => {
  const reservations = useSelector((state) => state.reservation);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);
  const [reservation, setReservation] = useState(initialState);
  const dispatch = useDispatch();

  const cancel = async () => {
    const res = await dispatch(deleteReservationStore(id));
    setOpen(false);
    if (res.payload === "Reservation successfully deleted") {
      toast.success("Cancel reservation success.");
    } else {
      toast.error("Something went wrong.");
    }
  };

  const action = (resId) => {
    setId(resId);
    setOpen(true);
  };

  useEffect(() => {
    dispatch(getReservationStore());
  }, [dispatch]);

  useEffect(() => {
    if (reservations.reservations.length > 0) {
      setReservation(
        reservations.reservations.filter((r) => r.customer === user.sub),
      );
    }
  }, [reservations]);

  return (
    <div>
      <Header />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <Banner />
          <div className="flow-root mt-8">
            <ul className="-my-6 divide-y divide-gray-200">
              {reservation[0].id !== "" &&
                reservation.map((res) => (
                  <li key={res.id} className="flex py-6">
                    <div className="flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={`room/${res.id}`}>Rood Id: {res.room}</a>
                          </h3>
                          <p className="ml-4">USD {res.amount}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {moment(res.startDate).format("ll")} -{" "}
                          {moment(res.endDate).format("ll")}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">
                          {moment(res.endDate).diff(
                            moment(res.startDate),
                            "days",
                          )}{" "}
                          days
                        </p>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => action(res.id)}>
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <Model action={{ open, setOpen, cancel }} />
    </div>
  );
};
