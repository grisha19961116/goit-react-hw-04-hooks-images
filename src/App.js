import { useState } from 'react';
import { createPortal } from 'react-dom';
import s from './App.module.css';
import api from './API/api.js';

import Searchbar from './components/Searchbar/Searchbar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Button from './components/Button/Button.jsx';
import Load from './components/Loader/Loader.jsx';
import Modal from './components/Modal/Modal.jsx';

function App() {
  const [valueSubmit, setValueSubmit] = useState('');
  const [dataFetch, setDataFetch] = useState([]);
  const [page, setPage] = useState(1);
  const [flagLoad, setFlagLoad] = useState(false);
  const [fullHd, setFullHd] = useState('');

  const handleSubmit = even => {
    even.preventDefault();
    const searchWord = even.target.lastChild.value;
    const baseUrl = `https://pixabay.com/api/?q=${searchWord}&page=${page}&key=18650753-c8867d24a687d3baeda70b1dc&image_type=photo&orientation=horizontal&per_page=12`;
    api.getFullRequest(baseUrl).then(dataRequest => {
      setDataFetch(dataRequest.hits);
      setValueSubmit(searchWord);
    });
  };

  const handleLoadButton = () => {
    const changePage = page + 1;
    setFlagLoad(true);

    const scrollList = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    };
    const baseUrl = `https://pixabay.com/api/?q=${valueSubmit}&page=${changePage}&key=18650753-c8867d24a687d3baeda70b1dc&image_type=photo&orientation=horizontal&per_page=12`;

    api.getFullRequest(baseUrl).then(dataRequest => {
      setDataFetch([...dataFetch, ...dataRequest.hits]);
      setPage(changePage);
      setFlagLoad(false);
      scrollList();
    });
  };

  const handleListenerForList = even => {
    if (even.target.tagName === 'IMG') {
      setFullHd(even.target.alt);
    }
  };

  const handleListenerForCloseModalClick = even => {
    if (even.target.tagName !== 'IMG') {
      setFullHd('');
    }
  };

  const handleListenerForCloseModalKeydown = e => {
    if (e.code === 'Escape') {
      setFullHd('');
    }
  };

  const modalRef = document.querySelector('#root__modal');

  return (
    <div>
      <Searchbar onSubmit={even => handleSubmit(even)} />
      {fullHd !== '' &&
        createPortal(
          <Modal
            src={fullHd}
            onClickClose={handleListenerForCloseModalClick}
            onKeyDown={handleListenerForCloseModalKeydown}
          />,
          modalRef,
        )}
      <ImageGallery dataFetch={dataFetch} onClick={handleListenerForList} />
      {dataFetch.length > 0 && <Button onClick={handleLoadButton} />}
      {flagLoad && <Load />}
    </div>
  );
}

export default App;
