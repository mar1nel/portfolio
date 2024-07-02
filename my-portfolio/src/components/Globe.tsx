import Spline from "@splinetool/react-spline";

export default function Globe() {
  return (
    <div
      style={{
        width: "1200px",
        height: "1000px",
        position: "absolute",
        zIndex: 999,
      }}
    >
      <Spline scene="https://prod.spline.design/exvodhjiyCSSQB5E/scene.splinecode" />
    </div>
  );
}
