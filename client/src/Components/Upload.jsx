import React from "react";

function Upload({ handleUpload, handleSubmit, isUploaded, rejected }) {
  return (
    <div>
      <input
        type="file"
        accept="image/*,capture=camera"
        capture="camera"
        onChange={handleUpload}
      />
      {isUploaded === true ? (
        <input type="submit" value="submit" onClick={handleSubmit} />
      ) : rejected ? (
        <p>{rejected}</p>
      ) : null}
    </div>
  );
}

export default Upload;
