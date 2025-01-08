import React, { useState } from "react";
import './Footer.css'; // Убедитесь, что путь правильный

function Footer() {
  const [isHidden, setIsHidden] = useState(false); // Состояние для скрытия футера

  // Функция для скрытия футера
  const hideFooter = () => {
    setIsHidden(true); // Скрыть футер
  };

  return (
    <div>
      <div className={`footer ${isHidden ? "hidden" : ""}`}>
        <button className="footer-close-button" onClick={hideFooter}>
          ×
        </button>
        <div className="footer-text">&copy; 2025 Все права защищены</div>
        <div className="footer-text">Сайт создан для развлечений</div>
        <div className="footer-text">Контактная информация: infot@Funchoose.com</div>
        <div className="footer-text">Наши партнеры: GameTech, FunFactory, PlayWorld</div>
        <div className="footer-text">Политика конфиденциальности</div>
        <div className="footer-text">Условия использования</div>
        <div className="footer-text">Поддержка: support@Funchoose.com</div>
        <div className="footer-text">Версия сайта: 1.0.0</div>
      </div>
    </div>
  );
}

export default Footer;
