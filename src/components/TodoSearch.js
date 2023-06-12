import React, { useState } from "react";

export const TodoSearch = ({searchValue, setSearchValue}) => {
 
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <>
      <label class="relative block">
        <input
          class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
          value={searchValue}
          onChange={handleChange}
        />
      </label>
    </>
  );
};
