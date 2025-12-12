import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 text-gray-800 font-poppins">
      <h1 className="text-4xl font-bold mb-6">Counter App</h1>

      <div className="text-6xl font-extrabold bg-white px-12 py-6 rounded-2xl shadow-lg mb-8">
        {count}
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-xl shadow-md transition transform hover:scale-105"
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-xl shadow-md transition transform hover:scale-105"
        >
          Decrement
        </button>

        <button
          onClick={() => setCount(0)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-xl shadow-md transition transform hover:scale-105"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
