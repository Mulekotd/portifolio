import { Card, Image } from "react-bootstrap";
import { container, image } from "./styles";
import "./DataCard.css";

import { useState } from "react";

export const DataCard = ({ alt, src, title, url }) => {
  const [isHovered, setIsHovered] = useState(false);

  const link = {
    color: isHovered ? "#007bff" : "inherit",
    textDecoration: isHovered ? "underline" : "none",
  };

  return (
    <Card className="box d-flex flex-column">
      <div style={container} className="transparent-card">
        <Image style={image} alt={alt} src={src} />
      </div>
      <a
        href={url}
        style={link}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        {title}
      </a>
    </Card>
  );
};
