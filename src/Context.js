import { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [displayCart, setDisplayCart] = useState(true);
  const [count, setCount] = useState(null);

  return (
    <Context.Provider
      value={{
        showCart: [displayCart, setDisplayCart],
        showCount: [count, setCount],
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
