import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`header ${show && 'header__black'}`}>
      <img
        src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
        alt='Netflix logo'
        className='header__logo'
      />
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt=''
        className='header__avatar'
      />
    </div>
  );
};

export default Header;
