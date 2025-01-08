// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">&copy; 2025 Все права защищены</p>
      <p className="footer-text">Сайт создан для развлечений</p>
      <p className="footer-text">Контактная информация: info@Funchoose.com</p>
      <p className="footer-text">Наши партнеры: GameTech, FunFactory, PlayWorld</p>
      <p className="footer-text">Политика конфиденциальности</p>
      <p className="footer-text">Условия использования</p>
      <p className="footer-text">Поддержка: support@Funchoose.com</p>
      <p className="footer-text">Версия сайта: 1.0.0</p>
    </footer>
  );
}

export default Footer;
