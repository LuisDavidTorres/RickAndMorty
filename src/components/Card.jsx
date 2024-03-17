function Card({ info }) {
    return (
      <div class="max-w-sm rounded overflow-hidden shadow-lg text-justify h-90 w-80">
        <img
          class="w-full"
          src={info.image}
          alt="Sunset in the mountains"
        ></img>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{info.name}</div>
        </div>
        <div class="px-6 pt-4 pb-2 ">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {info.status}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {info.species}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {info.origin.name}
          </span>
        </div>
      </div>
    );
  }
  
  export default Card;