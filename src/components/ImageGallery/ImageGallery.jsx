import s from './ImageGallery.module.css';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx';
const ImageGallery = ({dataFetch, onClickList }) => {
  return (
    <ul className={s.ImageGallery} onClick={e => onClickList(e)}>
      {dataFetch.length > 0 &&
        dataFetch.map(({ webformatURL : url, largeImageURL : urlHd },i) => (
         <ImageGalleryItem
            key={i+1}
            url={url}
            urlHd={urlHd}
          />
        ))}
    </ul>
  );
};
export default ImageGallery;
