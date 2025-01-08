// src/pages/About.jsx
import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>О сайте</h1>
      <p style={styles.text}>Добро пожаловать на наш сайт, который был создан для вашего развлечения! Мы предлагаем несколько увлекательных игр для отличного времяпрепровождения:</p>
      <ul style={styles.list}>
        <li style={styles.listItem}>Бросание монеты — выбери одну из сторон и проверь, что выпадет!</li>
        <li style={styles.listItem}>Бросок костей — почувствуй дух игры с классическим броском костей!</li>
      </ul>
      <p style={styles.text}>Этот сайт создан для того, чтобы приносить вам радость и положительные эмоции. Не забудьте воспользоваться всеми функциями, которые мы подготовили для вас!</p>
      <p style={styles.text}>Игры доступны в любое время, и мы стараемся сделать их максимально интересными и захватывающими.</p>
      <p style={styles.text}>Желаем вам удачи и веселья в играх!</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontFamily: "'Roboto', sans-serif",
    background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
    minHeight: '100vh',
  },
  title: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  text: {
    fontSize: '1.1rem',
    color: '#34495e',
    lineHeight: '1.6',
    marginBottom: '20px',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    textAlign: 'left',
    fontSize: '1.1rem',
    color: '#34495e',
    marginBottom: '30px',
    display: 'inline-block',
    textAlign: 'left',
  },
  listItem: {
    margin: '10px 0',
    paddingLeft: '20px',
    position: 'relative',
    fontWeight: '500',
  },
};

export default About;
