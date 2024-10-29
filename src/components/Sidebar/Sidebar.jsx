import React, { useState } from 'react';
import './Sidebar.css';

// Importando ícones de redes sociais (você pode usar fontes como Font Awesome ou ícones SVG)
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Função para alternar o tema
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-theme', !isDarkMode); // Adiciona ou remove a classe 'dark-theme'
  };

  return (
    <div className="sidebar">
      <ul className="social-icons">
        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
        <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
      </ul>

      {/* Botão para alternar o tema */}
      <button className="toggle-theme-button" onClick={toggleTheme}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default Sidebar;
