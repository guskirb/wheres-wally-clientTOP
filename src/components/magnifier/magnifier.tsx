import "./magnifier.css";

export default function Magnifier({
  photo,
  position,
  showMagnifier,
  cursorPosition,
}: {
  photo: File;
  position: object;
  showMagnifier: boolean;
  cursorPosition: object;
}) {
  return (
    <div className="magnifier__container">
      <div
        className="magnifier-image"
        style={{
          display: showMagnifier ? "" : "none",
          backgroundImage: `url(${photo})`,
          backgroundPosition: `${position.x}% ${position.y}%`,
          left: `${cursorPosition.x - 80}px`,
          top: `${cursorPosition.y - 80}px`,
          pointerEvents: "none",
        }}
      ></div>
    </div>
  );
}
