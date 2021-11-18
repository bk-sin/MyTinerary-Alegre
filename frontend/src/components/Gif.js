import React from "react";

export default function Gif ({title, id, url}) {
  return (
    <a href={`#${id}`} className="images">
      <h4>{title}</h4>
      <p>ID: {id}</p>
      <img src={url} alt={title} />
    </a>
  );
};
