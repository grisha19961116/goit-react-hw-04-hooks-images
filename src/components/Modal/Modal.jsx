import s from './Modal.module.css';
import { useEffect } from 'react';

const Modal = ({ src, closeModalClick, closeModalEsc}) => {
  
  useEffect(() => {
    window.addEventListener('keydown', closeModalEsc);
    return () => {
      window.removeEventListener('keydown', closeModalEsc);
    };
  });
  return (
    <div
      className={s.Overlay}
      onClick={e => closeModalClick(e)}
    >
      <div className={s.Modal}>
        <img src={src} alt="open full hd img" />
      </div>
    </div>
  );
};

export default Modal;
