import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

const Load = ({ domLoad, duration }) => {
  const classPosition = domLoad
    ? s.loader__domLoad__position
    : s.loader__position;
  return (
    <Loader
      className={s.loader + ' ' + classPosition}
      type="Puff"
      color="#0ca0f5"
      height={100}
      width={100}
      timeout={duration ? duration : 300000}
    />
  );
};
export default Load;
