// src/animated/Counter.jsx
import { motion, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import "./Counter.css";

// Number component
function Number({ mv, number, height }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) memo -= 10 * height;
    return memo;
  });

  return (
    <motion.span className="counter-number" style={{ y }}>
      {number}
    </motion.span>
  );
}

// Digit component
function Digit({ place, value, height, digitStyle }) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div className="counter-digit" style={{ height, ...digitStyle }}>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </div>
  );
}

// Main Counter component
export default function CounterWithButton({
  fontSize = 100,
  padding = 0,
  places = [100, 10, 1],
  gap = 8,
  borderRadius = 4,
  horizontalPadding = 8,
  textColor = "white",
  fontWeight = "bold",
  containerStyle,
  counterStyle,
  digitStyle,
  gradientHeight = 16,
  gradientFrom = "black",
  gradientTo = "transparent",
  topGradientStyle,
  bottomGradientStyle,
}) {
  const [value, setValue] = useState(
    () => parseInt(localStorage.getItem("counterValue")) || 0
  );

  const height = fontSize + padding;

  // Save value to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("counterValue", value);
  }, [value]);

  const increaseCounter = () => setValue((prev) => prev + 1);

  const defaultCounterStyle = {
    fontSize,
    gap: gap,
    borderRadius: borderRadius,
    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
    color: textColor,
    fontWeight: fontWeight,
  };

  const defaultTopGradientStyle = {
    height: gradientHeight,
    background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,
  };

  const defaultBottomGradientStyle = {
    height: gradientHeight,
    background: `linear-gradient(to top, ${gradientFrom}, ${gradientTo})`,
  };

  return (
    <div style={{ textAlign: "center", ...containerStyle }}>
      <div
        className="counter-counter"
        style={{ ...defaultCounterStyle, ...counterStyle, display: "inline-flex" }}
      >
        {places.map((place) => (
          <Digit
            key={place}
            place={place}
            value={value}
            height={height}
            digitStyle={digitStyle}
          />
        ))}
      </div>

      <div className="gradient-container">
        <div
          className="top-gradient"
          style={topGradientStyle || defaultTopGradientStyle}
        ></div>
        <div
          className="bottom-gradient"
          style={bottomGradientStyle || defaultBottomGradientStyle}
        ></div>
      </div>

      {/* Button below counter */}
      <div>
        <button
          onClick={increaseCounter}
          className="like-button"
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Can rate my portfolio
        </button>
      </div>
    </div>
  );
}
