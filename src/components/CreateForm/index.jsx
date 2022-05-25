import { useState, useEffect } from "react";
import axios from "axios";

export const CreateForm = () => {
  const [datas, setDatas] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/room/")
      .then((res) => {
        console.log(res.data);
        setDatas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const sendDataToAPI = () => {
    axios
      .post("http://localhost:8080/api/room/", {
        title,
        description,
        price,
        url,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Add a Room
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="title" className="sr-only">
                Room title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                autoComplete="title"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Room Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="description" className="sr-only">
                Description
              </label>
              <input
                id="description"
                name="description"
                type="text"
                autoComplete="description"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="price" className="sr-only">
                Room Price
              </label>
              <input
                id="price"
                name="price"
                type="text"
                autoComplete="price"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="url" className="sr-only">
                Room image
              </label>
              <input
                id="url"
                name="url"
                type="text"
                autoComplete="url"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Image URL"
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={sendDataToAPI}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save the Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
