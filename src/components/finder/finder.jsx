import "./finder.css";

export default function Finder({ showFinder }) {
  return (
    <div
      className="finder__container"
      style={
        showFinder.show
          ? {
              left: `${showFinder.x - 40}px`,
              top: `${showFinder.y - 40}px`,
            }
          : { display: "none" }
      }
    >
      <div className="finder-circle" key={showFinder.x}></div>
      <div className="finder-img__container">
        <div className="finder-img img1" ></div>
        <div className="finder-img img2" ></div>
        <div className="finder-img img3" ></div>
      </div>
    </div>
  );
}
