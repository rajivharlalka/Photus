import React, { useState } from "react";
import Upload from "./Upload";
import styled from "styled-components";
//

const App = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
`;
//

function GetCode() {
  const [response, setResponse] = useState(undefined);
  const [uploadFile, setUploadFile] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [rejected, setRejected] = useState(null);
  const [load, setLoad] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];

    const types = ["image/jpeg", "image/png", "image/gif"];
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

  async function handleSubmit(e) {
    e.preventDefault();
    setLoad(true);
    setResponse("Uploading");
    const fd = new FormData();
    fd.append("file", uploadFile);
    const response = await fetch("http://localhost:4000/upload", {
      method: "POST",
      body: fd,
    });
    const url = await response.json();
    const link = "localhost:3000/image/" + url.code;
    setLoad(false);
    setResponse(link);
  }

  return (
    <App>
      <Upload
        handleUpload={handleUpload}
        handleSubmit={handleSubmit}
        isUploaded={isUploaded}
        rejected={rejected}
      ></Upload>
      <p>{response}</p>
      {load === false ? (
        <div>
          <input
            type="button"
            value="Copy Link"
            onClick={() => {
              navigator.clipboard.writeText(response);
            }}
          />
        </div>
      ) : null}
    </App>
  );
}

export default GetCode;
