import s from './Modal.module.css';
import { useEffect } from 'react';

const Modal = ({ src, onClickClose, onKeyDown}) => {
  
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });
  return (
    <div
      className={s.Overlay}
      onClick={even => onClickClose(even)}
    >
      <div className={s.Modal}>
        <img src={src} alt="open full hd img" />
      </div>
    </div>
  );
};

export default Modal;
