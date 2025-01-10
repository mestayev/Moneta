import React, { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import oral from "./Orol.png";
import reshka from "./Reshka.png"; 
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
                  animation: "flip-up 1.5s ease-out", // Плавное поднимание
                }}
              />
            </div>
          </div>
        )}

        <style>
          {`
            @keyframes flip-up {
              0% { transform: translateY(0) rotateY(0); opacity: 0; }
              50% { transform: translateY(-50px) rotateY(180deg); opacity: 0.7; }
              100% { transform: translateY(0) rotateY(360deg); opacity: 1; }
            }
            @keyframes move-up {
              0% { transform: translateY(0); }
              50% { transform: translateY(-50px); }
              100% { transform: translateY(0); }
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
    paddingTop: "10px", // Увеличиваем отступ сверху, чтобы не перекрывать navbar
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
    marginBottom: "850px", // Увеличиваем отступ, чтобы текст был выше
    animation: "move-up 1.5s ease-out", // Анимация для текста
  },
  button: {
    marginTop: "-800px",
    padding: "12px 25px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#fff",
    background: "#007BFF",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    animation: "move-up 1.5s ease-out", // Анимация для кнопки
  },
  loaderContainer: {
    marginTop: "220px",
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
