import "./App.css";
import { Button } from "@mui/material";
import { useState } from "react";

function App() {
  const [response, setResponse] = useState(undefined);
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
    const response = await fetch("http://localhost:4000/upload", {
      method: "POST",
      body: fd,
    });
    const url = await response.json();
    setResponse(url.code);
  };
  return (
    <div className="App">
      <form>
        <input type="file" onChange={handleUpload} />
        {isUploaded === true ? (
          <input type="submit" value="submit" onClick={handleSubmit} />
        ) : null}
      </form>
      {response ? <p>{response}</p> : null}
    </div>
  );
}

export default App;
