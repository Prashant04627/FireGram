import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ select, setSelected }) => {
  const { url, progress } = useStorage(select);
  
  useEffect(() => {
    if (url) setSelected(null);
  }, [setSelected, url]);

  return (
    <div className="progress-bar" style={{ width: progress * 100 }}>
      {" "}
    </div>
  );
};

export default ProgressBar;
