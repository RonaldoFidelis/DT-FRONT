import { useContext } from "react";
import { LogsContext } from "../context/LogsContext"
import { logApi } from "../service/useService";

export const useLog = () => {
  const {setLogs} = useContext(LogsContext);

  const loadLogs = async () => {
    const data = await logApi();
    setLogs(data);
    return data;
  }

  return {loadLogs}
}
