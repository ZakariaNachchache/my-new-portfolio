import React, { useState, useEffect } from "react";

function ExampleCarouselImage({ text, image }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Listen for changes in the theme stored in localStorage
    const handleThemeChange = () => {
      setTheme(localStorage.getItem("theme") || "light");
    };

    window.addEventListener("storage", handleThemeChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);

  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      <img
        src={image}
        alt={text}
        style={{ width: "100%", height: "auto", opacity: 0.5 }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "70px",
          padding: "20px",
          borderRadius: "5px",
          fontFamily: "Marcellus",
          // backgroundColor: theme === "light" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
          color: theme === "light" ? "black" : "white",
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default ExampleCarouselImage;
