// src/pages/Monetochka.jsx
import React, { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
import oral from "./Orol.png"; // Убедитесь, что файл находится в той же папке
import reshka from "./Reshka.png"; // Убедитесь, что файл находится в той же папке

function Monetochka() {
  const [result, setResult] = useState(null); // Результат подбрасывания монеты
  const [isFlipping, setIsFlipping] = useState(false); // Статус вращения монеты
  const [rotation, setRotation] = useState(0); // Угол вращения монеты
  const [finalChoice, setFinalChoice] = useState(""); // Сохранение окончательного выбора (Орел или Решка)

  // Функция для подбрасывания монеты с круткой
  const flipCoin = (choice) => {
    setIsFlipping(true);

    // Рандомное вращение
    const randomRotation = Math.floor(Math.random() * 360); // Генерация случайного угла вращения
    setRotation(randomRotation);

    setTimeout(() => {
      setResult(choice); // Устанавливаем результат
      setFinalChoice(choice); // Запоминаем окончательное значение
      setIsFlipping(false); // Останавливаем вращение
    }, 1500); // Задержка 1.5 секунды для имитации вращения
  };

  // Обработчик клавиш
  const handleKeyDown = (event) => {
    if (event.key === "r" || event.key === "R") {
      flipCoin("Решка");
    } else if (event.key === "o" || event.key === "O") {
      flipCoin("Орел");
    }
  };

  // Подключаем обработчик клавиатуры
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    // Удаляем обработчик при размонтировании компонента
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="">
      <div style={styles.container}>
        <h1 style={styles.title}>Бросание монетки</h1>

        <button
          onClick={() => flipCoin(Math.random() > 0.5 ? "Орел" : "Решка")}
          disabled={isFlipping}
          style={styles.button}
        >
          {isFlipping ? "Подбрасываю..." : "Случайный выбор"}
        </button>

        {isFlipping ? (
          <div style={styles.loaderContainer}>
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              strokeColor="gray"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
            />
          </div>
        ) : result && (
          <div style={styles.resultContainer}>
            <h2 style={styles.resultText}>Результат: {result}</h2>
            <div style={styles.coinWrapper}>
              <img
                src={finalChoice === "Орел" ? oral : reshka}
                alt={finalChoice}
                style={{
                  ...styles.coinImage,
                  transform: `rotate(${rotation}deg)`, // Вращение монеты
                  animation: "flip 1.5s ease-out", // Плавное вращение
                }}
              />
            </div>
          </div>
        )}

        <style>
          {`
            @keyframes flip {
              0% { transform: rotateY(0); opacity: 0; }
              50% { transform: rotateY(180deg); opacity: 0.7; }
              100% { transform: rotateY(360deg); opacity: 1; }
            }
          `}
        </style>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    paddingTop: "80px", // Увеличиваем отступ сверху, чтобы не перекрывать navbar
    marginTop: "40px", // Убираем отрицательный отступ
    fontFamily: "'Roboto', sans-serif",
    background: "linear-gradient(to top, #ffefba, #ffffff)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "background 0.5s ease",
  },
  title: {
    fontSize: "3rem",
    color: "#555",
    textShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
    marginBottom: "20px", // Уменьшаем отступ
  },
  button: {
    padding: "12px 25px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#fff",
    background: "#007BFF",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  },
  loaderContainer: {
    marginTop: "20px",
    transition: "opacity 0.3s ease-in-out",
  },
  resultContainer: {
    marginTop: "20px",
    transition: "transform 0.5s ease, opacity 0.3s ease-in-out",
  },
  resultText: {
    fontSize: "1.5rem",
    color: "#333",
    transition: "color 0.5s ease",
  },
  coinWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  coinImage: {
    width: "200px",
    height: "200px",
    transition: "transform 1s ease-in-out",
  },
};

export default Monetochka;
