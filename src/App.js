import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";
import { useState } from "react";

function App() {
  const [uploadFile, setUploadFile] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const handleUpload = (e) => {
    console.log(e.target.files);
    setIsUploaded(true);
    setUploadFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("file", uploadFile);
    console.log(fd);
    fetch("http://localhost:4000/upload", {
      method: "POST",
      body: fd,
    })
      .then((res) => res.json())
      .then(console.log);
  };
  return (
    <div className="App">
      <form>
        <input type="file" onChange={handleUpload} />
        {isUploaded === true ? (
          <input type="submit" value="submit" onClick={handleSubmit} />
        ) : null}
      </form>
    </div>
  );
}

export default App;
