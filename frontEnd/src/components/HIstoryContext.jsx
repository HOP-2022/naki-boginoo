import React, { createContext, useState } from "react";

export const Context = createContext();

export const HistoryContext = ({ children }) => {
  const [history, setHistory] = useState(false);
  const [data, setData] = useState();
  const handleChange = () => {
    setHistory(!history);
  };
  return (
    <Context.Provider value={{ handleChange, history, data, setData }}>
      {children}
    </Context.Provider>
  );
};
