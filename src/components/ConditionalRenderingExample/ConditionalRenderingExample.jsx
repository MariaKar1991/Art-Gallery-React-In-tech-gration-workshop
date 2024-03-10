import "bootstrap/dist/css/bootstrap.min.css";
import "./ConditionalRenderingExample.css";

// It's an example of practicing Conditional Rendering and Styling, It's not rendered in the browser.
export default function ConditionalRenderingExample() {
  const currentHour = new Date().getHours();
  const isOpeningHours = currentHour >= 8 && currentHour <= 16;

  return (
    <div className="opening-info">
      {isOpeningHours ? <p>We&apos;re open</p> : <p>We&apos;re closed</p>}
      <div
        style={{
          display: isOpeningHours ? "block" : "none",
          color: "green",
        }}
      >
        Welcome!
      </div>
      <div
        style={{
          display: isOpeningHours ? "none" : "block",
          color: "red",
        }}
      >
        Sorry we&apos;re closed!
      </div>
    </div>
  );
}
