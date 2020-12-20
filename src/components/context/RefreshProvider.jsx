import React, { createContext, useState, useContext } from "react";

const RefreshContext = createContext();

export default function RefreshProvider({ children }) {
  const [refresh, setRefresh] = useState(false);

  return (
    <RefreshContext.Provider
      value={{
        refresh,
        setRefresh,
      }}
    >
      {children}
    </RefreshContext.Provider>
  );
}

export function useRefresh() {
  const context = useContext(RefreshContext);
  const { refresh, setRefresh } = context;
  return { refresh, setRefresh };
}
