import React, { useRef, useEffect, useState } from "react";
import { FastAverageColor } from "fast-average-color";
import Articles from "./Articles";

export default function ColorThiefExample() {
  const imgRef = useRef(null);
  const [color, setColor] = useState(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const fac = new FastAverageColor();
    fac.getColorAsync(imgRef.current)
      .then(color => {
        setColor(color.rgb);
      })
      .catch(e => {
        console.error(e);
      });

    return () => fac.destroy();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <img
        ref={imgRef}
        src="https://picsum.photos/300"
        crossOrigin="anonymous" // pour éviter les problèmes CORS
        alt="Example"
        style={{ maxWidth: "300px", display: "block" }}
      />

      {color && (
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: color,
            marginTop: "10px",
          }}
        >
          Couleur moyenne
        </div>
      )}

      <Articles />
    </div>
  );
}
