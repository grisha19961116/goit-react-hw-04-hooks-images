import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, urlHd }) => {
  return (
    <li  className={s.ImageGalleryItem}>
      <img
        src={url}
        alt={urlHd}
        className={s.ImageGalleryItem__image}
      />
    </li>
  );
};
export default ImageGalleryItem;
