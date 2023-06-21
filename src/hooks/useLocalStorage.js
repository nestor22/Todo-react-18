import React from "react";

function useLocalStorage(itemName, initialValue = []) {
  const [item, setItem] = React.useState();
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem = localStorageItem
    ? JSON.parse(localStorageItem)
    : initialValue;

    setItem(parsedItem)
  const saveItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };
  return {
    item,
    saveItem,
  };
}

export default useLocalStorage;
