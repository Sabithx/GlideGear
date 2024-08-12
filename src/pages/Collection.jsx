import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

function Collection() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { products } = useContext(UserContext);

  setData(products);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-16 xl:p-32 bg-gray-200">
      <div className="py-4 flex justify-between">
        <h1 className="text-2xl md:text-3xl font-bold">All Products</h1>
        <input
          className="border shadow-md h-14 w-64 border-gray-400 p-4"
          placeholder="Search Shoe"
          type="text"
          onChange={handleSearch}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredData.map((item) => (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className="relative bg-white shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 md:h-56 lg:h-64 object-cover"
            />
            <div className="px-4 py-6">
              <h2 className="text-lg md:text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600 mt-2">${item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Collection;
