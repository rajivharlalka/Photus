import { useState } from "react";
import Upload from "./Components/Upload";

function App() {
  const [response, setResponse] = useState(undefined);
  const [uploadFile, setUploadFile] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [rejected, setRejected] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];

    const types = ["image/jpeg", "image/png"];
    let matched = false;
    console.log(file);
    for (const type in types) {
      console.log(type, file.type);
      if (file.type === types[type]) {
        matched = true;
        console.log(matched, "yes");
      }
    }
    if (matched) {
      setUploadFile(file);
      setRejected(null);
      setIsUploaded(true);
    } else {
      setUploadFile(null);
      setRejected("Invalid file type");
      setIsUploaded(false);
    }
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
      <Upload
        handleUpload={handleUpload}
        handleSubmit={handleSubmit}
        isUploaded={isUploaded}
        rejected={rejected}
      ></Upload>
      {response ? <p>{response}</p> : null}
    </div>
  );
}

export default App;
