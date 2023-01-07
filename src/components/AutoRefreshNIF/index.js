import "./style.css";
import { useState, useEffect } from "react";

export const AutoRefreshNIF = ({ refreshNif }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isReady, setIsReady] = useState(true);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (isChecked && isReady) {
      refreshNif();

      setIsReady(false);

      setTimeout(() => {
        setIsReady(true);
      }, 2000);
    }
  }, [refreshNif, isChecked, isReady]);

  return (
    <div className="autoRefreshContainer">
      <label htmlFor="autoRefresh">Auto Refresh</label>
      <input
        id="autoRefresh"
        type="checkbox"
        onChange={handleChange}
        checked={isChecked}
      ></input>
    </div>
  );
};
