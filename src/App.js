import React, { useState } from "react";
import Title from "./comps/Title";
import Upload from "./comps/upload";
import ImageGrid from "./comps/imageGrid";
import ImageView from "./comps/imageView";

function App() {
  const [selectedImg , setSelectedImg] = useState(null)
  return (
    <div className="App">
      <Title />
      <Upload />
      <ImageGrid setSelectedImg={setSelectedImg} />
     { selectedImg && <ImageView selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
