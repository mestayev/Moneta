import React, { useState } from "react";

function Kosti() {
  const [diceCount, setDiceCount] = useState(1); // Количество костей
  const [results, setResults] = useState([6]); // Результаты броска костей
  const [isSpinning, setIsSpinning] = useState(false); // Флаг для анимации "рандомной крутки"

  // Увеличить количество костей
  const addDice = () => {
    if (diceCount < 6) {
      setDiceCount(diceCount + 1);
      setResults([...results, 6]); // Добавляем новую кость с результатом 6
    }
  };

  // Уменьшить количество костей
  const removeDice = () => {
    if (diceCount > 1) {
      setDiceCount(diceCount - 1);
      setResults(results.slice(0, -1)); // Удаляем последнюю кость
    }
  };

  // Рандомная крутка
  const rollDice = () => {
    setIsSpinning(true);
    const spinDuration = 500; // Длительность анимации (в миллисекундах)
    const newResults = Array.from({ length: diceCount }, () => Math.ceil(Math.random() * 6));
    setTimeout(() => {
      setResults(newResults);
      setIsSpinning(false);
    }, spinDuration);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎲 Кости 🎲</h1>

      <div style={styles.buttonsContainer}>
        <button onClick={addDice} style={styles.button} disabled={diceCount >= 6}>
          ➕ Добавить кость
        </button>
        <button onClick={removeDice} style={styles.button} disabled={diceCount <= 1}>
          ➖ Уменьшить кость
        </button>
      </div>

      <button onClick={rollDice} style={styles.rollButton} disabled={isSpinning}>
        {isSpinning ? "Кости крутятся..." : "Бросить кости"}
      </button>

      <div style={styles.diceContainer}>
        {results.map((result, index) => (
          <div
            key={index}
            style={{
              ...styles.dice,
              animation: isSpinning ? "spin 0.6s infinite linear" : "none",
            }}
          >
            <span style={styles.diceText}>{isSpinning ? "?" : result}</span>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    fontFamily: "'Roboto', sans-serif",
    background: "radial-gradient(circle, #ffefba, #ffffff)",
    minHeight: "100vh",
  },
  title: {
    fontSize: "3rem",
    color: "#555",
    textShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
    marginBottom: "40px",
  },
  buttonsContainer: {
    marginBottom: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  button: {
    padding: "12px 25px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#fff",
    background: "#007BFF",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s, transform 0.2s",
  },
  rollButton: {
    padding: "15px 35px",
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#fff",
    background: "#28a745",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    marginTop: "20px",
    transition: "background 0.3s, transform 0.2s",
  },
  diceContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    marginTop: "40px",
    flexWrap: "wrap",
  },
  dice: {
    width: "80px",
    height: "80px",
    backgroundColor: "#f8f9fa",
    border: "3px solid #dee2e6",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.15)",
    transform: "rotate(0deg)",
    transition: "transform 0.4s ease, background-color 0.4s ease",
  },
  diceText: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
  },
};

export default Kosti;
