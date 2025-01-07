import React, { useState, useEffect } from 'react';
import './App.css'; // Убедитесь, что подключили этот файл
import { RotatingLines } from 'react-loader-spinner';
import oral from './Orol.png'
import reshka from './Reshka.png'

function CoinFlip() {
  const [result, setResult] = useState(null); // Результат подбрасывания монеты
  const [isFlipping, setIsFlipping] = useState(false); // Статус вращения монеты
  const [flipClass, setFlipClass] = useState(""); // Класс для анимации монеты
  const [loading, setLoading] = useState(false)

  // Функция для подбрасывания монеты
  const flipCoin = (choice) => {
    setLoading(true)
    setIsFlipping(true); // Монета начинает вращаться
    setFlipClass("flipping"); // Применяем анимацию вращения

    // Задержка на 2 секунды для имитации вращения монеты
    setTimeout(() => {
      setResult(choice); // Устанавливаем результат, который передан в функцию
      setIsFlipping(false); // Завершаем вращение монеты
      setFlipClass(""); // Останавливаем анимацию вращения
      setLoading(false)
    },500); // Задержка, которая совпадает с длительностью анимации
  };

  // Функция для случайного выбора между Орел и Решка
  const flipRandom = () => {
    const randomChoice = Math.random() > 0.5 ? 'Орел' : 'Решка'; // Генерируем случайный результат
    flipCoin(randomChoice); // Подбрасываем монету с результатом
  };

  // Обработчик события нажатия клавиш
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'o' || event.key === 'O') {
        flipCoin('Орел'); // Если нажата клавиша 'O', то выпадет "Орел"
      } else if (event.key === 'r' || event.key === 'R') {
        flipCoin('Решка'); // Если нажата клавиша 'R', то выпадет "Решка"
      }
    };

    // Добавляем слушатель событий при монтировании компонента
    window.addEventListener('keydown', handleKeyPress);

    // Убираем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []); // Эффект с пустым массивом зависимостей будет выполнен один раз при монтировании компонента

  // if (loading) return

  return (
    <div style={{ textAlign: 'center', padding: '50px', fontWeight: 'bold', paddingTop:'200px' }}>
      <h1>Бросание монетки</h1>

      <div style={{ marginBottom: '20px', fontSize: '18px' }}>
        <p>случайного результат</p>
      </div>

      {/* Кнопка для случайного выбора */}
      <button
        onClick={flipRandom}
        disabled={isFlipping} // Отключаем кнопку, пока монета вращается
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          margin: '10px',
          cursor: isFlipping ? 'not-allowed' : 'pointer',
        }}
      >
        Случайный выбор
      </button>

      {/* Показываем результат подбрасывания */}

        {
          loading ?  <div className='flex justify-center mt-[150px]'>
            <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="red"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
          </div> : result && (
          <>
            <div className={`result ${result ? 'show' : ''}`} style={{ marginTop: '20px', fontSize: '24px', fontWeight: 'bold' }}>
              Результат: {result}
            </div>
         <div className='flex justify-center'>   {
              result == 'Орел' ? <img src={reshka} alt="reshka" className='w-[300px] h-[300px]' /> : <img src={oral} alt="oral" className='w-[300px] h-[300px]' />
            }</div>
          </>

      )}
    </div>
  );
}

export default CoinFlip;
