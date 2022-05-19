export const Card = (props) => {
  const { room } = props;
  return (
    <div key={room.id} className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={room.imageSrc}
          alt={room.imageAlt}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={room.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {room.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{room.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{room.price}</p>
      </div>
    </div>
  );
};
