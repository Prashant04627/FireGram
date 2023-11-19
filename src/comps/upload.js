import React, { useState } from "react";
import ProgressBar from "./progressBar";

const Upload = () => {
  const [select, setSelected] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];

  const handleSelected = (e) => {
    const selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setSelected(selected);
      setError(null);
    } else {
      setError("Please Select a valid file.");
      setSelected(null);
    }
  };

  return (
    <>
      <div>
        <form>
          <input type="file" onChange={handleSelected} />
          <div>
            {error && <div> {error} </div>}
            {select && <div> {select.name} </div>}
            {select && (
              <ProgressBar select={select} setSelected={setSelected}>
              </ProgressBar>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Upload;
