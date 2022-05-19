export const Card = (props) => {
  const { room } = props;
  return (
    <div key={room.id} className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={room.imageURL}
          alt=""
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={`room/${room.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {room.title}
            </a>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">{room.price}</p>
      </div>
    </div>
  );
};
