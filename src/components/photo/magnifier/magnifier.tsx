import "./magnifier.css";

export default function Magnifier({
  photo,
  magnifier,
  position,
  showMagnifier,
  cursorPosition,
}: {
  photo: File;
  magnifier: boolean;
  position: object;
  showMagnifier: boolean;
  cursorPosition: object;
}) {
  return (
    <div className="magnifier__container">
      <div
        className="magnifier-image"
        style={{
          display: magnifier && showMagnifier ? "" : "none",
          backgroundImage: `url(${photo})`,
          backgroundPosition: `${position.x}% ${position.y}%`,
          left: `${cursorPosition.x - 70}px`,
          top: `${cursorPosition.y - 70}px`,
          pointerEvents: "none",
        }}
      ></div>
    </div>
  );
}
