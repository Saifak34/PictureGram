import React from "react";
import useFirestore_ from "../hooks/useFirestore";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore_("images");
  console.log(docs);

  return (
    <div className="img-grid">
      {" "}
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <img src={doc.url} alt="uploaded" />
          </div>
        ))}{" "}
    </div>
  );
};

export default ImageGrid;
