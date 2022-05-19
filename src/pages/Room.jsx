import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Header } from "../components/index.js";
import { getRoomStore } from "../store/room";

const initialState = {
  id: "",
  title: "",
  description: "",
  price: "",
  imageURL: "",
};

export const Room = () => {
  const { id } = useParams();
  console.log(id);
  const { rooms } = useSelector((state) => state.room);
  const [room, setRoom] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoomStore());
  }, [dispatch]);

  useEffect(() => {
    console.log(rooms.find((r) => r.id.toString() === id));
    setRoom(rooms.find((r) => r.id.toString() === id));
  }, [rooms]);
  return (
    <div>
      <Header />
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
              <li>
                <div className="flex items-center">
                  <a
                    href="/"
                    className="mr-2 text-sm font-medium text-gray-900">
                    Home
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-5 text-gray-300">
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
              <li className="text-sm">
                <a
                  href="/"
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600">
                  {room.title}
                </a>
              </li>
            </ol>
          </nav>

          {/* Image gallery */}
          <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="hidden rounded-lg overflow-hidden lg:block">
              <img
                src={room.imageURL}
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {room.title}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:mt-0 lg:row-span-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">{room.price}</p>

              <form className="mt-10">
                {/* Colors */}
                <div className="flex flex-col gap-4">
                  <label htmlFor="start-date" className="text-xl text-gray-900">
                    Start date
                    <input
                      type="date"
                      name="start-date"
                      id=""
                      required
                      className="mt-2 w-full border border-gray-200 rounded-md py-3 px-4 flex items-center justify-center text-base font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    />
                  </label>
                  <label htmlFor="end-date" className="text-xl text-gray-900">
                    End date
                    <input
                      type="date"
                      name="end-date"
                      id=""
                      required
                      className="mt-2 w-full border border-gray-200 rounded-md py-3 px-4 flex items-center justify-center text-base font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Reserve
                </button>
              </form>
            </div>

            <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{room.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
