import Mappin from "../mapping/status";


function Card({ info }) {
  const translatedStatus = Mappin[info.status] || "Desconocido";

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg text-justify h-90 w-80">
      <img
        className="w-full"
        src={info.image}
        alt="Sunset in the mountains"
      ></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{info.name}</div>
      </div>
      <div className="px-6 pt-4 pb-2 ">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Estado: {translatedStatus}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Especie: {info.species}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {info.origin.name}
        </span>
      </div>
    </div>
  );
}

export default Card;
