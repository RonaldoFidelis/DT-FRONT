import { createContext, useState } from "react";

export const LogsContext = createContext();

export const LogsProvider = ({ children }) => {
  const [logs, setLogs] = useState([]);

  return (
    <LogsContext.Provider value={{ logs, setLogs }}>
      {children}
    </LogsContext.Provider>
  );
};


