// src/components/Loader/Loader.js
import React from "react";
import "./Loader.css";

function Loader() {
    const greetings = ["Hello", "Hola", "Bonjour", "こんにちは", "Привет", "Ciao", "안녕하세요", "Hallo", "你好", "Kia ora", "Ahoj", "Namaste", "Hej", "שלום", "Olá"];

  return (
    <div className="loader-overlay">
      <div className="wave wave-1"></div>
      <div className="wave wave-2"></div>
      <div className="wave wave-3"></div>
      <div className="greetings-container">
        {greetings.map((greeting, index) => (
          <span key={index} className={`greeting greeting-${index}`}>
            {greeting}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Loader;
