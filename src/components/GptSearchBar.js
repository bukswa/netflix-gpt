import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-40 w-screen flex justify-center">
      <form className="bg-black px-20 py-4 flex whitespace-pre-wrap">
        <input
          className="border border-black px-4  rounded-sm w-80"
          type="text"
          placeholder="Search for topics..."
        />
        <button
          className=" px-4 ml-4 rounded-md bg-red-600 text-white"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
