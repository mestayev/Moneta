import React, { useState } from "react";
import "./Ruletka.css"; // Подключите CSS стили

function Ruletka() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState(null);
  const [sectors, setSectors] = useState(["Приз 1", "Приз 2", "Приз 3", "Приз 4"]);

  const spinWheel = () => {
    setIsSpinning(true);

    const randomDegree = Math.floor(Math.random() * 360) + 3600; // Добавляем несколько оборотов
    setRotation(randomDegree);

    // Определяем, какой сектор выпал
    setTimeout(() => {
      const degree = randomDegree % 360;
      const sectorAngle = 360 / sectors.length;
      const sectorIndex = Math.floor(degree / sectorAngle);
      setResult(sectors[sectorIndex]);
      setIsSpinning(false);
    }, 5000);
  };

  return (
    <div className="ruletka-container">
      <h1>Колесо фортуны</h1>

      <div className="ruletka">
        <div
          className={`ruletka-wheel ${isSpinning ? "spinning" : ""}`}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {sectors.map((sector, index) => {
            const angle = (360 / sectors.length) * index;
            return (
              <div
                key={index}
                className="ruletka-sector"
                style={{
                  transform: `rotate(${angle}deg)`,
                  backgroundColor: index % 2 === 0 ? "#ff4d4d" : "#4dff4d",
                }}
              >
                <span style={{ transform: `rotate(-${angle}deg)` }}>{sector}</span>
              </div>
            );
          })}
        </div>
        <div className="ruletka-arrow"></div>
      </div>

      <button onClick={spinWheel} disabled={isSpinning}>
        {isSpinning ? "Вращается..." : "Крутить рулетку"}
      </button>

      {result && <h2>Результат: {result}</h2>}
    </div>
  );
}

export default Ruletka;
